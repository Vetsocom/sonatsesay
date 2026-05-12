'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';
import { BlogPost } from '@/data/blog';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  featured?: boolean;
}

export default function BlogCard({ post, index, featured = false }: BlogCardProps) {
  // Helper to calculate reading time
  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const readingTime = calculateReadingTime(post.content);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={featured ? "lg:col-span-3" : ""}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article className={`press-block h-full flex ${featured ? 'flex-col lg:flex-row' : 'flex-col'} bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(26,26,62,0.15)] hover:-translate-y-1 border border-gray-100`}>
          {/* Image Container */}
          <div
            className={`overflow-hidden relative ${featured ? 'w-full lg:w-3/5 shrink-0' : 'w-full'}`}
            style={{ height: featured ? 'auto' : '240px', minHeight: '240px', background: '#F1F1F0' }}
          >
            <AppImage
              src={post.image}
              alt={post.title}
              width={featured ? 1200 : 600}
              height={featured ? 800 : 400}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              style={{ filter: 'grayscale(5%)' }}
              unoptimized
            />
            
            {/* Category Overlay */}
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold text-var(--primary) uppercase tracking-widest shadow-lg">
                <Tag size={10} className="text-var(--accent)" />
                {post.category}
              </span>
            </div>

            {/* Video Badge Overlay */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full text-[9px] text-white/90 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Video Summary
            </div>
            
            {/* Featured Badge */}
            {featured && (
              <div className="absolute top-6 right-6 px-3 py-1 bg-var(--accent) text-white text-[9px] font-black uppercase tracking-[0.2em] rounded shadow-lg">
                Latest Highlight
              </div>
            )}
          </div>

          {/* Content Container */}
          <div className={`flex-1 ${featured ? 'p-8 lg:p-12' : 'p-6'} flex flex-col justify-center`}>
            <div className="flex items-center justify-between mb-4">
              <span className="press-block-date !mt-0 !mb-0 font-bold">{post.date}</span>
              <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                <Clock size={12} className="text-var(--accent)" />
                {readingTime} min read
              </div>
            </div>

            <h2
              className={`${featured ? 'text-2xl lg:text-4xl' : 'text-xl'} font-bold mb-4 group-hover:text-var(--accent) transition-colors duration-300 leading-tight`}
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#262626' }}
            >
              {post.title}
            </h2>
            
            <p className={`${featured ? 'text-base lg:text-lg mb-8' : 'text-sm mb-6'} text-gray-500 line-clamp-3 leading-relaxed font-light`} style={{ fontFamily: 'Poppins, sans-serif' }}>
              {post.excerpt}
            </p>

            <div className="mt-auto flex items-center justify-between">
              <div className={`flex items-center gap-3 ${featured ? 'text-[13px]' : 'text-[11px]'} font-bold uppercase tracking-widest text-var(--primary) group-hover:text-var(--accent) transition-colors duration-300`}>
                {featured ? 'Explore Deep Dive' : 'Read Article'}
                <ArrowRight size={featured ? 18 : 14} className="transform group-hover:translate-x-1.5 transition-transform" />
              </div>
              
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-100 group-hover:bg-var(--accent)/30 transition-colors duration-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-100 group-hover:bg-var(--accent)/60 transition-colors duration-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-100 group-hover:bg-var(--accent) transition-colors duration-300" />
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
