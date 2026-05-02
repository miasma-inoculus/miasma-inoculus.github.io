/*
 * THE INKWELL — Story Card Component
 * Design: The Framed Specimen
 * Features: Hover effects, genre-specific styling, entry animations
 */

import { Link } from "wouter";
import { Clock, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

interface StoryCardProps {
  story: {
    id: string;
    title: string;
    excerpt: string;
    genre: string;
    readTime: string;
    issue: number;
    date: string;
  };
  index: number;
}

export default function StoryCard({ story, index }: StoryCardProps) {
  return (
    <Link href={`/story/${story.id}`}>
      <div 
        className={cn(
          "group relative flex flex-col p-8 transition-all duration-700 cursor-pointer overflow-hidden",
          "bg-black/20 border border-gold/10 hover:border-gold/30"
        )}
        style={{
          animation: `reveal-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards ${index * 0.1}s`,
          opacity: 0
        }}
      >
        {/* Genre & Meta */}
        <div className="flex items-center justify-between mb-6">
          <span className={cn("genre-tag", story.genre)}>
            {story.genre}
          </span>
          <span className="font-cinzel text-[0.55rem] tracking-widest text-gold/30">
            No. {String(story.issue).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-4 text-xl font-playfair font-bold text-gold/80 leading-tight group-hover:text-gold transition-colors">
          {story.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-8 font-lora italic text-sm text-gold/40 line-clamp-3 leading-relaxed">
          "{story.excerpt}"
        </p>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-gold/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gold/30">
            <Clock size={12} />
            <span className="font-cinzel text-[0.55rem] tracking-wider">{story.readTime}</span>
          </div>
          <ChevronRight size={14} className="text-gold/20 group-hover:text-gold/60 group-hover:translate-x-1 transition-all" />
        </div>

        {/* Subtle Background Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
             style={{ background: 'radial-gradient(circle at center, oklch(0.72 0.12 75 / 5%) 0%, transparent 70%)' }} />
      </div>
    </Link>
  );
}
