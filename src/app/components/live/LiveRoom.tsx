"use client";

import { createPeer } from "@/app/lib/webrtc";
import { useEffect } from "react";
import { io } from "socket.io-client";

// const socket = io("http://localhost:3000");
const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL!);

type LiveRoomProps = {
  roomId: string;
};

export default function LiveRoom({ roomId }: LiveRoomProps) {
  useEffect(() => {
    const peer = createPeer();

    socket.emit("join-room", roomId);

    peer.ontrack = (event: RTCTrackEvent) => {
      const video = document.getElementById("video") as HTMLVideoElement | null;
      if (video) {
        video.srcObject = event.streams[0];
      }
    };

    const handleOffer = async ({ offer }: { offer: RTCSessionDescriptionInit }) => {
      await peer.setRemoteDescription(offer);

      const answer = await peer.createAnswer();
      await peer.setLocalDescription(answer);

      socket.emit("answer", { room: roomId, answer });
    };

    socket.on("offer", handleOffer);

    return () => {
      socket.off("offer", handleOffer);
      peer.close?.();
    };
  }, [roomId]);

  return (
    <video
      id="video"
      autoPlay
      playsInline
      className="w-full h-full object-cover"
    />
  );
}