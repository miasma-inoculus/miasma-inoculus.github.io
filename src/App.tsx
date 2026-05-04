import React from 'react';
import { Switch, Route, Link } from 'wouter';
import Archive from './pages/Archive';

// Master Layout - This creates the "Manus" frame
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen relative font-serif">
    {/* This div handles the background and dark overlay */}
    <div className="miasma-backdrop" />
    
    <nav className="relative z-10 border-b border-[#c9a84c]/10 bg-[#0d0b0e]/40 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center">
        <Link href="/">
          <h1 className="gold-text text-xl cursor-pointer hover:text-white transition-all duration-700 mb-6 md:mb-0">
            MIASMA INOCULUS
          </h1>
        </Link>
        <div className="flex gap-12 gold-text text-[10px] tracking-[0.4em]">
          <Link href="/archive" className="hover:text-white transition-colors">ARCHIVE</Link>
          <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
          <Link href="/subscribe" className="hover:text-white transition-colors">REGISTRY</Link>
        </div>
      </div>
    </nav>

    <main className="relative z-10 max-w-5xl mx-auto px-8 py-24">
      {children}
    </main>
  </div>
);

// Home Page
const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
    <h2 className="gold-text text-4xl md:text-5xl mb-10 tracking-[0.15em] opacity-90 font-light">TONIGHT'S DISPATCH</h2>
    <div className="glass-panel p-12 md:p-20 max-w-2xl rounded-sm border-t border-[#c9a84c]/30">
      <p className="story-text italic text-xl text-[#c9a84c] mb-10 leading-relaxed">
        "The fog thins for those who dare to look."
      </p>
      <p className="story-text text-lg leading-relaxed opacity-70 text-[#d4cfc8]">
        You have entered the repository of the unobserved. Every entry preserved here is a shield against the creeping miasma of the forgotten.
      </p>
      <div className="mt-16">
        <Link href="/archive">
          <button className="border border-[#c9a84c]/30 px-14 py-4 gold-text text-[10px] hover:bg-[#c9a84c]/10 hover:border-[#c9a84c] transition-all duration-1000 uppercase tracking-[0.5em] bg-transparent">
            Enter the Archive
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="max-w-3xl mx-auto glass-panel p-12 md:p-20 text-center">
    <h2 className="gold-text text-2xl mb-12 tracking-[0.3em]">THE NATURE OF THE MIASMA</h2>
    <div className="story-text text-lg leading-loose space-y-10 opacity-80 text-[#d4cfc8]">
      <p>Miasma Inoculus is not merely a collection of tales. It is a digital inoculation.</p>
      <p>We curate the chronicles that history attempts to smudge out. From the shifting maps of the unmapped territories to the knocking beneath the Ashford floors, we ensure that the unseen remains visible.</p>
    </div>
  </div>
);

const Subscribe = () => (
  <div className="max-w-xl mx-auto glass-panel p-12 md:p-20 text-center">
    <h2 className="gold-text text-2xl mb-8 tracking-[0.3em]">THE REGISTRY</h2>
    <p className="story-text italic mb-12 opacity-50">Join the ledger. Be observed.</p>
    <div className="flex flex-col space-y-8">
      <input 
        type="email" 
        placeholder="EMAIL ADDRESS" 
        className="bg-transparent border-b border-[#c9a84c]/20 p-4 gold-text text-center focus:outline-none focus:border-[#c9a84c] transition-colors placeholder:text-[#c9a84c]/20 text-sm tracking-widest"
      />
      <button className="mt-8 gold-text border border-[#c9a84c]/10 py-4 hover:bg-[#c9a84c]/5 transition-all uppercase tracking-[0.4em] text-[10px]">
        SEAL THE ENTRY
      </button>
    </div>
  </div>
);

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/archive" component={Archive} />
        <Route path="/about" component={About} />
        <Route path="/subscribe" component={Subscribe} />
      </Switch>
    </Layout>
  );
}
