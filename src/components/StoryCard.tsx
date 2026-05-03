/*
 * THE INKWELL — Story Card Component
 * Design: Gaslight & Shadow — portrait-oriented cards like tarot/book covers
 * Gold border frame, hover glow, genre tags, Playfair Display titles
 */

import { Link } from 'wouter';
import { Clock } from 'lucide-react';
import type { Story } from '@/lib/stories';

interface StoryCardProps {
  story: Story;
  index?: number;
}

export default function StoryCard({ story, index = 0 }: StoryCardProps) {
  const delay = index * 0.1;

  return (
    <Link href={`/story/${story.id}`}>
      <div
        className="story-card gold-frame group cursor-pointer"
        style={{
          background: 'oklch(0.11 0.009 300)',
          animationDelay: `${delay}s`,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '2/3', maxHeight: '280px' }}>
          <img
            src={story.imageUrl}
            alt={story.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ filter: 'brightness(0.85) saturate(0.8)' }}
          />
          {/* Image overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, transparent 40%, oklch(0.11 0.009 300) 100%)'
          }} />
          {/* Genre tag overlay */}
          <div className="absolute top-4 left-4">
            <span className={`genre-tag ${story.genre}`}>{story.genre}</span>
          </div>
          {/* Issue number */}
          <div className="absolute top-4 right-4">
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 900,
              fontSize: '1.8rem',
              color: 'oklch(0.72 0.12 75 / 30%)',
              lineHeight: 1,
            }}>
              {String(story.issue).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Date */}
          <p className="cinzel-label mb-3" style={{ fontSize: '0.55rem' }}>
            {story.date}
          </p>

          {/* Title */}
          <h3 className="mb-3 gold-shimmer-text" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: '1.2rem',
            lineHeight: 1.3,
            color: 'oklch(0.84 0.008 70)',
          }}>
            {story.title}
          </h3>

          {/* Excerpt */}
          <p className="flex-1 mb-4" style={{
            fontFamily: "'Lora', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '0.85rem',
            lineHeight: 1.7,
            color: 'oklch(0.55 0.01 70)',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {story.excerpt}
          </p>

          {/* Meta footer */}
          <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'oklch(0.72 0.12 75 / 10%)' }}>
            <span className="flex items-center gap-1.5" style={{ color: 'oklch(0.45 0.01 70)' }}>
              <Clock size={10} />
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.55rem', letterSpacing: '0.1em' }}>
                {story.readTime}
              </span>
            </span>
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.55rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'oklch(0.72 0.12 75 / 50%)',
              transition: 'color 0.3s',
            }}
              className="group-hover:text-amber-400"
            >
              Read →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
