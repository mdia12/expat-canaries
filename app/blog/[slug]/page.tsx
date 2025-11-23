import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Article non trouvé' };
  
  return {
    title: `${post.title} - ExpatCanaries`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <article>
        {/* Hero / Header of the article */}
        <div className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Link>
            <div className="flex items-center space-x-4 text-sm text-blue-300 mb-6">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold flex items-center">
                <Tag className="w-3 h-3 mr-2" />
                {post.category}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold">{post.author}</div>
                <div className="text-slate-400 text-sm">Rédacteur ExpatCanaries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-4 max-w-4xl -mt-10 mb-12 relative z-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-3xl mb-20">
          <div 
            className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Posts (Simple implementation: just show others) */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-2xl font-bold mb-8">À lire aussi</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost, idx) => (
                <Link key={idx} href={`/blog/${relatedPost.slug}`} className="group">
                  <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <div className="text-xs font-bold text-blue-600 mb-2">{relatedPost.category}</div>
                      <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
