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
  // Sample services data - you can replace with your actual data
  const services = [
    {
      title: "NEXT AVAILABLE",
      description: "Quickest possible pick-up.",
      image: "/assets/images/next.png",
      rate: "250 kms/day",
      passengers: "4/5",
      luggage: "3/5",
      airCondition: "Yes",
      gpsNavigation: "Yes",
    },
    {
      title: "SEDAN",
      description: "Comfort for 1–4 passengers.",
      image: "/assets/images/3bdbc452ce1ae8e6cb763ecb5ae315eb.avif",
      rate: "280 kms/day",
      passengers: "4/5",
      luggage: "3/5",
      airCondition: "Yes",
      gpsNavigation: "Yes",
    },
    {
      title: "SUV",
      description: "Extra legroom & luggage space.",
      image: "/assets/images/4629696636792d6a8674e7523516243_900_600-f.jpg",
      rate: "300 kms/day",
      passengers: "5/6",
      luggage: "5/6",
      airCondition: "Yes",
      gpsNavigation: "Yes",
    },
    {
      title: "MAXI",
      description: "Groups up to 11.",
      image: "/assets/images/mercedes-sprinter-mini-bus.jpg",
      rate: "350 kms/day",
      passengers: "11/11",
      luggage: "6/6",
      airCondition: "Yes",
      gpsNavigation: "Yes",
    },
    {
      title: "CARGO",
      description: "Door-to-door bulky item transport.",
      image: "/assets/images/e881c42f-8760-5c9d-8c0b-fc851be50000.avif",
      rate: "320 kms/day",
      passengers: "2/3",
      luggage: "6/6",
      airCondition: "Yes",
      gpsNavigation: "Yes",
    },
    {
      title: "NDIS TRANSPORT",
      description: "Wheelchair-accessible trips with TTSS support.",
      image: "/assets/images/man-using-disabled-parking-spot-1024x576.png",
      rate: "300 kms/day",
      passengers: "4/5",
      luggage: "4/5",
      airCondition: "Yes",
      gpsNavigation: "Yes",
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
    <section className="py-12 px-4">
      <div className="flex flex-col items-center mb-12 w-full justify-center">
        <h1 className="font-bold text-[30px] text-[#4D2D7C]">OUR SERVICES</h1>
        <p className="text-gray-600">We are Always There at Your Services</p>
      </div>

      <div className="carousel-container relative">
        <Carousel
          ref={carouselRef}
          {...carouselSettings}
          className="services-carousel"
        >
          {services.map((service, index) => (
            <div key={index} className="px-2">
              <ServiceCard service={service} />
            </div>
          ))}
        </Carousel>

        <div className="carousel-arrows flex justify-center mt-8">
          <button
            onClick={goToPrev}
            className="carousel-arrow prev-arrow mx-2 bg-[#4D2D7C] hover:bg-[#3a2160] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all"
          >
            <LeftOutlined />
          </button>
          <button
            onClick={goToNext}
            className="carousel-arrow next-arrow mx-2 bg-[#4D2D7C] hover:bg-[#3a2160] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all"
          >
            <RightOutlined />
          </button>
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
          className="h-48 object-contain"
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

        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#4D2D7C] flex items-center justify-center mr-3">
                <UserOutlined style={{ color: "white" }} />
              </div>
              <span className="text-gray-700">Passengers:</span>
            </div>
            <span className="font-medium">{service.passengers}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#4D2D7C] flex items-center justify-center mr-3">
                <InboxOutlined style={{ color: "white" }} />
              </div>
              <span className="text-gray-700">Luggage Carry:</span>
            </div>
            <span className="font-medium">{service.luggage}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#4D2D7C] flex items-center justify-center mr-3">
                <ThunderboltOutlined style={{ color: "white" }} />
              </div>
              <span className="text-gray-700">Air Condition:</span>
            </div>
            <span className="font-medium">{service.airCondition}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#4D2D7C] flex items-center justify-center mr-3">
                <CompassOutlined style={{ color: "white" }} />
              </div>
              <span className="text-gray-700">GPS Navigation:</span>
            </div>
            <span className="font-medium">{service.gpsNavigation}</span>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full bg-[#4D2D7C] hover:bg-[#804ac7] text-white py-3 px-4 rounded-full flex items-center justify-center transition-all">
            BOOK RIDE NOW <RightOutlined className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
