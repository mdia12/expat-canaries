import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog Expatriation Canaries - Conseils, Fiscalité et Vie Pratique',
  description: 'Tous nos articles pour réussir votre expatriation aux Canaries : fiscalité ZEC, immobilier, vie quotidienne et business.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Le Blog de l&apos;Expatriation</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            L&apos;actualité fiscale, juridique et pratique pour vivre et entreprendre aux Canaries.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center text-slate-400 text-xs mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 mb-6 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Lire l&apos;article complet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
