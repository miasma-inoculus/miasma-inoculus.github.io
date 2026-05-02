/*
 * THE INKWELL — About Page
 * Design: The Curator's Study
 * Sections: Origin story, The Process, The Philosophy
 */

import { useEffect, useState } from 'react';
import { Book, PenTool, Ghost, ScrollText } from 'lucide-react';

const ABOUT_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663614260208/VLQTr2HHpa65hSd5QHn4op/curator_study-E2XwY7D9vM8ZpxR6.webp';

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen py-24 px-6" style={{ background: 'oklch(0.09 0.008 300)' }}>
      <div className={`max-w-3xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
        
        {/* Header */}
        <header className="text-center mb-16">
          <div className="ornament-divider mb-6">
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'oklch(0.72 0.12 75 / 70%)',
            }}>
              ✦ The Curator's Notes ✦
            </span>
          </div>
          <h1 className="mb-8" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: '3rem',
            color: 'oklch(0.84 0.008 70)',
          }}>
            Behind the Ink
          </h1>
        </header>

        {/* Feature Image */}
        <div className="gold-frame mb-16 overflow-hidden aspect-[16/9]">
          <img 
            src={ABOUT_IMG} 
            alt="The Curator's Study" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Story Content */}
        <div className="space-y-12" style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: '1.1rem',
          lineHeight: 1.8,
          color: 'oklch(0.72 0.008 70)',
        }}>
          <section>
            <h2 className="flex items-center gap-3 mb-6" style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1rem',
              color: 'oklch(0.72 0.12 75)',
              letterSpacing: '0.1em'
            }}>
              <ScrollText size={18} />
              The Mission
            </h2>
            <p>
              The Inkwell was founded on a simple, chilling premise: that the most profound terrors are those that arrive in silence, delivered directly to one's doorstep. In an age of fleeting digital noise, we return to the weight of the written word and the creeping dread of the Victorian era.
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-3 mb-6" style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1rem',
              color: 'oklch(0.72 0.12 75)',
              letterSpacing: '0.1em'
            }}>
              <PenTool size={18} />
              The Craft
            </h2>
            <p>
              Each dispatch is meticulously composed to evoke the atmosphere of gaslit streets, anatomical curiosities, and the thin veil between the living and the forgotten. We specialize in psychological horror, gothic suspense, and the "rehaul" of classic nightmares.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-y" style={{ borderColor: 'oklch(0.72 0.12 75 / 15%)' }}>
            <div className="flex flex-col items-center text-center p-6 bg-black/20">
              <Ghost className="mb-4 text-gold/40" size={32} />
              <h3 className="mb-2 uppercase text-xs tracking-widest font-cinzel text-gold/80">Daily Dread</h3>
              <p className="text-sm italic opacity-60">A new original tale delivered every 24 hours.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-black/20">
              <Book className="mb-4 text-gold/40" size={32} />
              <h3 className="mb-2 uppercase text-xs tracking-widest font-cinzel text-gold/80">Eternal Library</h3>
              <p className="text-sm italic opacity-60">Permanent access to our vault of over 100 dispatches.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
