// pages/index.tsx
"use client"
import React from 'react';
import Head from 'next/head';
import Example from '@/Components/Landing page/header';
import Banner1 from '@/Components/Landing page/banner';
import MainCategory from '@/Components/Landing page/category/Mainc';
import ProductList from '@/Components/Landing page/productlist/productlist';
import GoogleReviewsWidget from '@/Components/Landing page/googlereviews';
import YouTubeGallery from '@/Components/Landing page/youtube/yt';
import GoogleReviews from '@/Components/googlereviews';
import Carousel from '@/Components/Landing page/MainCarousel/carousel';
import homeCarouselData from '@/Components/data/homeCarouselData';
import ContactUs from '@/Components/Landing page/contactUsForm/contact';
import VideoReel from '@/Components/Landing page/videos';

const Home = () => {
  return (
    <div className="w-full">
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col bg-white items-center justify-center m-0 p-0 w-full">
 
      <Carousel carouselData={homeCarouselData}/>
        <MainCategory />
        <ProductList />
        <YouTubeGallery />
        <GoogleReviewsWidget />
        <VideoReel/>
      <ContactUs/>
      </main>
    </div>
  );
};

export default Home;
