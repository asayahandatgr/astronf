import React from 'react';

const cards = [
  {
    id: 1,
    img: '/assets/competition/futsal.png',
    label: 'FUTSAL INTERNAL',
    badge: '11',
    type: 'INTERNAL',
  },
  {
    id: 2,
    img: '/assets/competition/futsalex.png',
    label: 'FUTSAL EXTERNAL',
    badge: '8',
    type: 'EXTERNAL',
  },
  {
    id: 3,
    img: '/assets/competition/ml.png',
    label: 'MOBILE LEGENDS',
    badge: '8',
    type: 'INTERNAL',
  },
  {
    id: 4,
    img: '/assets/competition/batminton.png',
    label: 'BADMINTON',
    badge: '8',
    type: 'INTERNAL',
  },
  {
    id: 5,
    img: '/assets/competition/voli.png',
    label: 'VOLLY',
    badge: '8',
    type: 'INTERNAL',
  },
];

const Sport = () => {
  return (
    <div className="bg-blue-400 min-h-screen flex flex-col items-center justify-center pt-[100px]">
      {/* Banner */}
      <div className="flex items-center justify-center mb-8">
        <img
          src="/assets/competition/heading.png"
          alt="Sport and E Sport"
          className="w-[420px] md:w-[540px] drop-shadow-lg"
        />
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center max-w-3xl mx-auto">
        {cards.map(card => (
          <img
            key={card.id}
            src={card.img}
            alt={card.label}
            className="w-[180px] md:w-[200px] drop-shadow-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Sport;
