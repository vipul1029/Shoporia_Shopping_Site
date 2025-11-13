
import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-[#fff1eb] to-[#ace0f9] overflow-hidden py-10 sm:py-16">


      {/* Decorative Background Circles */}
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-pink-200 rounded-full opacity-30 z-0 animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-300 rounded-full opacity-30 z-0 animate-pulse"></div>

      {/* Hero Content */}
      <div className="relative w-full px-6 sm:px-12 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between">

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left py-4 md:py-0 space-y-4">
          <h2 className="text-pink-600 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Our Top Picks
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Unleash Your <span className="text-pink-500">Style</span><br /> With Confidence
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-md mx-auto md:mx-0">
            Dive into the season with our latest collection — where elegance meets everyday ease. Whether you're chasing sunsets or city lights, our styles are crafted to make you feel confident, bold, and effortlessly beautiful.

          </p>

          <button className="mt-2 px-6 py-2.5 bg-pink-600 text-white rounded-full text-sm uppercase tracking-wide shadow-md hover:bg-pink-700 hover:scale-105 transition-all duration-300" onClick={()=>navigate('/collection')}>
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={assets.hero_img1}
            alt="Hero"
            className="max-w-[85%] md:max-w-full h-72 sm:h-80 md:h-[30rem] object-contain rounded-lg"
          />


        </div>
      </div>
    </div>
  );
};

export default Hero;
