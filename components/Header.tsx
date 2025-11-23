import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-slate-900">
          Expat<span className="text-blue-600">Canaries</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#destinations" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Destinations
          </Link>
          <Link href="/#process" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Démarches
          </Link>
          <Link href="/#blog" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Blog
          </Link>
          <Link href="/#faq" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            FAQ
          </Link>
          <Link 
            href="/#contact" 
            className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
