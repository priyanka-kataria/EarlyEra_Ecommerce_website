
import React from 'react';
import { Review } from '../types';
import { Star, User } from 'lucide-react';

interface ReviewCardProps {
    review: Review;
}

const ReviewStars: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
            ))}
        </div>
    );
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
    return (
        <div className="bg-background p-6 rounded-lg border border-border-color">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className="bg-accent p-2 rounded-full">
                        <User className="h-5 w-5 text-text-secondary" />
                    </div>
                    <div>
                        <p className="font-semibold text-text-main">{review.reviewerName}</p>
                        <ReviewStars rating={review.rating} />
                    </div>
                </div>
                <p className="text-sm text-text-secondary">{review.date}</p>
            </div>
            <p className="text-text-secondary leading-relaxed">{review.comment}</p>
        </div>
    );
};

export default ReviewCard;
