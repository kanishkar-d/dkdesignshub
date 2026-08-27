import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Maximize2 } from 'lucide-react';

export default function VideoBackground({ isPlaying, isMuted, onTogglePlay, onToggleMute }) {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const videoSrc = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch((err) => {
          console.warn("Autoplay blocked or video play error:", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#002241]">
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => setHasError(true)}
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Fallback elegant gradient background if video is loading or unsupported */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#00172e] via-[#002241] to-[#001427] animate-pulse" />
      )}
    </div>
  );
}
