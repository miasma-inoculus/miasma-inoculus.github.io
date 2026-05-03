/*
 * THE INKWELL — Story Detail Page
 * Design: Gaslight & Shadow — immersive reading experience
 * Drop cap, narrow column, gold ornaments, related stories
 */

import { useEffect, useState } from 'react';
import { Link, useParams } from 'wouter';
import { ChevronLeft, Clock, BookOpen } from 'lucide-react';
import { getStoryById, stories } from '@/lib/stories';
import StoryCard from '@/components/StoryCard';

const ORNAMENT = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663614260208/VLQTr2HHpa65hSd5QHn4op/masthead_ornament-SWtKcceA7MVfXV4kpZboRD.webp';

export default function StoryPage() {
  const params = useParams<{ id: string }>();
  const story = getStoryById(params.id);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, [params.id]);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'oklch(0.09 0.008 300)' }}>
        <div className="text-center">
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.2em', color: 'oklch(0.72 0.12 75 / 60%)', textTransform: 'uppercase' }}>
            Story not found
          </p>
          <Link href="/">
            <button className="mt-6" style={{ color: 'oklch(0.72 0.12 75)', fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', background: 'none', border: 'none' }}>
              ← Return to the Inkwell
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = story.body.split('\n\n').filter(p => p.trim());
  const relatedStories = stories.filter(s => s.id !== story.id).slice(0, 3);

  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.09 0.008 300)' }}>

      {/* Hero image banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={story.imageUrl}
          alt={story.title}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.5) saturate(0.7)', objectPosition: 'center 20%' }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, oklch(0 0 0 / 40%) 0%, oklch(0.09 0.008 300) 100%)'
        }} />

        {/* Back button */}
        <div className="absolute top-6 left-6">
          <Link href="/">
            <button className="flex items-center gap-2 transition-all duration-300"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'oklch(0.72 0.12 75 / 70%)',
                background: 'oklch(0 0 0 / 40%)',
                border: '1px solid oklch(0.72 0.12 75 / 20%)',
                padding: '0.5rem 1rem',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'oklch(0.72 0.12 75)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'oklch(0.72 0.12 75 / 70%)'}
            >
              <ChevronLeft size={12} />
              The Inkwell
            </button>
          </Link>
        </div>
      </div>

      {/* Story content */}
      <article className={`max-w-2xl mx-auto px-6 pb-24 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

        {/* Story header */}
        <header className="mb-12 -mt-16 relative z-10">
          <div className="gold-frame p-8 md:p-12" style={{ background: 'oklch(0.11 0.009 300)' }}>
            {/* Issue + genre */}
            <div className="flex items-center gap-4 mb-5">
              <span className={`genre-tag ${story.genre}`}>{story.genre}</span>
              <span style={{ color: 'oklch(0.35 0.008 70)' }}>·</span>
              <span className="cinzel-label" style={{ fontSize: '0.55rem' }}>
                Issue {String(story.issue).padStart(2, '0')}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-4" style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              lineHeight: 1.1,
              color: 'oklch(0.88 0.008 70)',
              letterSpacing: '-0.02em',
            }}>
              {story.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 pt-5 border-t" style={{ borderColor: 'oklch(0.72 0.12 75 / 15%)' }}>
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '0.9rem', color: 'oklch(0.55 0.01 70)' }}>
                {story.date}
              </span>
              <span style={{ color: 'oklch(0.35 0.008 70)' }}>·</span>
              <span className="flex items-center gap-1.5" style={{ color: 'oklch(0.45 0.01 70)' }}>
                <Clock size={11} />
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.1em' }}>{story.readTime} read</span>
              </span>
              <span style={{ color: 'oklch(0.35 0.008 70)' }}>·</span>
              <span className="flex items-center gap-1.5" style={{ color: 'oklch(0.45 0.01 70)' }}>
                <BookOpen size={11} />
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.1em' }}>{story.wordCount} words</span>
              </span>
            </div>
          </div>
        </header>

        {/* Story body */}
        <div className="story-body">
          {paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={i === 0 ? 'drop-cap' : ''}
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '1.1rem',
                lineHeight: 2,
                color: 'oklch(0.75 0.008 70)',
                marginBottom: '1.75rem',
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* End ornament */}
        <div className="mt-16 mb-12">
          <div className="ornament-divider">
            <span style={{ color: 'oklch(0.72 0.12 75 / 50%)', fontSize: '1.2rem' }}>✦ ✦ ✦</span>
          </div>
        </div>

        {/* Author / Publication note */}
        <div className="text-center mb-16">
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '0.95rem',
            color: 'oklch(0.45 0.01 70)',
          }}>
            Published in <em>The Inkwell</em>, Vol. I, Issue {String(story.issue).padStart(2, '0')}
          </p>
        </div>

        {/* Subscribe nudge */}
        <div className="gold-frame p-8 text-center mb-20" style={{ background: 'oklch(0.11 0.009 300)' }}>
          <p className="cinzel-label mb-3">The Midnight Dispatch</p>
          <p className="mb-6" style={{
            fontFamily: "'Lora', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'oklch(0.55 0.01 70)',
          }}>
            A new story arrives each midnight. Subscribe to receive it before the candle gutters.
          </p>
          <Link href="/subscribe">
            <button className="pulse-gold px-8 py-3 transition-all duration-300"
              style={{
                background: 'transparent',
                border: '1px solid oklch(0.72 0.12 75 / 50%)',
                color: 'oklch(0.72 0.12 75)',
                fontFamily: "'Cinzel', serif",
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'oklch(0.72 0.12 75 / 12%)';
                (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.72 0.12 75)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.72 0.12 75 / 50%)';
              }}
            >
              Subscribe to the Inkwell
            </button>
          </Link>
        </div>
      </article>

      {/* Related stories */}
      <section className="py-16 px-6 border-t" style={{ borderColor: 'oklch(0.72 0.12 75 / 10%)', background: 'oklch(0.08 0.007 300)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="ornament-divider mb-12">
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'oklch(0.72 0.12 75 / 70%)',
              whiteSpace: 'nowrap',
            }}>
              ✦ More from the Archive ✦
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedStories.map((s, i) => (
              <StoryCard key={s.id} story={s} index={i} />
            ))}
          </div>
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
