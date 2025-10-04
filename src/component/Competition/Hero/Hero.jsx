import React from 'react';
import { useNavigate } from 'react-router';

const cards = [
  { id: 1, img: '/assets/competition/agt.png', label: 'ASTRO GOT TALENT', href: '/competition/agt' },
  { id: 2, img: '/assets/competition/ss.png', label: 'SPORT AND E SPORT', href: '/competition/sport-esport' },
  { id: 3, img: '/assets/competition/essai.png', label: 'ESSAI', href: '/competition/essai' },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div 
      style={{ backgroundColor: '#5ED143' }} 
      className="min-h-screen flex flex-col items-center justify-center pt-[70px]"
    >
      {/* Banner */}
      <div className="flex items-center justify-center mb-8">
        <img
          src="/assets/competition/headingcompetition.png"
          alt="Competition Heading"
          className="w-[320px] md:w-[480px] drop-shadow-lg"
        />
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center max-w-3xl mx-auto">
        {cards.map(card => (
          <img
            key={card.id}
            src={card.img}
            alt={card.label}
             onClick={() => navigate(card.href)}
            className="w-[160px] md:w-[200px] drop-shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
