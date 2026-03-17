'use client';

import React from 'react';

const HeroSection = () => {
  return (
    <section className="text-center py-20 sm:py-24 md:py-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
          Optimalkan Pengadaan Anda dengan AI
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Deschain membantu Anda mengelompokkan kebutuhan, menemukan vendor terbaik, dan menyederhanakan proses pengadaan barang dan jasa secara cerdas.
        </p>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
        >
          Mulai Sekarang
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
