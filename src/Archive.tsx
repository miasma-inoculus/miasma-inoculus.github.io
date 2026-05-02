
/*
 * THE INKWELL — Archive Page
 * Design: Gaslight & Shadow — full story grid with genre filters
 * Cinzel labels, gold filter tabs, portrait story cards
 */

import { useState } from 'react';
import { stories } from '@/lib/stories';
import type { Genre } from '@/lib/stories';
import StoryCard from '@/components/StoryCard';

const ORNAMENT = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663614260208/VLQTr2HHpa65hSd5QHn4op/masthead_ornament-SWtKcceA7MVfXV4kpZboRD.webp';

type Filter = 'all' | Genre;

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All Dispatches' },
  { value: 'horror', label: 'Horror' },
  { value: 'thriller', label: 'Thriller' },
  { value: 'suspense', label: 'Suspense' },
];

export default function Archive() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filtered = activeFilter === 'all'
    ? stories
    : stories.filter(s => s.genre === activeFilter);

  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.09 0.008 300)' }}>

      {/* Page header */}
      <div className="relative pt-24 lg:pt-16 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center top, oklch(0.32 0.1 15 / 6%) 0%, transparent 60%)'
        }} />
        <div className="relative">
          <p className="cinzel-label mb-4" style={{ fontSize: '0.6rem' }}>
            Vol. I · The Complete Archive
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: 'oklch(0.84 0.008 70)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}>
            The Archive
          </h1>
          <p className="mt-4 max-w-md mx-auto" style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: 'oklch(0.45 0.01 70)',
            lineHeight: 1.7,
          }}>
            Every story ever published in the Inkwell, preserved in the dark.
          </p>
        </div>
      </div>

      {/* Ornament */}
      <div className="flex justify-center px-6 mb-10">
        <img src={ORNAMENT} alt="" className="w-full max-w-xl opacity-40" style={{ filter: 'sepia(20%)' }} />
      </div>

      {/* Genre filters */}
      <div className="px-6 mb-12">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
          {filters.map(({ value, label }) => {
            const isActive = activeFilter === value;
            return (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.62rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '0.5rem 1.5rem',
                  border: `1px solid ${isActive ? 'oklch(0.72 0.12 75 / 80%)' : 'oklch(0.72 0.12 75 / 20%)'}`,
                  background: isActive ? 'oklch(0.72 0.12 75 / 12%)' : 'transparent',
                  color: isActive ? 'oklch(0.72 0.12 75)' : 'oklch(0.55 0.01 70)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.72 0.12 75 / 40%)';
                    (e.currentTarget as HTMLElement).style.color = 'oklch(0.65 0.01 70)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.72 0.12 75 / 20%)';
                    (e.currentTarget as HTMLElement).style.color = 'oklch(0.55 0.01 70)';
                  }
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Story count */}
      <div className="px-6 mb-8 text-center">
        <p style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '0.55rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'oklch(0.45 0.01 70)',
        }}>
          {filtered.length} {filtered.length === 1 ? 'dispatch' : 'dispatches'} found
        </p>
      </div>

      {/* Stories grid */}
      <div className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((story, i) => (
                <StoryCard key={story.id} story={story} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'oklch(0.45 0.01 70)',
              }}>
                No stories found in this category.
              </p>
            </div>
          )}
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
