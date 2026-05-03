/*
 * THE INKWELL — Home Page
 * Design: Gaslight & Shadow
 * Sections: Hero with fog, Today's Story (featured), Archive preview, Subscribe CTA
 */

import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Clock, BookOpen, ChevronRight, Flame } from 'lucide-react';
import { featuredStory, archiveStories } from '@/lib/stories';
import StoryCard from '@/components/StoryCard';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663614260208/VLQTr2HHpa65hSd5QHn4op/hero_bg-bcasSkbTNzqnzhRTR33VLS.webp';
const ORNAMENT = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663614260208/VLQTr2HHpa65hSd5QHn4op/masthead_ornament-SWtKcceA7MVfXV4kpZboRD.webp';

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.09 0.008 300)' }}>

      {/* ═══════════════════════════════════════════════
          HERO SECTION — Fog-shrouded London
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt="Victorian Gothic London"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          {/* Multi-layer dark overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, oklch(0 0 0 / 30%) 0%, oklch(0 0 0 / 50%) 40%, oklch(0.09 0.008 300 / 95%) 85%, oklch(0.09 0.008 300) 100%)'
          }} />
          {/* Fog layers */}
          <div className="fog-layer absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 30% 60%, oklch(0.55 0.005 280 / 15%) 0%, transparent 60%)',
          }} />
          <div className="fog-layer-2 absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 70% 40%, oklch(0.55 0.005 280 / 10%) 0%, transparent 50%)',
          }} />
          {/* Vignette */}
          <div className="vignette absolute inset-0" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 pb-20 pt-32 lg:pt-16 text-center">
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Issue label */}
            <p className="cinzel-label mb-6 stagger-1 reveal-up" style={{ opacity: visible ? 1 : 0 }}>
              Vol. I · Issue No. {featuredStory.issue} · {featuredStory.date}
            </p>

            {/* Main title */}
            <h1 className="mb-6" style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1.1,
              color: 'oklch(0.88 0.008 70)',
              textShadow: '0 2px 40px oklch(0 0 0 / 80%)',
              letterSpacing: '-0.02em',
            }}>
              {featuredStory.title}
            </h1>

            {/* Genre + meta */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`genre-tag ${featuredStory.genre}`}>{featuredStory.genre}</span>
              <span style={{ color: 'oklch(0.45 0.01 70)' }}>·</span>
              <span className="flex items-center gap-1.5" style={{ color: 'oklch(0.55 0.01 70)' }}>
                <Clock size={11} />
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.1em' }}>
                  {featuredStory.readTime} read
                </span>
              </span>
              <span style={{ color: 'oklch(0.45 0.01 70)' }}>·</span>
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.1em', color: 'oklch(0.55 0.01 70)' }}>
                {featuredStory.wordCount} words
              </span>
            </div>

            {/* Excerpt */}
            <p className="mb-10 max-w-xl mx-auto" style={{
              fontFamily: "'Lora', Georgia, serif",
              fontStyle: 'italic',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'oklch(0.72 0.008 70)',
            }}>
              "{featuredStory.excerpt}"
            </p>

            {/* CTA */}
            <Link href={`/story/${featuredStory.id}`}>
              <button className="pulse-gold group inline-flex items-center gap-3 px-8 py-4 transition-all duration-300"
                style={{
                  background: 'transparent',
                  border: '1px solid oklch(0.72 0.12 75 / 60%)',
                  color: 'oklch(0.72 0.12 75)',
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'oklch(0.72 0.12 75 / 12%)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.72 0.12 75)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.72 0.12 75 / 60%)';
                }}
              >
                <Flame size={14} />
                Read Tonight's Story
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, oklch(0.72 0.12 75 / 60%), transparent)',
            animation: 'pulse-gold 2s ease-in-out infinite',
          }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ORNAMENT DIVIDER
      ═══════════════════════════════════════════════ */}
      <div className="py-8 flex justify-center" style={{ background: 'oklch(0.09 0.008 300)' }}>
        <img
          src={ORNAMENT}
          alt="Ornamental divider"
          className="w-full max-w-2xl opacity-60"
          style={{ filter: 'sepia(30%) brightness(0.9)' }}
        />
      </div>

      {/* ═══════════════════════════════════════════════
          TODAY'S STORY PREVIEW — Full text teaser
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.09 0.008 300)' }}>
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="ornament-divider mb-12">
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'oklch(0.72 0.12 75 / 70%)',
              whiteSpace: 'nowrap',
            }}>
              ✦ Tonight's Dispatch ✦
            </span>
          </div>

          {/* Story preview card */}
          <div className="gold-frame p-10" style={{ background: 'oklch(0.11 0.009 300)' }}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className={`genre-tag ${featuredStory.genre} mb-3 inline-block`}>{featuredStory.genre}</span>
                <h2 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: '2rem',
                  color: 'oklch(0.84 0.008 70)',
                  lineHeight: 1.2,
                }}>
                  {featuredStory.title}
                </h2>
              </div>
              <div className="text-right ml-6 flex-shrink-0">
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.55rem', letterSpacing: '0.15em', color: 'oklch(0.45 0.01 70)', textTransform: 'uppercase' }}>
                  Issue
                </p>
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: '2.5rem', color: 'oklch(0.72 0.12 75 / 40%)', lineHeight: 1 }}>
                  {String(featuredStory.issue).padStart(2, '0')}
                </p>
              </div>
            </div>

            {/* Opening lines */}
            <div className="drop-cap mb-6" style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: '1.05rem',
              lineHeight: 1.9,
              color: 'oklch(0.72 0.008 70)',
            }}>
              {featuredStory.body.split('\n\n').slice(0, 2).map((para, i) => (
                <p key={i} className={i > 0 ? 'mt-4' : ''}>{para}</p>
              ))}
            </div>

            {/* Fade out and CTA */}
            <div className="relative">
              <div className="absolute inset-x-0 -top-12 h-12" style={{
                background: 'linear-gradient(to bottom, transparent, oklch(0.11 0.009 300))'
              }} />
              <div className="pt-4 flex items-center justify-between border-t" style={{ borderColor: 'oklch(0.72 0.12 75 / 15%)' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '0.9rem', color: 'oklch(0.55 0.01 70)' }}>
                  Continue reading...
                </span>
                <Link href={`/story/${featuredStory.id}`}>
                  <button className="group flex items-center gap-2 transition-all duration-300"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '0.65rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'oklch(0.72 0.12 75)',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                    }}>
                    <BookOpen size={13} />
                    Read in Full
                    <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ARCHIVE PREVIEW — Recent stories grid
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.08 0.007 300)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="ornament-divider mb-4">
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'oklch(0.72 0.12 75 / 70%)',
              whiteSpace: 'nowrap',
            }}>
              ✦ From the Archive ✦
            </span>
          </div>
          <p className="text-center mb-12" style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '1rem',
            color: 'oklch(0.45 0.01 70)',
          }}>
            Previous dispatches from the shadows
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archiveStories.slice(0, 3).map((story, i) => (
              <StoryCard key={story.id} story={story} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/archive">
              <button className="group inline-flex items-center gap-3 px-8 py-3 transition-all duration-300"
                style={{
                  background: 'transparent',
                  border: '1px solid oklch(0.72 0.12 75 / 25%)',
                  color: 'oklch(0.65 0.01 70)',
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.72 0.12 75 / 60%)';
                  (e.currentTarget as HTMLElement).style.color = 'oklch(0.72 0.12 75)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.72 0.12 75 / 25%)';
                  (e.currentTarget as HTMLElement).style.color = 'oklch(0.65 0.01 70)';
                }}
              >
                Enter the Archive
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SUBSCRIBE CTA
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: 'oklch(0.09 0.008 300)' }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, oklch(0.32 0.1 15 / 8%) 0%, transparent 70%)'
        }} />
        <div className="relative max-w-xl mx-auto text-center">
          <div className="ornament-divider mb-10">
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'oklch(0.72 0.12 75 / 70%)',
              whiteSpace: 'nowrap',
            }}>
              ✦ The Midnight Dispatch ✦
            </span>
          </div>

          <h2 className="mb-4" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: '2.2rem',
            color: 'oklch(0.84 0.008 70)',
            lineHeight: 1.2,
          }}>
            Receive Each Story<br />
            <span style={{ fontStyle: 'italic', color: 'oklch(0.72 0.12 75)' }}>at the Stroke of Midnight</span>
          </h2>

          <p className="mb-10" style={{
            fontFamily: "'Lora', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'oklch(0.55 0.01 70)',
          }}>
            One story. Every night. Delivered to your door before the candle gutters.
            No correspondence. No delay. Only darkness.
          </p>

          <Link href="/subscribe">
            <button className="pulse-gold group inline-flex items-center gap-3 px-10 py-4 transition-all duration-300"
              style={{
                background: 'oklch(0.72 0.12 75 / 10%)',
                border: '1px solid oklch(0.72 0.12 75 / 60%)',
                color: 'oklch(0.72 0.12 75)',
                fontFamily: "'Cinzel', serif",
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'oklch(0.72 0.12 75 / 20%)';
                (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.72 0.12 75)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'oklch(0.72 0.12 75 / 10%)';
                (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.72 0.12 75 / 60%)';
              }}
            >
              Subscribe to the Inkwell
            </button>
          </Link>
        </div>
      </section>

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
