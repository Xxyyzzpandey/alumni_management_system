import React, { useRef, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Cardsliper = (organisedby,description,date) => {

  const sliderRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    sliderRef.current.classList.add("active");
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    sliderRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown = false;
    sliderRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };


  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/eventdata');
            setCards(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };
    fetchCards();
}, []);

  return (
    <div
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="overflow-x-scroll scrollbar-hide mb-4 relative px-2"
      style={{ overflowY: "hidden", cursor: "grab" }}
    >
      <div className="flex snap-x snap-mandatory gap-4" style={{ width: "max-content" }}>
        {cards.map((card) => (
          <div key={card._id} className="flex-none w-64 snap-center">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4 shadow-lg">
              <img src="https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg?auto=compress&cs=tinysrgb&w=600" alt={card.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-900">By: {card.organisedby}</h2>
                <p className="text-gray-600 mt-2 text-sm">{card.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2l font-extrabold text-gray-900">Date:{card.date}</span>
                  <button
                    href={card.Link}
                    className="text-white bg-fuchsia-950 hover:bg-fuchsia-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export  {Cardsliper};
