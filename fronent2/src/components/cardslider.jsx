import React from "react";

// Card Component
const Card = ({ title, description }) => {
  return (
    <div className="min-w-[300px] bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Parent Component Rendering Cards Horizontally
const HorizontalCards = () => {
  const cardsData = [
    { id: 1, title: "Card 1", description: "This is the first card." },
    { id: 2, title: "Card 2", description: "This is the second card." },
    { id: 3, title: "Card 3", description: "This is the third card." },
    { id: 4, title: "Card 4", description: "This is the fourth card." },
    { id: 5, title: "Card 5", description: "This is the fifth card." },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-4 px-4">
        {cardsData.map((card) => (
          <Card key={card.id} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
