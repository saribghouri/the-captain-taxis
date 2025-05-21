"use client";
import { useState, useRef } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined, StarFilled } from "@ant-design/icons";

const Testimonials = () => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Sample testimonials data
  const testimonials = [
    {
      quote:
        "The Captain Taxis provides the most reliable service I've experienced. Their drivers are always professional and punctual. I never worry about getting to my appointments on time.",
      name: "Sarah Johnson",
      location: "Sydney CBD",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80", // Replace with actual image
    },
    {
      quote:
        "As someone who uses NDIS services, I appreciate how accommodating and understanding the drivers are. The vehicles are always clean and well-maintained. Highly recommended!",
      name: "Michael Thompson",
      location: "Parramatta",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80", // Replace with actual image
    },
    {
      quote:
        "I've been using The Captain Taxis for my business trips for over a year now. The fixed fares make expense reporting so much easier, and the service is consistently excellent.",
      name: "Jennifer Lee",
      location: "North Sydney",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80", // Replace with actual image
    },
    {
      quote:
        "The app is so easy to use, and I love that I can track my driver's arrival. The TTSS subsidy integration is seamless, saving me both time and money on every trip.",
      name: "Robert Williams",
      location: "Bondi",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80", // Replace with actual image
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
    autoplay: true,
  };

  const goToPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const goToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="md:px-8 md:py-16 px-5 py-12">
      <div className="relative bg-white overflow-hidden section">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-40 h-40 text-[#4D2D7C] transform rotate-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
            </svg>
          </div>
          <div className="absolute bottom-10 right-10 w-40 h-40 text-[#4D2D7C] transform -rotate-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
            </svg>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              What Our Riders Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </div>

          <div className="relative">
            <Carousel
              ref={carouselRef}
              {...settings}
              className="testimonial-carousel"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4 pb-12">
                  <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10 rounded-2xl shadow-lg max-w-3xl mx-auto">
                    <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
                      <div className="text-[#4D2D7C] opacity-20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="mb-6">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                        />
                      </div>

                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarFilled key={i} className="text-[#DFBA3F]" />
                        ))}
                      </div>

                      <p className="text-lg sm:text-xl text-gray-700 mb-6 text-center leading-relaxed">
                        "{testimonial.quote}"
                      </p>

                      <div className="text-center">
                        <p className="font-semibold text-[#4D2D7C] text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>

            {/* Custom Navigation */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={goToPrev}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#4D2D7C] hover:bg-[#4D2D7C] hover:text-white transition-all duration-300 shadow-sm"
              >
                <LeftOutlined />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => carouselRef.current?.goTo(index)}
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
              >
                <RightOutlined />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
