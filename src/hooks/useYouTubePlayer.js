import { useEffect, useRef, useState } from "react";

const useYouTubePlayer = (videoKey) => {
  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [ytReady, setYtReady] = useState(false);

  // 1) Load YouTube API script once
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      queueMicrotask(() => setYtReady(true));
      return;
    }

    window.onYouTubeIframeAPIReady = () => {
      queueMicrotask(() => setYtReady(true));
    };

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);
  }, []);

  // 2) Initialize the player (only when YT is ready AND videoKey exists)
  useEffect(() => {
    if (!ytReady || !videoKey) return;

    // Destroy old instance if exists
    if (playerRef.current?.destroy) {
      playerRef.current.destroy();
    }

    playerRef.current = new window.YT.Player("hero-player", {
      videoId: videoKey,
      playerVars: {
        autoplay: 1,
        controls: 0,
        mute: 1,
        loop: 1,
        playlist: videoKey,
        vq: "1080hd",
      },
      events: {
        onReady: (event) => {
          event.target.setPlaybackQuality("hd1080");
          event.target.mute();
          event.target.playVideo();
        },
      },
    });
  }, [ytReady, videoKey]);

  // 3) Mute toggle
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
