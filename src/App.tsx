import React from 'react';
import { Switch, Route, Link } from 'wouter';

// The Master Layout: This keeps the navigation and background consistent across all pages
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen relative">
    {/* This div uses the background lock we set in index.css */}
    <div className="miasma-backdrop" />
    
    <nav className="relative z-10 p-6 flex justify-between items-center border-b border-[#c9a84c]/10 bg-[#0d0b0e]/60 backdrop-blur-sm">
      <Link href="/">
        <h1 className="gold-text text-2xl cursor-pointer hover:text-white transition-colors">
          MIASMA INOCULUS
        </h1>
      </Link>
      <div className="space-x-8 gold-text text-sm tracking-widest">
        <Link href="/archive" className="hover:text-white transition-colors">ARCHIVE</Link>
        <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
        <Link href="/subscribe" className="hover:text-white transition-colors">REGISTRY</Link>
      </div>
    </nav>

    <main className="relative z-10 container mx-auto px-4 py-12">
      {children}
    </main>
  </div>
);

// Our Current Landing View
const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h2 className="gold-text text-5xl md:text-7xl mb-6 animate-pulse">TONIGHT'S DISPATCH</h2>
    <div className="glass-panel p-8 max-w-2xl rounded-lg">
      <p className="story-text italic text-xl text-[#c9a84c]/80 mb-4">
        "The fog thins for those who dare to look."
      </p>
      <p className="story-text text-lg">
        Welcome to the repository of the unobserved. Here, the chronicles of the unseen are preserved against the creeping miasma of the forgotten.
      </p>
      <div className="mt-8">
        <Link href="/archive">
          <button className="border border-[#c9a84c] px-6 py-2 gold-text hover:bg-[#c9a84c] hover:text-[#0d0b0e] transition-all">
            ENTER THE ARCHIVE
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        {/* Placeholder routes for the next steps */}
        <Route path="/archive">
          <div className="gold-text text-center text-3xl mt-20 transition-opacity">BUILDING THE ARCHIVE...</div>
        </Route>
        <Route path="/about">
          <div className="gold-text text-center text-3xl mt-20">CONSULTING THE LEDGER...</div>
        </Route>
        <Route path="/subscribe">
          <div className="gold-text text-center text-3xl mt-20">PREPARING THE REGISTRY...</div>
        </Route>
      </Switch>
    </Layout>
  );
}
