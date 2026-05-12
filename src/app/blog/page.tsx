import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog';
import BlogCard from './components/BlogCard';

export const metadata = {
  title: 'Latest Updates | Sona T. Sesay',
  description: 'Stay updated with the latest news, press releases, and recognitions of Sona T. Sesay in the Liberian education sector.',
};

export default function BlogListingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FBFBFB] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
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

          {/* Featured & Grid */}
          <div className="flex flex-col gap-12">
            {blogPosts.length > 0 && (
              <div className="mb-4">
                <BlogCard post={blogPosts[0]} index={0} featured={true} />
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index + 1} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
