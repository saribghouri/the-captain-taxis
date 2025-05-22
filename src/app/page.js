"use client";
import { Row, Col, Card, Button, Drawer, AutoComplete } from "antd";
import {
  ArrowRightOutlined,
  FacebookFilled,
  InstagramFilled,
  LeftOutlined,
  LinkedinFilled,
  MenuOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Modal, Input } from "antd";
import Slider from "react-slick";
import {
  EnvironmentOutlined,
  AimOutlined,
  CarOutlined,
  UserOutlined,
  AppstoreAddOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import Header from "./Header";
import ServicesCarousel from "@/components/services-carousel";
import HowItWorks from "@/components/how-it-works";
import DriveWithUs from "@/components/drive-with-us";
import Testimonials from "@/components/testimonials";
import AppPromotion from "@/components/app-promotion";
import Footer from "@/components/footer";
import CustomerBenefits from "@/components/customer-benefits";
import { useRouter } from "next/navigation";
const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [showPrices, setShowPrices] = useState(false);
  const [prices, setPrices] = useState({ sedan: 0, suv: 0 });

  const australianCities = [
    { value: "Sydney" },
    { value: "Melbourne" },
    { value: "Brisbane" },
    { value: "Perth" },
    { value: "Adelaide" },
    { value: "Gold Coast" },
    { value: "Newcastle" },
    { value: "Canberra" },
    { value: "Wollongong" },
    { value: "Hobart" },
    { value: "Geelong" },
    { value: "Townsville" },
    { value: "Cairns" },
    { value: "Darwin" },
    { value: "Toowoomba" },
    { value: "Ballarat" },
    { value: "Bendigo" },
    { value: "Launceston" },
    { value: "Mackay" },
    { value: "Rockhampton" },
  ];

  const calculatePrices = () => {
    if (pickupLocation && dropOffLocation) {
      const sedanPrice = Math.floor(Math.random() * 90) + 30;
      const suvPrice = Math.floor(Math.random() * 90) + 60; // SUV is a bit more expensive

      setPrices({ sedan: sedanPrice, suv: suvPrice });
      setShowPrices(true);
    }
  };
  useEffect(() => {
    if (pickupLocation && dropOffLocation) {
      calculatePrices();
    }
  }, [dropOffLocation]);

  const router = useRouter();

const handleClick = (path) => {
  router.push(path);
};



  const navItems = [
    { label: "Home", direct: true },
    { label: "Book a Ride",  direct: "/book-a-ride"},
    { label: "What We Offer", mega: true },
    { label: "Pricing", mega: true },
    { label: "Drivers", mega: true },
    { label: "Corporate Accounts", mega: true },
    { label: "Help & FAQs", mega: true },
    { label: "Contact", mega: true },
  ];

  const megaMenuData = {
    "What We Offer": [
      {
        heading: "Vehicles",
        links: [
          "Next Available",
          "Sedan",
          "SUV",
          "Maxi",
          "Cargo",
          "NDIS Transport",
        ],
      },
      {
        heading: "Special Services",
        links: [
          "Airport Shuttle",
          "NDIS Support Service",
          "Parcel Delivery Service",
          "Events & Weddings Service",
          "Corporate Travel Service",
          "Sydney Taxi Tourist Tour",
        ],
      },
    ],
    Pricing: [
      {
        heading: "",
        links: ["Fare Estimator", "TTSS Subsidy Scheme"],
      },
    ],
    Drivers: [
      {
        heading: "",
        links: ["Why Drive with Us", "Become a Driver"],
      },
    ],
    "Corporate Accounts": [
      {
        heading: "",
        links: ["Business Accounts", "Event Transfers", "Airport Shuttles"],
      },
    ],

    "Help & FAQs": [
      {
        heading: "",
        links: [
          "Booking Help",
          "Payment Questions",
          "Accessibility Information",
        ],
      },
    ],
    Contact: [
      {
        heading: "",
        links: ["Customer Support", "Driver Support"],
      },
    ],
  };

  const [drawerVisible, setDrawerVisible] = useState(false);

  const closeDrawer = () => setDrawerVisible(false);

  const [activeMenu, setActiveMenu] = useState(null);




  return (
    <div className="items-center ">
      <div className="relative">
        <div className="items-center ">
          <div className="relative">
            <Header />
            <Drawer
              title={
                <img
                  src="/assets/images/logo.png"
                  alt="Logo"
                  className="h-10"
                />
              }
              placement="right"
              onClose={closeDrawer}
              open={drawerVisible}
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div key={item.label} onClick={() => handleClick(item.direct)}>
                    {item.label}
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() =>
                        item.mega ? toggleMenu(item.label) : closeDrawer()
                      }
                    >
                      <span className="text-base font-medium">
                        {item.label}
                      </span>
                      {item.mega && <DownOutlined />}
                    </div>
                    {item.mega && activeMenu === item.label && (
                      <div className="ml-4 mt-2 space-y-2">
                        {megaMenuData[item.label].map((col, idx) => (
                          <div key={idx}>
                            {col.heading && (
                              <div className="text-sm font-semibold">
                                {col.heading}
                              </div>
                            )}
                            <div className="ml-2 space-y-1">
                              {col.links.map((link) => (
                                <a
                                  key={link}
                                  href="#"
                                  className="block text-sm text-gray-600"
                                >
                                  {link}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Drawer>
          </div>
        </div>

        <div className="secttion-one text-white min-h-screen w-full overflow-hidden pt-[50px]">
          <div className="flex justify-center w-full px-4">
            <div className="bg-[#ffffff] my-10 w-full max-w-[800px] mt-[110px] h-[75px] flex flex-row sm:flex-row items-center sm:items-start sm:justify-between rounded-tl-[30px] sm:rounded-tl-[50px] rounded-br-[30px] sm:rounded-br-[50px] relative sm:p-6 gap-4">
              <img
                className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] -mt-[30px] sm:mt-[-40px]"
                src="assets/images/Mask Group 2.png"
                alt="icon"
              />

              <div className="flex flex-row sm:flex-row sm:items-center gap-2 sm:ml-[20px] text-center sm:text-left">
                <h1 className="text-[#000] font-bold text-[18px] sm:text-[20px]">
                  Captain Taxi Gift Card!
                </h1>
                <img
                  src="assets/images/car icon.svg"
                  alt="icon"
                  className="mx-auto sm:mx-0"
                />
              </div>

              <button className="text-[#4109eb] text-[14px] sm:text-[15px] font-medium mt-2 sm:mt-0">
                Find out more
              </button>
            </div>
          </div>{" "}
          <div className="flex flex-col lg:flex-row justify-between max-w-full px-4 items-center">
            {/* This div will be hidden on mobile screens */}
            <div className="hidden md:block pt-[80px] pl-[20px] lg:pl-[80px] md:w-1/2">
              <div className="text-left animate-fade-in-up mt-[-150px]">
                <h1 className="font-medium text-[28px] md:text-[32px] lg:text-[42px] leading-tight text-white drop-shadow-lg mb-2 tracking-wide">
                  Your ride, your way
                  <span className="text-[#a8a8a8]">-anytime</span>
                </h1>
                <h1 className="font-extrabold text-[30px] md:text-[34px] lg:text-[44px] text-white drop-shadow-lg ml-[20px] md:ml-[40px] lg:ml-[60px] mb-4 tracking-wide bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent">
                  Anywhere in Australia.
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-white italic drop-shadow-md font-light max-w-xl mt-4 leading-relaxed">
                  Fast, reliable taxi bookings in Sydney today, expanding
                  nationwide tomorrow.
                </p>
              </div>

            </div>

            <div className="text-center Consults !m-[15px] md:!m-[30px] w-full md:w-auto max-w-full overflow-visible">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                Book A Taxi
              </h2>
              <div className="w-full md:w-[300px] lg:w-[350px] mx-auto max-w-[95%]">
                <div className="mb-4 w-full">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Pickup Location"
                      className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="mb-6 w-full">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Drop Off Location"
                      className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>


                <button className="w-full py-3 font-bold text-white bg-gradient-to-r from-purple-800 to-purple-900 rounded-full hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                  Book A Ride
                </button>
              </div>
            </div>

          </div>
          <div className=" flex item-center justify-center p-[20px]   ">

            <div className=" justify-between flex  items-center w-[70%] gradient bg-white rounded-2xl p-[20px]">
              <p className="text-white font-bold text-[30px] ml-[30px]">Start your journey</p>
             <div className="flex gap-[10px]">
              
              <button

                className="relative cursor-pointer flex items-center justify-between bg-[#4d2d7c] text-black font-bold py-3 px-6 rounded-full overflow-hidden " >
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#4d2d7c] rounded-l-full"></div>
                <span className="mx-auto pl-4 text-white">Book Now</span>
                <div className="flex items-center justify-center bg-white rounded-full w-7 h-7 ml-4">
                  <ArrowRightOutlined className="w-4 h-4 text-[#1e2b69]" />
                </div>
              </button>
              <button

                className={`relative cursor-pointer flex items-center justify-between   py-3 px-6 border-2 border-purple-900  text-black font-bold  rounded-full overflow-hidden `} >

                <span className="mx-auto pl-4 text-[#4d2d7c]">Drive with us</span>
                <div className="flex items-center justify-center bg-[#4d2d7c] rounded-full w-7 h-7 ml-4">
                  <ArrowRightOutlined className="w-4 h-4 !text-[#fff]" />
                </div>
              </button>
             </div>

            </div>


          </div>
        </div>

        <CustomerBenefits />
        <HowItWorks />

        <ServicesCarousel />

        <DriveWithUs />

        <Testimonials />

        <AppPromotion />

        <div className="p-4">
          <div className="bg-[#4D2D7C] text-white p-6 md:p-10 flex flex-col text-center rounded-tl-[40px] md:rounded-tl-[70px] rounded-[10px]">
            <h1 className="font-bold text-[18px] md:text-[20px]">
              We’re here to help you.
            </h1>
            <p className="text-[13px] md:text-[14px] mt-2 md:mt-4">
              We’re here to help you every step of the way. Whether you have
              questions, need assistance, or require support, our dedicated team
              is ready to provide the solutions you need. Your satisfaction is
              our priority, and we’re committed to ensuring you have a smooth
              and positive experience.
            </p>
            <ul className="flex flex-col sm:flex-row justify-center items-center text-center gap-3 sm:gap-[40px] mt-4 font-bold">
              <li className="list-disc">24/7 Customer</li>
              <li className="list-disc">Personalised Service</li>
              <li className="list-disc">Trained Professionals</li>
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
