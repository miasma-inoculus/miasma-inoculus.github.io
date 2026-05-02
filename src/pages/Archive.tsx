/*
 * THE INKWELL — Archive Page
 * Design: The Dusty Library
 * Features: Searchable list of all past stories
 */

import { useState } from 'react';
import { Search, Calendar, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { allStories } from '../lib/stories';
import StoryCard from '../components/StoryCard';

export default function Archive() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStories = allStories.filter(story => 
    story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-24 px-6" style={{ background: 'oklch(0.09 0.008 300)' }}>
      <div className="max-w-5xl mx-auto">
        
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
              ✦ The Great Library ✦
            </span>
          </div>
          <h1 className="mb-4" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: '3rem',
            color: 'oklch(0.84 0.008 70)',
          }}>
            The Archive
          </h1>
          <p className="max-w-xl mx-auto" style={{
            fontFamily: "'Lora', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: 'oklch(0.55 0.01 70)',
          }}>
            Every dispatch ever sent. Every shadow ever recorded. Search the collection for a specific terror.
          </p>
        </header>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-16 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="text"
            placeholder="Search the shadows..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black/40 border-border/40 pl-12 pr-4 py-3 text-foreground font-serif focus:border-gold/50 transition-all outline-none"
            style={{
                border: '1px solid oklch(0.72 0.12 75 / 20%)',
                color: 'oklch(0.72 0.008 70)'
            }}
          />
        </div>

        {/* Results Grid */}
        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, i) => (
              <StoryCard key={story.id} story={story} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-serif italic text-muted-foreground">The ink has faded. No stories match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
