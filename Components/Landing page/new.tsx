import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Hide the arrows
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings} className="h-full">
        <div className="relative h-full">
          <Image
            src="/path/to/your/image1.jpg" // replace with your image path
            alt="Banner Image 1"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 p-4">
            <h1 className="text-5xl font-bold">New Product</h1>
            <p className="mt-4 text-xl">Discover the amazing features of our new product.</p>
          </div>
        </div>
        <div className="relative h-full">
          <Image
            src="/path/to/your/image2.jpg" // replace with your image path
            alt="Banner Image 2"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 p-4">
            <h1 className="text-5xl font-bold">Another Feature</h1>
            <p className="mt-4 text-xl">Explore the next level of innovation.</p>
          </div>
        </div>
        <div className="relative h-full">
          <Image
            src="/path/to/your/image3.jpg" // replace with your image path
            alt="Banner Image 3"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 p-4">
            <h1 className="text-5xl font-bold">Final Highlight</h1>
            <p className="mt-4 text-xl">Experience the future today.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselBanner;
