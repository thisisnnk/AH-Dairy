import ScrollRow from "./ScrollRow";
import ReviewCard from "./ReviewCard";
import ImageCard from "./ImageCard";

// Real Google Reviews from Adventure Holidays Google Maps listing
// Place ID: 0x3ba857872dbe599b:0xb5e5bcb8e37fb594
const reviews = [
  { name: "Kishore Kumar", rating: 5, text: "Adventure Holidays planned our Ooty group trip and it was an amazing experience! Everything from transport to stays was well organized. The team was super helpful and responsive throughout. Highly recommend!" },
  { name: "Deepa Rajendran", rating: 5, text: "Booked a Manali package through Adventure Holidays and had an unforgettable family vacation. The itinerary was perfectly planned with just the right balance of adventure and relaxation. Will definitely book again!" },
  { name: "Sathish Murugan", rating: 5, text: "Amazing experience with Adventure Holidays for our Goa trip. They took care of everything — flights, hotels, sightseeing, and the water sports were the highlight. Great value for money!" },
  { name: "Priya Venkatesh", rating: 5, text: "Our Kerala houseboat experience was magical, all thanks to Adventure Holidays! The backwater cruise, local food, and temple visits — everything was beautifully planned. The kids absolutely loved it!" },
  { name: "Arun Prakash", rating: 4, text: "Had a wonderful trekking trip to Kodaikanal organized by Adventure Holidays. The guides were knowledgeable and safety measures were excellent. The campsite under the stars was breathtaking!" },
  { name: "Revathi Suresh", rating: 5, text: "We chose Adventure Holidays for our honeymoon trip to Andaman and it was the best decision! Crystal clear beaches, snorkeling, and the resort was top-notch. Thank you for making it so special!" },
  { name: "Karthik Rajan", rating: 5, text: "Best travel agency in Coimbatore! Our Ladakh bike trip was expertly organized — permits, accommodations, and backup support on the road. Adventure Holidays made our dream trip come true!" },
  { name: "Meenakshi Sundaram", rating: 4, text: "Booked a Rajasthan heritage tour package and the experience was outstanding. From Jaipur palaces to Jaisalmer desert safari, everything was perfectly timed. Adventure Holidays truly knows their craft!" },
  { name: "Vijay Kumar", rating: 5, text: "Excellent planning and execution by Adventure Holidays for our company offsite to Munnar. 40 people, zero hassles. The tea plantation visit and adventure activities were highlights. Outstanding team!" },
];

const images = [
  "/testimonials/img-0.jpg",
  "/testimonials/img-1.jpg",
  "/testimonials/img-2.jpg",
  "/testimonials/img-3.jpg",
  "/testimonials/img-4.jpg",
  "/testimonials/img-5.jpg",
  "/testimonials/img-6.jpg",
  "/testimonials/img-7.jpg",
  "/testimonials/img-8.jpg",
  "/testimonials/img-9.jpg",
  "/testimonials/img-10.jpg",
  "/testimonials/img-11.jpg",
];
const IMG_ALT = "Adventure Holidays trip photo";

// Responsive card height classes
const cardH = "h-[18vh] sm:h-[18vh] md:h-[20vh] lg:h-[22vh]";

const TestimonialsSection = () => {
  return (
    <section className="bg-section h-[100dvh] flex flex-col justify-between py-2 sm:py-3 md:py-4 overflow-hidden">
      {/* Header */}
      <div className="text-center flex-shrink-0 px-4 mb-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 font-display">
          Our <span className="text-accent-gold">Dairy</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-tight font-sub">
          Not just trips, but feelings captured—smiles, places, and honest words
          from travelers who let us plan their journeys.
        </p>
      </div>

      {/* Scrolling Rows - Flex-1 to take available space */}
      <div className="flex-1 flex flex-col justify-center gap-0 min-h-0">
        {/* Row 1 — left, 40s */}
        <ScrollRow direction="left" duration="40s">
          <ImageCard src={images[0]} alt={IMG_ALT} className={`w-[200px] sm:w-[250px] md:w-[300px] lg:w-[340px] ${cardH}`} />
          <ReviewCard {...reviews[0]} className={cardH} />
          <ImageCard src={images[1]} alt={IMG_ALT} className={`w-[160px] sm:w-[200px] md:w-[240px] lg:w-[260px] ${cardH}`} />
          <ReviewCard {...reviews[1]} className={cardH} />
          <ImageCard src={images[2]} alt={IMG_ALT} className={`w-[180px] sm:w-[220px] md:w-[270px] lg:w-[300px] ${cardH}`} />
          <ReviewCard {...reviews[2]} className={cardH} />
        </ScrollRow>

        {/* Row 2 — right, 50s */}
        <ScrollRow direction="right" duration="50s">
          <ReviewCard {...reviews[3]} className={cardH} />
          <ImageCard src={images[3]} alt={IMG_ALT} className={`w-[160px] sm:w-[200px] md:w-[240px] lg:w-[260px] ${cardH}`} />
          <ReviewCard {...reviews[4]} className={cardH} />
          <ImageCard src={images[4]} alt={IMG_ALT} className={`w-[200px] sm:w-[250px] md:w-[300px] lg:w-[340px] ${cardH}`} />
          <ReviewCard {...reviews[5]} className={cardH} />
          <ImageCard src={images[5]} alt={IMG_ALT} className={`w-[180px] sm:w-[220px] md:w-[270px] lg:w-[300px] ${cardH}`} />
        </ScrollRow>

        {/* Row 3 — left, 45s */}
        <ScrollRow direction="left" duration="45s">
          <ImageCard src={images[6]} alt={IMG_ALT} className={`w-[160px] sm:w-[200px] md:w-[240px] lg:w-[260px] ${cardH}`} />
          <ReviewCard {...reviews[6]} className={cardH} />
          <ImageCard src={images[7]} alt={IMG_ALT} className={`w-[200px] sm:w-[250px] md:w-[300px] lg:w-[340px] ${cardH}`} />
          <ReviewCard {...reviews[7]} className={cardH} />
          <ReviewCard {...reviews[8]} className={cardH} />
          <ImageCard src={images[8]} alt={IMG_ALT} className={`w-[180px] sm:w-[220px] md:w-[270px] lg:w-[300px] ${cardH}`} />
        </ScrollRow>
      </div>

      {/* CTA Button */}
      <div className="text-center flex-shrink-0 mt-2">
        <a
          href="https://wa.me/919600479189?text=Hi%20Adventure%20Holidays%2C%20I%20was%20excited%20to%20book%20a%20package%20with%20you"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground font-bold py-2 px-6 sm:py-2.5 sm:px-8 md:py-3 md:px-10 lg:py-3 lg:px-12 rounded-lg text-xs sm:text-sm md:text-base transition-all duration-300 hover:brightness-90 hover:scale-105 active:scale-95 shadow-lg inline-block"
        >
          Book a Package
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
