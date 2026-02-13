import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 md:w-4 md:h-4 ${i < rating ? "fill-star text-star" : "fill-muted text-muted"
            }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
