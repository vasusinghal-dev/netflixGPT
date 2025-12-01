import iIcon from "../assets/I_Icon.png";
import useMovieTrailer from "../hooks/useMovieTrailer";
import useYouTubePlayer from "../hooks/useYouTubePlayer";
import { useSelector } from "react-redux";
import { truncate } from "../utils/truncate.js";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const { original_title, overview, id } =
    useSelector((store) => store.movie?.selectedMovie) || {};

  const shortOverview = truncate(overview, 150);

  // First movie's trailer
  useMovieTrailer(id);
  const trailer = useSelector((store) => store.movie?.trailer);

  const { isMuted, toggleMute } = useYouTubePlayer(trailer?.key);

  // --- Overlay State ---
  const [overlayOpacity, setOverlayOpacity] = useState(1);
  const [shrink, setShrink] = useState(false);
  const fadeTimeout = useRef(null);

  const resetFadeTimer = () => {
    if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    fadeTimeout.current = setTimeout(() => setOverlayOpacity(0.3), 2000);
  };

  // initial fade on mount or when original_title changes
  useEffect(() => {
    resetFadeTimer();
    return () => clearTimeout(fadeTimeout.current);
  }, [original_title]);

  // call this on mouse move over overlay
  const handleMouseMove = () => {
    setOverlayOpacity(1);
    resetFadeTimer(); // safely reset the timer
  };
  // Shrink text on scroll
  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      setShrink(window.scrollY > 100);
      setOverlayOpacity(1);
      timeout = setTimeout(() => setOverlayOpacity(0.3), 4000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  if (!original_title || !trailer?.key) {
    return <div className="w-full aspect-video bg-black/50" />;
  }

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      {/* YT Player */}
      <div
        id="hero-player"
        className="w-full h-full scale-[1.15] origin-center"
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>

      {/* UI Overlay Text */}
      <div
        className="absolute top-1/4 left-10 max-w-xl space-y-6 z-20 transition-all duration-500"
        style={{ opacity: overlayOpacity }}
        onMouseMove={handleMouseMove}
      >
        <h1
          className={`font-extrabold transition-all duration-500 ${
            shrink ? "text-3xl" : "text-6xl"
          }`}
        >
          {original_title}
        </h1>
        <p
          className={`transition-all duration-500 ${
            shrink ? "text-sm" : "text-lg opacity-80"
          }`}
        >
          {shortOverview}
        </p>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white/70 text-black px-6 py-3 rounded-md font-bold text-lg hover:bg-white transition cursor-pointer">
            <span className="text-2xl">▶</span> Play
          </button>

          <button className="flex items-center gap-2 bg-gray-600/70 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-gray-500 transition cursor-pointer">
            <img src={iIcon} alt="know more icon" className="w-5 h-5" />
            More Info
          </button>

          <button
            onClick={toggleMute}
            className="bg-black/30 text-white px-4 py-2 rounded-md hover:bg-black transition cursor-pointer"
          >
            {isMuted ? "🔇 Unmute" : "🔊 Mute"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
