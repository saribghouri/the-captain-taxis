"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const autoplayRef = useRef(null);

  const testimonials = [
    {
      quote:
        "The Captain Taxis provides the most reliable service I've experienced. Their drivers are always professional and punctual. I never worry about getting to my appointments on time Their drivers are always professional and punctual. I never worry about getting to my appointments on time.",
      name: "Sarah Johnson",
      location: "North Sydney",
      image: "assets/images/men.jpg", 
    },
    {
      quote:
        "As someone who uses NDIS services, I appreciate how accommodating and understanding the drivers are. The vehicles are always clean and well-maintained. Highly recommended! The vehicles are always clean and well-maintained. Highly recommended!",
      name: "Michael Thompson",
      location: "Parramatta",
      image: "assets/images/men.jpg", 
    },
    {
      quote:
        "I've been using The Captain Taxis for my business trips for over a year now. The fixed fares make expense reporting so much easier, and the service is consistently excellent. and the service is consistently excellent",
      name: "Jennifer Lee",
      location: "North Sydney",
      image: "assets/images/men.jpg", 
    },
    {
      quote:
        "The app is so easy to use, and I love that I can track my driver's arrival. The TTSS subsidy integration is seamless, saving me both time and money on every trip.  saving me both time and money on every trip.",
      name: "Robert Williams",
      location: "Bondi",
      image: "assets/images/men.jpg", 
    },
  ];

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveSlide((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, testimonials.length]);

  const goToPrev = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl  text-[#4D2D7C] mb-4">
            What Our Riders Say
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div
          className="relative "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden">
            <div className="flex flex-nowrap transition-transform duration-500 ease-in-out">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`w-full  min-h-[300px] flex-shrink-0 px-4 transition-opacity duration-500 ${
                    index === activeSlide ? "opacity-100" : "opacity-0 absolute"
                  }`}
                  style={{
                    transform:
                      index === activeSlide
                        ? "translateX(0)"
                        : "translateX(-100%)",
                  }}
                >
                  <div className="bg-white rounded-3xl shadow-md max-w-5xl h-full mx-auto overflow-hidden">
                    <div className="flex flex-col md:flex-row w-full h-full items-center">
                      <div className="w-full h-full  overflow-hidden md:w-[40%] flex items-center justify-center">
                        <img
                          src={testimonial.image || "assets/images/men.jpg"}
                          alt={testimonial.name}
                          className="w-52 h-52 object-cover rounded-full"
                        />
                      </div>
                      <div className="md:w-[60%] p-8">
                        <h3 className="text-2xl font-semibold text-[#4D2D7C] mb-2">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 mb-4 flex items-center">
                          <span className="inline-block w-2 h-2 rounded-full bg-[#f5a623] mr-2"></span>
                          {testimonial.location}
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                          {testimonial.quote}
                        </p>
                        <div>
                          <button className="bg-[#4D2D7C] text-white">Book A Airport Shuttle</button>
                          <button>Download App The Caption Taxi</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center bg-red-400 mt-10 gap-4">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#4D2D7C] hover:bg-[#4D2D7C] hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSlide === index ? "bg-[#4D2D7C] w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#4D2D7C] hover:bg-[#4D2D7C] hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
