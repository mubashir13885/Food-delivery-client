import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { showResto } from '../../services/RestoApi';

function Restaurant() {
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    showResto()
      .then((res) => {
        setRestaurant(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Scroll buttons handlers
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Auto scroll to right when restaurant list updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: 'smooth',
      });
    }
  }, [restaurant]);

  return (
    <div className="m-10">
      <p className="font-bold text-lg mb-4 flex">Popular Restaurants</p>

      <div className="relative card shadow-md rounded-lg bg-gray-200 p-2">
        {/* Left scroll button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"
          aria-label="Scroll Left"
        >
          ❮
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide px-8"
          style={{ scrollBehavior: 'smooth' }}
        >
          {restaurant.map((resto) => (
            <div
              key={resto._id}
              className="flex-none card bg-white h-80 cursor-pointer w-60"
              onClick={() => navigate(`/restodetails/${resto._id}`)}
            >
              <figure>
                <img
                  src={resto.image}
                  alt={resto.name}
                  className="h-48 w-full object-cover rounded-t-lg"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title">{resto.name}</h2>
                <p>{resto.location}</p>
                <p>Operating Hours: {resto.operating_hours}</p>
                <div className="text-left p-2">
                  <span className="badge badge-success text-white text-lg">
                    Rating: {resto.rating}★
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"
          aria-label="Scroll Right"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default Restaurant;
