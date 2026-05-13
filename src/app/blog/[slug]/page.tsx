import React from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import { blogPosts } from '@/data/blog';
import Link from 'next/link';
import BlogVideo from '../components/BlogVideo';


export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Helper to calculate reading time
  const wordsPerMinute = 200;
  const words = post.content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FBFBFB] pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Top Navigation */}
          <nav className="mb-10">
            <Link 
              href="/blog" 
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-var(--accent) transition-colors duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transform group-hover:-translate-x-1 transition-transform">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Updates
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-var(--accent)/10 rounded-full text-[10px] font-bold text-var(--accent) uppercase tracking-wider">
                {post.category}
              </span>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <span
                className="text-[11px] uppercase tracking-widest font-bold text-gray-500"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {post.date}
              </span>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="text-[11px] uppercase tracking-widest font-bold text-gray-400">
                {readingTime} min read
              </span>
            </div>
            <h1
              className="mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 500,
                color: '#262626',
                lineHeight: 1.1,
              }}
            >
              {post.title}
            </h1>
          </header>

          {/* Cinematic Video Summary */}
          <BlogVideo 
            images={post.gallery && post.gallery.length > 0 ? [post.image, ...post.gallery] : [post.image]}
            title={post.title}
            excerpt={post.excerpt}
          />


          {/* Content */}
          <div
            className="prose prose-lg max-w-none mb-12"
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: '#4B5563',
              lineHeight: 1.8,
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Gallery */}
          {post.gallery && post.gallery.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
                <h2
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 500,
                    color: '#262626',
                  }}
                >
                  Gallery
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {post.gallery.map((img, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <AppImage
                      src={img}
                      alt={`${post.title} gallery image ${idx + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Back to Blog */}
          <div className="pt-6 border-t border-gray-200">
            <Link
              href="/blog"
              className="btn-pill-ministerial inline-flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to All Updates
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
