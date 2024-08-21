import Head from 'next/head';
import React from 'react';

const Test = () => {
  return (
    <div className="container mx-auto flex flex-col min-h-screen font-montserrat">
      <Head>
        <title>Playcine</title>
        <meta name="description" content="Watch your favorite movies and TV shows" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <header className="bg-black py-4 flex h-12 px-4">
        <div className=" w-14 h-10 bg-white">
          <img src="website logo.webp"  alt="logo" />
        </div>
        <nav className="flex font-serif justify-between items-center  gap-4">
          <a href="#" className="text-white hover:text-gray-400">Home</a>
          <a href="#" className="text-white hover:text-gray-400">Shop</a>
          <a href="#" className="text-white hover:text-gray-400">Series</a>
          <a href="#" className="text-white hover:text-gray-400">TV Shows</a>
          <a href="#" className="text-white hover:text-gray-400">Browse By Language</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#"><i className="fas fa-search text-white"></i></a>
          <a href="#"><i className="fas fa-bell text-white"></i></a>
          <img src="/user-avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full" />
        </div>
      </header>

      <main className="flex-grow px-4">
        <section className="relative w-full h-[600px] bg-cover bg-center flex">
          <img
            src="https://w0.peakpx.com/wallpaper/684/51/HD-wallpaper-black-thar.jpg"
            alt="Thar Accessories"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 items-start my-4 py-3">
            
            <div className="mt-6 flex gap-4 mx-3">
              <button className="bg-purple-700 hover:text-gray-300 text-white px-4 py-2 rounded">
                Play
              </button>
              <button className="border border-white text-white px-4 hover:text-red-400 py-2 rounded">
                More info
              </button>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold px-4">Trending Now</h2>
          <div className="grid grid-cols-2 gap-4 px-4 mt-4">
            <div className="text-center">
              <img src="/right-time.jpg" alt="Right Time" className="w-48 h-48 object-cover rounded-lg" />
              <p className="mt-2">Right Time</p>
            </div>
            <div className="text-center">
              <img src="/another-show.jpg" alt="Another Show" className="w-48 h-48 object-cover rounded-lg" />
              <p className="mt-2">Another Show</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Test;
