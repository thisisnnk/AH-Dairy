import ScrollRow from "./ScrollRow";
import ReviewCard from "./ReviewCard";
import ImageCard from "./ImageCard";

// Real Google Reviews from Adventure Holidays Google Maps listing
// Place ID: 0x3ba857872dbe599b:0xb5e5bcb8e37fb594
const reviews = [
  { name: "Sriram", rating: 5, text: "South India can be overwhelming if not planned properly, but Adventure Holidays managed it professionally. There was enough structure to keep things organized ... enjoy the places instead of just ticking boxes." },
  { name: "Deepa", rating: 5, text: "Thank you, Adventure Holidays, for a memorable and well-organized trip. Our 2-day school tour to Mysore from St. Johns Girls Higher Secondary School, Kodaikanal, was safe, smooth, and enjoyable." },
  { name: "Cheranthan", rating: 5, text: "I highly recommend Adventure Holidays to anyone looking for a safe, friendly, and well-organized travel experience. This was not just a holiday, it was a beautiful memory that I will always cherish." },
  { name: "Shree Vishal", rating: 5, text: "Even with challenges, they managed everything confidently and ensured our comfort and safety. The coordinators were friendly and always helpful." },
  { name: "Iqra Shiffana", rating: 5, text: "The Adventure holidays organiser did a great job planning our college trip. Everything was well organised, ran smoothly, and any issues were handled quickly. The itinerary was well balanced and ..stress-free" },
  { name: "Akshaya", rating: 5, text: "From the very beginning, I was impressed by how well everything was organized. Safety was clearly their top priority — every activity was guided by trained professionals" },
  { name: "Saranya ", rating: 5, text: "Very recently trip was done with them, tripsome days were awesome never wrinkled out at anywhere. Onwhole they are best. We will come back again ADVENTURE HOLIDAYS." },
  { name: "Yalini", rating: 5, text: "All the staffs who've been working in adventure holidays are soo kind, nd assuring tht you can make a safe journey girls.. without any of the issues they took care of me , pampered me soo well in all assistance" },
  { name: "Rahamadullah", rating: 5, text: "The team was friendly, supportive, and always responsive, which made the entire trip feel smooth and enjoyable. Highly recommend Adventure Holidays for well-organized adventure holidays!" },
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
const cardH = "h-[16vh] sm:h-[16vh] md:h-[18vh] lg:h-[20vh]";

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
          className="bg-primary text-primary-foreground font-cta font-black uppercase py-2 px-12 sm:py-2.5 sm:px-8 md:py-3 md:px-10 lg:py-3 lg:px-12 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 hover:brightness-90 hover:scale-105 active:scale-95 shadow-lg inline-block"
        >
          Book a Package
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
