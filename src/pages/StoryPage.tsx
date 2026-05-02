/*
 * THE INKWELL — Story Page
 * Design: The Open Ledger
 * Features: Full-text reading, dynamic issue numbering, Victorian typography
 */

import { useRoute, Link } from 'wouter';
import { ChevronLeft, Clock, Calendar, BookOpen, Share2 } from 'lucide-react';
import { allStories } from '../lib/stories';
import { useEffect, useState } from 'react';

export default function StoryPage() {
  const [, params] = useRoute('/story/:id');
  const story = allStories.find(s => s.id === params?.id);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, [params?.id]);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-gold/50 font-serif italic">
        <p>This chapter of the ledger has been torn out...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6" style={{ background: 'oklch(0.09 0.008 300)' }}>
      <article className={`max-w-2xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
        
        {/* Navigation Back */}
        <Link href="/">
          <button className="flex items-center gap-2 mb-12 group transition-colors" style={{ 
            color: 'oklch(0.45 0.01 70)',
            fontFamily: "'Cinzel', serif",
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}>
            <ChevronLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            Return to Masthead
          </button>
        </Link>

        {/* Story Header */}
        <header className="mb-16 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <span className="flex items-center gap-1.5" style={{ color: 'oklch(0.45 0.01 70)', fontFamily: "'Cinzel', serif", fontSize: '0.55rem' }}>
              <Calendar size={11} />
              {story.date}
            </span>
            <span className="flex items-center gap-1.5" style={{ color: 'oklch(0.45 0.01 70)', fontFamily: "'Cinzel', serif", fontSize: '0.55rem' }}>
              <Clock size={11} />
              {story.readTime}
            </span>
          </div>

          <h1 className="mb-6" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: 'oklch(0.88 0.008 70)',
            lineHeight: 1.1,
          }}>
            {story.title}
          </h1>

          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-12" style={{ background: 'oklch(0.72 0.12 75 / 20%)' }} />
            <span className={`genre-tag ${story.genre}`}>{story.genre}</span>
            <div className="h-px w-12" style={{ background: 'oklch(0.72 0.12 75 / 20%)' }} />
          </div>
        </header>

        {/* Story Body */}
        <div className="drop-cap-large" style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: '1.15rem',
          lineHeight: 2,
          color: 'oklch(0.75 0.01 70)',
          whiteSpace: 'pre-wrap'
        }}>
          {story.body}
        </div>

        {/* Footer / Sign-off */}
        <footer className="mt-20 pt-12 border-t" style={{ borderColor: 'oklch(0.72 0.12 75 / 15%)' }}>
          <div className="flex flex-col items-center gap-8">
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: 'italic',
              fontSize: '1.2rem',
              color: 'oklch(0.72 0.12 75 / 60%)'
            }}>
              Finis.
            </p>
            
            <div className="flex gap-4">
              <button className="gold-frame px-6 py-3 flex items-center gap-2" style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                color: 'oklch(0.72 0.12 75)',
              }}>
                <Share2 size={12} />
                Share Dispatch
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
