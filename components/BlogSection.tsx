import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const BlogSection = () => {
  // Take the first 3 posts for the preview
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Le Blog de l&apos;Expatriation</h2>
            <p className="text-slate-600">
              Analyses, décryptages et guides pratiques pour réussir votre installation aux Canaries.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="hidden md:inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors mt-4 md:mt-0"
          >
            Voir tous les articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-slate-400 text-xs mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm mb-4 flex-1">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Lire l&apos;article
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link 
            href="/blog" 
            className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Voir tous les articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
