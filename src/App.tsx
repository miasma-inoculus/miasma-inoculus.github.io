import React from 'react';
import { Switch, Route, Link } from 'wouter';
import Archive from './pages/Archive';

// Master Layout
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen relative selection:bg-[#6b1f2a]/40">
    <div className="miasma-backdrop" />
    
    <nav className="relative z-10 p-6 flex flex-col md:flex-row justify-between items-center border-b border-[#c9a84c]/10 bg-[#0d0b0e]/60 backdrop-blur-md">
      <Link href="/">
        <h1 className="gold-text text-2xl cursor-pointer hover:text-white transition-all duration-500 mb-4 md:mb-0">
          MIASMA INOCULUS
        </h1>
      </Link>
      <div className="space-x-8 gold-text text-[10px] tracking-[0.3em]">
        <Link href="/archive" className="hover:text-white transition-colors">ARCHIVE</Link>
        <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
        <Link href="/subscribe" className="hover:text-white transition-colors">REGISTRY</Link>
      </div>
    </nav>

    <main className="relative z-10 container mx-auto px-4 py-16">
      {children}
    </main>
  </div>
);

// Home Page
const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
    <h2 className="gold-text text-4xl md:text-6xl mb-6 tracking-tighter opacity-90">TONIGHT'S DISPATCH</h2>
    <div className="glass-panel p-10 max-w-2xl rounded-sm border-t-2 border-t-[#c9a84c]/40">
      <p className="story-text italic text-xl text-[#c9a84c] mb-6">
        "The fog thins for those who dare to look."
      </p>
      <p className="story-text text-lg leading-relaxed opacity-80">
        You have entered the repository of the unobserved. Every entry preserved here is a shield against the creeping miasma of the forgotten.
      </p>
      <div className="mt-10">
        <Link href="/archive">
          <button className="border border-[#c9a84c]/40 px-10 py-3 gold-text text-xs hover:bg-[#c9a84c] hover:text-[#0d0b0e] transition-all duration-700 uppercase tracking-[0.4em]">
            Enter the Archive
          </button>
        </Link>
      </div>
    </div>
  </div>
);

// About Page Placeholder
const About = () => (
  <div className="max-w-3xl mx-auto glass-panel p-12 text-center">
    <h2 className="gold-text text-3xl mb-8">THE NATURE OF THE MIASMA</h2>
    <div className="story-text text-lg leading-loose space-y-6 opacity-90">
      <p>Miasma Inoculus is not merely a collection of tales. It is a digital inoculation.</p>
      <p>We curate the chronicles that history attempts to smudge out. From the shifting maps of the unmapped territories to the knocking beneath the Ashford floors, we ensure that the unseen remains visible.</p>
    </div>
  </div>
);

// Registry Placeholder
const Subscribe = () => (
  <div className="max-w-xl mx-auto glass-panel p-12 text-center">
    <h2 className="gold-text text-3xl mb-4">THE REGISTRY</h2>
    <p className="story-text italic mb-8 opacity-60">Join the ledger. Be observed.</p>
    <div className="flex flex-col space-y-4">
      <input 
        type="email" 
        placeholder="EMAIL ADDRESS" 
        className="bg-transparent border-b border-[#c9a84c]/30 p-2 gold-text text-center focus:outline-none focus:border-[#c9a84c] transition-colors"
      />
      <button className="mt-4 gold-text border border-[#c9a84c]/20 py-2 hover:bg-[#c9a84c]/10 transition-all">
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
