"use client"

import { useState, useEffect } from 'react';

const Carousel = ({ carouselData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval); 
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="carousel-container">
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselData.map((item, i) => (
            <a key={i} className="carousel-item" href={item.path}>
              <img src={item.image} alt={`carousel image ${i}`} />
            </a>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {carouselData.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full mx-1 ${
              i === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => goToSlide(i)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
