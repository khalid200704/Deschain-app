import Link from 'next/link';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ValueGrid from './components/ValueGrid';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <HeroSection />
        <ValueGrid />
        <section className="mt-16">
          <Link href="/dashboard">
            <button className="px-8 py-4 bg-cyan-500 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:neon-glow">
              Mulai Demo
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
