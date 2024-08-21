  
"use client"
import { useState, useEffect } from 'react';

const carouselData = [
  { image: 'https://tse1.mm.bing.net/th?id=OIP.20hj68y8KnfWjfPQVltPJAHaE1&pid=Api&P=0&h=180.jpg' },
  { image: 'https://tse1.mm.bing.net/th?id=OIP.20hj68y8KnfWjfPQVltPJAHaE1&pid=Api&P=0&h=180.jpg' },
  { image: 'https://tse1.mm.bing.net/th?id=OIP.20hj68y8KnfWjfPQVltPJAHaE1&pid=Api&P=0&h=180.jpg' },
  { image: 'https://tse1.mm.bing.net/th?id=OIP.20hj68y8KnfWjfPQVltPJAHaE1&pid=Api&P=0&h=180.jpg' }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % carouselData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselData.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-[400px]"
          >
            <img
              src={item.image}
              alt={`carousel image ${index}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
