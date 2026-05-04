import React from 'react';
import { Story } from '../stories';

interface Props {
  story: Story;
}

const StoryCard: React.FC<Props> = ({ story }) => {
  return (
    <div className="glass-panel group relative overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]">
      {/* The Visual Wrapper */}
      <div className="relative h-80 overflow-hidden border-b border-[#c9a84c]/20">
        <img 
          src={story.image} 
          alt={story.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b0e] to-transparent opacity-60" />
      </div>

      {/* The Content Wrapper */}
      <div className="p-6">
        <span className="gold-text text-[10px] tracking-[0.3em] uppercase opacity-60">
          {story.category}
        </span>
        <h3 className="gold-text text-xl mt-1 mb-2 group-hover:text-white transition-colors">
          {story.title}
        </h3>
        <p className="story-text text-sm italic text-[#c9a84c]/60 mb-4">
          {story.subtitle}
        </p>
        <p className="story-text text-sm line-clamp-3 text-[#d4cfc8]/80">
          {story.content}
        </p>
        
        <div className="mt-6 flex justify-between items-center">
          <div className="h-[1px] w-12 bg-[#c9a84c]/30" />
          <button className="gold-text text-[10px] tracking-widest hover:text-white transition-colors">
            READ DISPATCH
          </button>
          <div className="h-[1px] w-12 bg-[#c9a84c]/30" />
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
