import StarRating from "./StarRating";

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  className?: string;
}

const ReviewCard = ({ name, rating, text, className = "" }: ReviewCardProps) => {
  // Dynamic width based on text length to optimize for 5 lines
  const getWidthClass = () => {
    if (text.length > 200) return "w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]";
    if (text.length > 120) return "w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px]";
    return "w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px]";
  };

  return (
    <div className={`bg-card rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-2 sm:p-3 md:p-5 shadow-[0_0_15px_rgba(0,0,0,0.1)] ${getWidthClass()} flex-shrink-0 flex flex-col justify-start gap-2 transition-transform duration-300 hover:scale-[1.02] ${className}`}>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-card-foreground text-xs sm:text-sm md:text-base">{name}</span>
        <StarRating rating={rating} />
      </div>
      <p className="text-review-text text-[12px] leading-relaxed font-sub line-clamp-5">
        {text}
      </p>
    </div>
  );
};

export default ReviewCard;
