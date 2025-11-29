import { useEffect, useRef, useState } from "react";

const useYouTubePlayer = (videoKey) => {
  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Load YouTube API once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);
  }, []);

  // Initialize player when videoKey arrives
  useEffect(() => {
    if (!videoKey) return;

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("hero-player", {
        videoId: videoKey,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          loop: 1,
          playlist: videoKey,
          modestbranding: 1,
          rel: 0,
          vq: "hd1080",
        },
        events: {
          onReady: (event) => {
            event.target.setPlaybackQuality("hd1080");
            event.target.playVideo();
          },
        },
      });
    };
  }, [videoKey]);

  // Mute/Unmute
  const toggleMute = () => {
    const player = playerRef.current;
    if (!player) return;

    if (isMuted) player.unMute();
    else player.mute();

    setIsMuted(!isMuted);
  };

  return { isMuted, toggleMute };
};

export default useYouTubePlayer;
