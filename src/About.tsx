/*
 * THE INKWELL — About Page
 * Design: Gaslight & Shadow — editorial, journal-like, atmospheric
 */

import { useEffect, useState } from 'react';

const ORNAMENT = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663614260208/VLQTr2HHpa65hSd5QHn4op/masthead_ornament-SWtKcceA7MVfXV4kpZboRD.webp';
const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663614260208/VLQTr2HHpa65hSd5QHn4op/hero_bg-bcasSkbTNzqnzhRTR33VLS.webp';

export default function About() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.09 0.008 300)' }}>

      {/* Hero banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.3) saturate(0.5)', objectPosition: 'center 40%' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, oklch(0.09 0.008 300))' }} />
        <div className="absolute inset-0 flex items-end justify-center pb-12">
          <div className="text-center">
            <p className="cinzel-label mb-2" style={{ fontSize: '0.6rem' }}>About</p>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'oklch(0.84 0.008 70)',
              letterSpacing: '-0.02em',
            }}>
              The Inkwell
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`max-w-2xl mx-auto px-6 py-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

        {/* Ornament */}
        <div className="flex justify-center mb-12">
          <img src={ORNAMENT} alt="" className="w-full max-w-lg opacity-50" style={{ filter: 'sepia(20%)' }} />
        </div>

        {/* Editorial intro */}
        <div className="gold-frame p-10 mb-12" style={{ background: 'oklch(0.11 0.009 300)' }}>
          <p className="drop-cap" style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: '1.1rem',
            lineHeight: 2,
            color: 'oklch(0.72 0.008 70)',
          }}>
            The Inkwell was founded in the belief that the finest horror requires no more than a single page — that dread, properly cultivated, needs only a few hundred words to take root and flourish in the mind of the reader long after the candle has been extinguished.
          </p>
        </div>

        {/* Mission sections */}
        {[
          {
            title: 'The Daily Dispatch',
            body: `Each midnight, without exception, a new story is published to these pages. The stories are short — never more than three hundred and fifty words — but they are written with the full weight of the Victorian Gothic tradition behind them. We believe in atmosphere over gore, in implication over exposition, in the horror that lives in what is not said.`,
          },
          {
            title: 'The Tradition',
            body: `The Victorian Gothic is not merely an aesthetic. It is a philosophy of unease — the conviction that the world is stranger and more terrible than it appears, that the rational mind is a thin membrane stretched over an abyss, and that the abyss is always listening. We work in the tradition of Poe, Le Fanu, and M.R. James, while finding new corridors in the old house.`,
          },
          {
            title: 'The Genres',
            body: `Our stories fall into three categories: Horror, in which something terrible is encountered and cannot be explained away; Thriller, in which a human intelligence pursues or is pursued through the dark; and Suspense, in which the reader knows, or suspects, something that the protagonist does not. The distinctions are sometimes fine. The darkness is always the same.`,
          },
          {
            title: 'Submissions',
            body: `The Inkwell accepts submissions from writers working in the micro fiction form. Stories must be between two hundred and three hundred and fifty words. They must be original, unpublished, and set in or evoking the Victorian Gothic tradition. We read everything we receive, though we cannot respond to all submissions. If your work is selected, you will hear from us before midnight.`,
          },
        ].map(({ title, body }, i) => (
          <div key={i} className="mb-10">
            <div className="ornament-divider mb-6">
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: '1.4rem',
                color: 'oklch(0.84 0.008 70)',
                whiteSpace: 'nowrap',
              }}>
                {title}
              </h2>
            </div>
            <p style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: '1.05rem',
              lineHeight: 1.95,
              color: 'oklch(0.65 0.008 70)',
            }}>
              {body}
            </p>
          </div>
        ))}

        {/* Closing quote */}
        <div className="mt-16 text-center">
          <div className="ornament-divider mb-8">
            <span style={{ color: 'oklch(0.72 0.12 75 / 50%)', fontSize: '1.2rem' }}>✦</span>
          </div>
          <blockquote style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '1.3rem',
            lineHeight: 1.7,
            color: 'oklch(0.72 0.12 75 / 80%)',
          }}>
            "The oldest and strongest emotion of mankind is fear,<br />
            and the oldest and strongest kind of fear is fear of the unknown."
          </blockquote>
          <p className="mt-4 cinzel-label" style={{ fontSize: '0.6rem' }}>
            — H.P. Lovecraft
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 px-6 border-t text-center" style={{
        borderColor: 'oklch(0.72 0.12 75 / 10%)',
        background: 'oklch(0.07 0.007 300)',
      }}>
        <p style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '0.55rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'oklch(0.35 0.008 70)',
        }}>
          The Inkwell · Est. 1887 · A Daily Dispatch of Darkness · Vol. I
        </p>
      </footer>
    </div>
  );
}

