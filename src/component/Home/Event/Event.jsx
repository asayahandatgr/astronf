import React, { useState } from "react";

const eventCards = [
  "/assets/event/impactfull.png",
  "/assets/event/collaborative.png",
  "/assets/event/empowerment.png",
];

const Event = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? eventCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === eventCards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-blue-400 border-b-8 border-black pb-8">
      {/* Judul */}
      <div
        className="py-2 text-center font-extrabold text-white text-xl"
        style={{ textShadow: "2px 2px 0 #000", letterSpacing: "1px" }}
      >
        ASTRO 7.0 Valuable Steps
      </div>
      {/* Konten utama */}
      <div className="flex flex-row items-start justify-center gap-16 px-4 pt-10 min-h-[420px]">
        {/* Chest rata atas */}
        <div className="flex flex-col justify-center items-center h-full self-start">
          <img
            src="/assets/event/chest1.png"
            alt="Chest and Cards"
            className="w-[340px] md:w-[400px] drop-shadow-lg object-contain"
            style={{ display: "block" }}
          />
        </div>
        {/* Event Card dan tombol */}
        <div className="flex flex-col justify-center items-center h-full mt-4">
          <img
            src={eventCards[activeIndex]}
            alt="Event Card"
            className="w-[340px] md:w-[400px] drop-shadow-lg object-contain"
            style={{ display: "block" }}
          />
          {/* Navigasi bawah pakai icon arrow */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <button
              onClick={handlePrev}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              {/* Left Arrow SVG */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M20 8L12 16L20 24"
                  stroke="#222"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span
              className="font-extrabold text-white text-lg"
              style={{ textShadow: "2px 2px 0 #000" }}
            >
              {activeIndex + 1} / {eventCards.length}
            </span>
            <button
              onClick={handleNext}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              {/* Right Arrow SVG */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M12 8L20 16L12 24"
                  stroke="#222"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;