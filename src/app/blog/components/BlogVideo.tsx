'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

interface BlogVideoProps {
  images: string[];
  title: string;
  excerpt: string;
}

const BlogVideo: React.FC<BlogVideoProps> = ({ images, title, excerpt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // 6 seconds per slide

    return () => clearInterval(timer);
  }, [images.length, isPlaying]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl bg-black mb-16 group">
      {/* Cinematic Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <AppImage
            src={images[currentIndex]}
            alt={`${title} - slide ${currentIndex + 1}`}
            fill
            className="object-cover"
            unoptimized
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={`content-${currentIndex}`}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] text-white uppercase tracking-[0.2em] font-bold mb-4">
            Video Summary
          </span>
          <h2 
            className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {title}
          </h2>
          <p 
            className="text-white/80 text-lg md:text-xl font-light line-clamp-2 md:line-clamp-none"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {excerpt}
          </p>
        </motion.div>
      </div>

      {/* Progress Bars */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex gap-1 px-1">
        {images.map((_, idx) => (
          <div key={idx} className="h-full flex-1 bg-white/20 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ 
                width: currentIndex === idx ? '100%' : (currentIndex > idx ? '100%' : '0%') 
              }}
              transition={{ 
                duration: currentIndex === idx ? 6 : 0.5, 
                ease: "linear" 
              }}
              className="h-full bg-white"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-6 right-6 p-3 bg-black/40 backdrop-blur-xl rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
        )}
      </button>

      {/* Sound Simulation Indicator (Visual Only) */}
      <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-xl rounded-full text-[10px] text-white/80 uppercase tracking-widest font-bold">
        <div className="flex gap-0.5 items-end h-3">
          <motion.div animate={{ height: [4, 12, 6, 10, 4] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1 bg-white" />
          <motion.div animate={{ height: [8, 4, 12, 6, 8] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 bg-white" />
          <motion.div animate={{ height: [6, 10, 4, 12, 6] }} transition={{ repeat: Infinity, duration: 1.3 }} className="w-1 bg-white" />
        </div>
        Cinematic Preview
      </div>
    </div>
  );
};

export default BlogVideo;
