import StarRating from "./StarRating";

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  className?: string;
}

const ReviewCard = ({ name, rating, text, className = "" }: ReviewCardProps) => {
  return (
    <div className={`bg-card rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-3 sm:p-4 md:p-6 shadow-[0_0_15px_rgba(0,0,0,0.1)] min-w-[220px] max-w-[260px] sm:min-w-[260px] sm:max-w-[300px] md:min-w-[300px] md:max-w-[340px] flex-shrink-0 flex flex-col justify-between gap-2 md:gap-3 transition-transform duration-300 hover:scale-[1.02] ${className}`}>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-card-foreground text-xs sm:text-sm md:text-base">{name}</span>
        <StarRating rating={rating} />
      </div>
      <p className="text-review-text text-[11px] sm:text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-4 font-sub">
        {text}
      </p>
    </div>
  );
};

export default ReviewCard;
