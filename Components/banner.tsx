"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BannerCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      stopOnHover={true}
    >
      <div>
        <img src="https://img.freepik.com/free-psd/car-rental-automotive-facebook-cover-template_120329-4447.jpg?w=1380&t=st=1718868524~exp=1718869124~hmac=d472bc618e43cd8a8eb8f4e0f0c1f72b06e126481ec3b63e2a9f270e09c81c43" alt="Banner 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://img.freepik.com/free-vector/gradient-car-dealership-facebook-cover_23-2150002945.jpg?w=1380&t=st=1718868546~exp=1718869146~hmac=6a0639f5f3f996585fe7318846f5e17a7577afd9150c05ee906fa4e12d8efea3" alt="Banner 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp2506351.jpg" alt="Banner 3" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
