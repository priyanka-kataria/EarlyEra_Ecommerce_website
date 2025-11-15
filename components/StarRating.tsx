
import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewCount: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, reviewCount }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex items-center">
            {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} className="h-5 w-5 text-yellow-400 fill-current" />)}
            {halfStar && <Star key="half" className="h-5 w-5 text-yellow-400 fill-current" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' }} />}
            {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />)}
            {reviewCount > 0 ? (
                <span className="ml-2 text-sm text-text-secondary">({rating.toFixed(1)} from {reviewCount} reviews)</span>
            ) : (
                <span className="ml-2 text-sm text-text-secondary">No reviews yet</span>
            )}
        </div>
    );
};

export default StarRating;
