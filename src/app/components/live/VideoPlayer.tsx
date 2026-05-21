"use client";

import { useRef, useEffect } from "react";

type VideoPlayerProps = {
  stream?: MediaStream | null;
};

export default function VideoPlayer({ stream }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      className="w-full h-full object-cover"
    />
  );
}