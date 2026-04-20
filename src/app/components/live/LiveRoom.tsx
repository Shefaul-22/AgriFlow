"use client";

import { createPeer } from "@/app/lib/webrtc";
import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export default function LiveRoom({ roomId }) {
  useEffect(() => {
    const peer = createPeer();

    socket.emit("join-room", roomId);

    peer.ontrack = (event) => {
      const video = document.getElementById("video") as HTMLVideoElement;
      video.srcObject = event.streams[0];
    };

    socket.on("offer", async ({ offer }) => {
      await peer.setRemoteDescription(offer);

      const answer = await peer.createAnswer();
      await peer.setLocalDescription(answer);

      socket.emit("answer", { room: roomId, answer });
    });
  }, []);

  return <video id="video" autoPlay playsInline />;
}
