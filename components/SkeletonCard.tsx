
import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-surface rounded-lg overflow-hidden border border-border-color shadow-sm animate-pulse">
      <div className="w-full h-64 bg-accent"></div>
      <div className="p-6">
        <div className="h-6 w-3/4 bg-accent rounded mb-4"></div>
        <div className="h-4 w-1/4 bg-accent rounded mb-4"></div>
        <div className="space-y-2">
            <div className="h-4 w-full bg-accent rounded"></div>
            <div className="h-4 w-5/6 bg-accent rounded"></div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="h-8 w-1/3 bg-accent rounded"></div>
          <div className="h-10 w-40 bg-accent rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
