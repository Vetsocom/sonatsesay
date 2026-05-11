import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import { blogPosts } from '@/data/blog';
import Link from 'next/link';

export const metadata = {
  title: 'Latest Updates | Sona T. Sesay',
  description: 'Stay updated with the latest news, press releases, and recognitions of Sona T. Sesay in the Liberian education sector.',
};

export default function BlogListingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FFFFFF] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
              <span
                className="text-[11px] uppercase tracking-widest font-bold"
                style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
              >
                Press & Recognition
              </span>
              <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
            </div>
            <h1
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 500,
                color: '#262626',
                lineHeight: 1.1,
              }}
            >
              Latest Updates
            </h1>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={index} className="group">
                <article className="press-block h-full flex flex-col">
                    <div
                      className="overflow-hidden rounded-lg mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500 relative"
                      style={{ height: '240px', background: '#F1F1F0' }}
                    >
                      <AppImage
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ filter: 'grayscale(10%)' }}
                        unoptimized
                      />
                      {/* Video Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-[9px] text-white/90 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        Video Summary
                      </div>
                    </div>

                  <div className="flex-1 flex flex-col">
                    <div className="press-block-date mb-3">{post.date}</div>
                    <h2
                      className="press-block-heading mb-4 group-hover:text-var(--accent) transition-colors duration-300"
                    >
                      {post.title}
                    </h2>
                    <p className="press-block-content line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto press-block-link flex items-center gap-2 font-semibold">
                      Read More
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
