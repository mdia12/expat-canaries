import Hero from '@/components/Hero';
import TargetAudience from '@/components/TargetAudience';
import Destinations from '@/components/Destinations';
import Process from '@/components/Process';
import Tips from '@/components/Tips';
import BlogSection from '@/components/BlogSection';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <Hero />
      <TargetAudience />
      <Destinations />
      <Process />
      <Tips />
      <BlogSection />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
