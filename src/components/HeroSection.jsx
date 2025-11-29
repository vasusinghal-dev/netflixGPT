import iIcon from "../assets/I_Icon.png";
import useMovieTrailer from "../hooks/useMovieTrailer";
import useYouTubePlayer from "../hooks/useYouTubePlayer";
import { useSelector } from "react-redux";
import { truncate } from "../utils/truncate.js";

const HeroSection = ({ originalTitle, overview, id }) => {
  const shortOverview = truncate(overview, 150);

  // First movie's trailer
  useMovieTrailer(id);
  const trailer = useSelector((s) => s.movie?.trailer);

  const { isMuted, toggleMute } = useYouTubePlayer(trailer?.key);

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      {/* YT Player Mount Point */}
      <div
        id="hero-player"
        className="w-full h-full scale-[1.15] origin-center"
      ></div>

      {/* Overlay to stopo controls */}
      <div className="absolute inset-0"></div>

      {/* UI Overlay text */}
      <div className="absolute top-1/3 left-10 max-w-xl space-y-6 z-20">
        <h1 className="text-6xl font-extrabold">{originalTitle}</h1>
        <p className="text-lg opacity-80">{shortOverview}</p>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-bold text-lg hover:bg-gray-200 transition cursor-pointer">
            <span className="text-2xl">▶</span> Play
          </button>

          <button className="flex items-center gap-2 bg-gray-600/70 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-gray-500 transition cursor-pointer">
            <img src={iIcon} alt="know more icon" className="w-5 h-5" />
            More Info
          </button>

          <button
            onClick={toggleMute}
            className="bg-black/50 text-white px-4 py-2 rounded-md"
          >
            {isMuted ? "🔇 Unmute" : "🔊 Mute"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
