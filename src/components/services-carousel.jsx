"use client";
import { Carousel } from "antd";
import {
  RightOutlined,
  LeftOutlined,
  UserOutlined,
  InboxOutlined,
  ThunderboltOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import { useRef } from "react";

const ServicesCarousel = () => {
  const services = [
    {
      title: "Airport Shuttle",
      description: "Quickest possible pick-up.",
      image: "/assets/images/istockphoto-175539191-612x612.jpg",
      rate: "250 kms/day",
      passengers: "4/5",
      luggage: "3/5",
      airCondition: "Yes",
      gpsNavigation: "Yes",
    },
    {
      title: "NDIS Support Service",
      description: "Comfort for 1–4 passengers.",
      image: "/assets/images/man-wheelchair-lift-specialized-vehicle-people-with-disabilities-1-1024x684.jpg",
      rate: "280 kms/day",
    },
    {
      title: "Parcel Delivery Service",
      description: "Extra legroom & luggage space.",
      image: "/assets/images/mercedes-sprinter-mini-bus.jpg",

      rate: "300 kms/day",
    },
    {
      title: "Events & Weddings Service",
      description: "Groups up to 11.",
      image: "/assets/images/20e7d7b5d5a826e79bc9d196a1be10f1.jpg",
      rate: "350 kms/day",
    },
    {
      title: "Corporate Travel Service",
      description: "Door-to-door bulky item transport.",
      image: "/assets/images/4629696636792d6a8674e7523516243_900_600-f.jpg",
      rate: "320 kms/day",
    },
    {
      title: "Sydney Taxi Tourist Tour",
      description: "Wheelchair-accessible trips with TTSS support.",
      image: "/assets/images/man-using-disabled-parking-spot-1024x576.png",
      rate: "300 kms/day",
    },
  ];

  const carouselRef = useRef(null);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide default arrows, we'll add custom ones
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    <section className="md:px-8 md:py-16 px-5 py-12">
      <div className="section">
        <div className="flex flex-col items-center mb-12 w-full justify-center">
          <h1 className="font-bold text-[30px] text-[#4D2D7C] capitalize">Our Services</h1>
          <p className="text-gray-600 text-xl">We are Always There at Your Services</p>
        </div>

        <div className="carousel-container relative">
          <Carousel
            ref={carouselRef}
            {...carouselSettings}
            className="services-carousel"
          >
            {services.map((service, index) => (
              <div key={index} className="px-2 my-4">
                <ServiceCard service={service} />
              </div>
            ))}
          </Carousel>

          <div className="carousel-arrows flex justify-center mt-8">
            <button
              onClick={goToPrev}
              className="carousel-arrow cursor-pointer prev-arrow mx-2 bg-[#4D2D7C] hover:bg-[#3a2160] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all"
            >
              <LeftOutlined />
            </button>
            <button
              onClick={goToNext}
              className="carousel-arrow  cursor-pointer next-arrow mx-2 bg-[#4D2D7C] hover:bg-[#3a2160] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all"
            >
              <RightOutlined />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
      <div className="p-4 bg-gray-50 flex justify-center">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className="h-48 object-contain rounded-[40px]"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-center text-gray-800">
          {service.title}
        </h2>

        {service.description && (
          <p className="text-center text-gray-600 mt-1 mb-2">
            {service.description}
          </p>
        )}

        <div className="flex justify-center my-2">
          <p className="text-[#4D2D7C] font-medium">{service.rate}</p>
        </div>

        <div className="flex justify-center my-2">
          <div className="w-16 h-1 bg-[#4D2D7C] rounded"></div>
        </div>

        <div className="mt-6">
          <button className="w-full cursor-pointer bg-[#4D2D7C] hover:bg-[#804ac7] text-white py-3 px-4 rounded-full flex items-center justify-center transition-all">
            BOOK RIDE NOW <RightOutlined className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
