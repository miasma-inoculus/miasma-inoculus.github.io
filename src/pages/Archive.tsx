import React from 'react';
import { storyData } from '../stories';
import StoryCard from '../components/StoryCard';

const Archive = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="gold-text text-4xl mb-4 tracking-[0.2em]">THE DISPATCH ARCHIVE</h2>
        <div className="h-[1px] w-24 bg-[#c9a84c] mx-auto mb-4 opacity-50" />
        <p className="story-text italic text-[#d4cfc8]/60">
          "A collection of things meant to be forgotten, yet refusing to fade."
        </p>
      </div>

      {/* The Grid - This is where the 2x2 layout happens on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {storyData.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>

      {/* Footer Decoration */}
      <div className="mt-20 text-center opacity-30">
        <div className="gold-text text-[10px] tracking-[0.5em]">END OF ENTRIES</div>
      </div>
    </div>
  );
};

export default Archive;
