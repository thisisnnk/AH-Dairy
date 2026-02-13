interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageCard = ({ src, alt, className = "" }: ImageCardProps) => {
  return (
    <div
      className={`rounded-[24px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden flex-shrink-0 relative transition-transform duration-300 hover:scale-[1.02] shadow-[0_0_15px_rgba(0,0,0,0.1)] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
};

export default ImageCard;
