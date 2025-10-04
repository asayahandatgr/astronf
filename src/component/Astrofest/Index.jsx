import React, { useState } from "react";

const astrofestCards = [
  "/assets/astrofest/astrofestival.png",
  "/assets/astrofest/card-astrocompetition.png",
  "/assets/astrofest/card-astrotalkshow.png",
];

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? astrofestCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === astrofestCards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-yellow-400 min-h-screen flex flex-col items-center justify-center pt-[70px] pb-8 relative overflow-hidden border-b-8 border-black">
      {/* Diagonal purple accent */}
      <div className="absolute left-0 top-0 w-full h-20 -skew-y-6 z-0"></div>
      {/* Judul pakai gambar besar */}

{/* Judul pakai gambar besar
<div className="absolute top-6 left-6 z-20">
  <img
    src="/assets/astrofest/stat-titles.png"
    alt="Star Titles"
    className="w-[260px] md:w-[360px] drop-shadow-lg"
  />
</div> */}

      {/* Konten utama */}
      <div className="flex items-center justify-center gap-8 pt-6 relative z-10">
        {/* Button kiri */}
        <button onClick={handlePrev} className="bg-white rounded-full p-3 shadow-md hover:bg-gray-200">
          {/* Left Arrow SVG */}
          <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
            <path d="M20 8L12 16L20 24" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* Card utama */}
        <div className="relative flex flex-col items-center">
          <img
            src={astrofestCards[activeIndex]}
            alt="Astrofest Card"
            className="w-[420px] md:w-[540px] drop-shadow-lg"
          />
        </div>
        {/* Button kanan */}
        <button onClick={handleNext} className="bg-white rounded-full p-3 shadow-md hover:bg-gray-200">
          {/* Right Arrow SVG */}
          <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
            <path d="M12 8L20 16L12 24" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      {/* Pagination */}
      <div className="relative z-10 pt-4 text-center">
        <span className="font-extrabold text-white text-2xl" style={{ textShadow: "2px 2px 0 #000" }}>
          {activeIndex + 1} / {astrofestCards.length}
        </span>
      </div>
    </div>
  );
};

export default Index;