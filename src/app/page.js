"use client";
import { Row, Col, Card, Button, Drawer } from "antd";
import { LeftOutlined, MenuOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Modal, Input,  } from "antd";
import Slider from "react-slick";
import { EnvironmentOutlined, AimOutlined, CarOutlined   , UserOutlined, AppstoreAddOutlined, DollarOutlined } from "@ant-design/icons";
const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  const scrollRef = useRef(null);
  const { Meta } = Card;
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  const benefits = [
    {
      icon: <DollarOutlined className="text-3xl text-purple-700" />,
      title: "Fixed Fares. No Surge.",
      description: "Always know what you’ll pay—no surprises.",
    },
    {
      icon: <UserOutlined className="text-3xl text-purple-700" />,
      title: "Professional Drivers.",
      description: "Fully trained, uniformed & NDIS-accredited.",
    },
    {
      icon: <AppstoreAddOutlined className="text-3xl text-purple-700" />,
      title: "Any Vehicle, Any Need.",
      description: "Sedan, SUV, Maxi, Cargo or Wheelchair-Accessible.",
    },
    {
      icon: <CarOutlined className="text-3xl text-purple-700" />,
      title: "TTSS Subsidy.",
      description: "NSW residents save 50% (up to $60 per trip).",
    },
  ];
  const navItems = [
    { label: 'Home', direct: true },
    { label: 'Book a Ride', direct: true },
    { label: 'What We Offer', mega: true },
    { label: 'Pricing', mega: true },
    { label: 'Drivers', mega: true },
    { label: 'Corporate Accounts', mega: true },
    { label: 'Help & FAQs', mega: true },
    { label: 'Contact', mega: true },
  ];
  
  const megaMenuData = {
    'What We Offer': [
      {
        heading: 'Vehicles',
        links: ['Next Available', 'Sedan', 'SUV', 'Maxi', 'Cargo', 'NDIS Transport'],
      },
      {
        heading: 'Special Services',
        links: [
          'Airport Shuttle',
          'NDIS Support Service',
          'Parcel Delivery Service',
          'Events & Weddings Service',
          'Corporate Travel Service',
          'Sydney Taxi Tourist Tour',
        ],
      },
    ],
    Pricing: [
      {
        heading: '',
        links: ['Fare Estimator', 'TTSS Subsidy Scheme'],
      },
    ],
    Drivers: [
      {
        heading: '',
        links: ['Why Drive with Us', 'Become a Driver'],
      },
    ],
    'Corporate Accounts': [
      {
        heading: '',
        links: ['Business Accounts', 'Event Transfers', 'Airport Shuttles'],
      },
    ],
    'Help & FAQs': [
      {
        heading: '',
        links: ['Booking Help', 'Payment Questions', 'Accessibility Information'],
      },
    ],
    Contact: [
      {
        heading: '',
        links: ['Customer Support', 'Driver Support'],
      },
    ],
  };
  
  const steps = [
    {
      step: "Step 1: Estimate Your Fare",
      description: "Enter pickup & drop-off; get an instant quote.",
    },
    {
      step: "Step 2: Select Your Service",
      description: "Next Available, Sedan, SUV, Maxi, Cargo or NDIS.",
    },
    {
      step: "Step 3: Ride or Reserve",
      description: "Book now or schedule later; pay in-app or in-taxi.",
    },
  ];
  const services = [
    {
      title: "Next Available",
      description: "Quickest possible pick-up.",
      image: "/assets/images/next.png",
    },
    {
      title: "Sedan",
      description: "Comfort for 1–4 passengers.",
      image: "/assets/images/3bdbc452ce1ae8e6cb763ecb5ae315eb.avif",
    },
    {
      title: "SUV",
      description: "Extra legroom & luggage space.",
      image: "/assets/images/4629696636792d6a8674e7523516243_900_600-f.jpg",
    },
    {
      title: "Maxi",
      description: "Groups up to 11.",
      image: "/assets/images/mercedes-sprinter-mini-bus.jpg",
    },
    {
      title: "Cargo",
      description: "Door-to-door bulky item transport.",
      image: "/assets/images/e881c42f-8760-5c9d-8c0b-fc851be50000.avif",
    },
    {
      title: "NDIS Transport",
      description: "Wheelchair-accessible trips with TTSS support.",
      image: "/assets/images/man-using-disabled-parking-spot-1024x576.png",
    },
  ];

  const [drawerVisible, setDrawerVisible] = useState(false);
  

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);



 

    const [activeMenu, setActiveMenu] = useState(null);
  
    const toggleMenus = (item ) => {
      setActiveMenu(activeMenu === item ? null : item);
    };
    const testimonials = [
      {
        quote: "Booked in seconds, arrived on time—no hidden fees!",
        name: "Emma, Sydney",
      },
      {
        quote: "My go-to taxi for reliable rides.",
        name: "Liam, Melbourne",
      },
      {
        quote: "Excellent service with professional drivers.",
        name: "Olivia, Brisbane",
      },
      {
        quote: "Comfortable ride and great customer support.",
        name: "Noah, Adelaide",
      },
    ];
    
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 600,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      swipe: true,
      arrows: false,
    };
  return (
    <div className="items-center ">
      <div className="relative">

      <div className="items-center ">
      <div className="relative">
        <div className="header-container">
          <div className="top-bar flex justify-between items-center px-4 py-2">
            <img src="/assets/images/logo.png" alt="Logo" className="logo h-10" />

            {/* Desktop Navigation */}
            <div className="nav-items hidden md:flex space-x-6">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="nav-link relative"
                  onMouseEnter={() => item.mega && toggleMenus(item.label)}
                  onMouseLeave={() => item.mega && toggleMenus(null)}
                >
                  <a href="#">{item.label}</a>
                  {item.mega && (
                    <DownOutlined
                      style={{ fontSize: "15px", marginLeft: 6, fontWeight: 600 }}
                    />
                  )}
                  {activeMenu === item.label && (
                    <div className="absolute top-full left-0 bg-white shadow-lg p-4 z-10 flex">
                      {megaMenuData[item.label].map((col, idx) => (
                        <div className="mega-column mr-8" key={idx}>
                          {col.heading && <div className="font-bold mb-2">{col.heading}</div>}
                          {col.links.map((link) => (
                            <a key={link} href="#" className="block text-gray-700 py-1">
                              {link}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden block" onClick={showDrawer}>
              <MenuOutlined style={{ fontSize: "24px" }} />
            </div>

            <div className="utility-links hidden md:block">
              <a className="utility-link">Login / Sign Up</a>
            </div>
          </div>
        </div>

        {/* Drawer for Mobile Menu */}
        <Drawer
          title={<img src="/assets/images/logo.png" alt="Logo" className="h-10" />}
          placement="right"
          onClose={closeDrawer}
          open={drawerVisible}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => item.mega ? toggleMenu(item.label) : closeDrawer()}
                >
                  <span className="text-base font-medium">{item.label}</span>
                  {item.mega && <DownOutlined />}
                </div>
                {item.mega && activeMenu === item.label && (
                  <div className="ml-4 mt-2 space-y-2">
                    {megaMenuData[item.label].map((col, idx) => (
                      <div key={idx}>
                        {col.heading && <div className="text-sm font-semibold">{col.heading}</div>}
                        <div className="ml-2 space-y-1">
                          {col.links.map((link) => (
                            <a key={link} href="#" className="block text-sm text-gray-600">
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

    <div className="secttion-one text-white">
      {/* Top Banner */}
      <div className="flex justify-center w-full px-4">
  <div className="bg-[#e3e1e1] my-10 w-full max-w-[800px] flex flex-col sm:flex-row items-center sm:items-start sm:justify-between rounded-tl-[30px] sm:rounded-tl-[50px] rounded-br-[30px] sm:rounded-br-[50px] relative p-4 sm:p-6 gap-4">
    
    <img
      className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] -mt-[30px] sm:mt-0"
      src="assets/images/Mask Group 2.png"
      alt="icon"
    />
    
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:ml-[20px] text-center sm:text-left">
      <h1 className="text-[#000] font-bold text-[18px] sm:text-[20px]">Caption Taxi Gift Card!</h1>
      <img src="assets/images/car icon.svg" alt="icon" className="mx-auto sm:mx-0" />
    </div>
    
    <button className="text-[#4109eb] text-[14px] sm:text-[15px] font-medium mt-2 sm:mt-0">
      Find out more
    </button>
    
  </div>
</div>
      {/* Text Section */}
      <div className="pt-[80px] pl-[80px]">
        <h1 className="font-medium text-[25px]">WELCOME TO THE</h1>
        <h1 className="font-bold text-[25px] ml-[80px]">CAPTAIN TAXIS</h1>
        <p>Reliable and Inclusive: The Captain Taxis - Your Trusted Transport!</p>
        <button
          onClick={showModal}
          className="rounded-3xl mt-[30px] text-[#851fea] font-medium bg-white px-4 py-2"
        >
          Book A Ride
        </button>
      </div>

      {/* Ant Design Modal */}
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        closable
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className="custom-modal"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Book A Taxi</h2>

          {/* Pickup Input */}
          <Input
            size="large"
            placeholder="Pickup Location"
            prefix={<EnvironmentOutlined />}
            className="mb-4"
          />

          {/* Drop Off Input */}
          <Input
            size="large"
            placeholder="Drop Off Location"
            prefix={<AimOutlined />}
            className="mb-6"
          />

          {/* Book Button */}
          <Button
            type="primary"
            size="large"
            className="w-full bg-gradient-to-r from-purple-800 to-black border-none text-white"
            icon={<CarOutlined />}
          >
            Book A Ride
          </Button>
        </div>
      </Modal>
    </div>
    <div className="px-4 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Key Benefits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {benefits.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                {item.step}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="/booking"
            className="inline-block bg-purple-700 text-white font-medium px-6 py-3 rounded-full hover:bg-purple-800 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
        <div className="flex flex-col items-center mt-[40px] mb-[20px] w-full justify-center">
          <h1 className="' font-bold text-[30px]">OUR SERVICES</h1>
          <p>We are Always There at Your Services</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={service.image}
            alt={service.title}
            className="h-40 w-full md:w-48 object-cover"
          />
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{service.description}</p>
            </div>
            <Button
              href="#"
              className="!text-white p-[12px] text-center !rounded-[50px] font-semibold mt-3 hover:underline text-sm !bg-[#4D2D7C] "
            >
              Book Now →
            </Button>
          </div>
        </div>
      ))}
    </div>
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-16">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Drive with The Captain Taxis</h2>
    <p className="text-lg text-gray-600 mb-10">
      Earn more as a fully-professional taxi driver—no surge, no gimmicks.
    </p>
    <ul className="text-left max-w-2xl mx-auto space-y-3 text-gray-700 text-base mb-10">
      <li className="flex items-start">
        <span className="text-purple-600 font-bold mr-2">•</span> Steady, Guaranteed Earnings (fixed fares, no surge)
      </li>
      <li className="flex items-start">
        <span className="text-purple-600 font-bold mr-2">•</span> Premium, Well-Maintained Cars
      </li>
      <li className="flex items-start">
        <span className="text-purple-600 font-bold mr-2">•</span> Top-Tier Safety & Security (in-car cameras, 24/7 support)
      </li>
      <li className="flex items-start">
        <span className="text-purple-600 font-bold mr-2">•</span> Flexible Scheduling (full- or part-time)
      </li>
      <li className="flex items-start">
        <span className="text-purple-600 font-bold mr-2">•</span> NDIS & Corporate Partnerships (higher-value trips)
      </li>
      <li className="flex items-start">
        <span className="text-purple-600 font-bold mr-2">•</span> Ongoing Training & Driver Support
      </li>
    </ul>
    <a href="/apply-driver">
      <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300">
        Become a Driver
      </button>
    </a>
  </div>
</div>
<div className="bg-white py-16 px-4 sm:px-6 lg:px-16">
    <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">What Our Riders Say</h2>
    <Slider {...sliderSettings}>
      {testimonials.map((t, index) => (
        <div key={index} className="px-4">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700 italic mb-4">“{t.quote}”</p>
            <p className="text-sm font-semibold text-gray-600">– {t.name}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
        <div className=" w-full justify-center items-center mt-[20px]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-extrabold text-[40px]">GET OUR APP </h1>
            <h1 className="font-bold text-[30px] text-[#4D2D7C]">GO YOUR WAY</h1>
          </div>


        </div>
        <div className="flex flex-col md:flex-row justify-between w-full mt-[50px] gap-10 md:gap-20 px-4">
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      className="max-w-full h-auto"
      src="assets/images/Get our service.png"
      alt="icon"
    />
  </div>
  <div className="w-full md:w-1/2">
    <p className="leading-7 md:leading-8 font-medium text-[#727272]">
      The Captain Taxis is your go-to transportation service offering a range of
      specialized services tailored to meet your diverse needs. We know how
      hectic it can be when you’re in a hurry to reach your destination. That’s
      why we’ve chosen skilled drivers who appreciate the importance of being
      punctual, providing a comfortable ride, and driving responsibly. We take
      pride in their outstanding professionalism, making your journey with The
      Captain Taxis reliable and trustworthy. Choose The Captain Taxis for more
      than just affordable rides – experience the reliability of a family.
    </p>
    <div className="flex flex-col sm:flex-row items-start sm:items-center mt-5 gap-3 sm:gap-5">
      <img
        className="w-[140px] h-auto"
        src="assets/images/google play.png"
        alt="Google Play"
      />
      <img
        className="w-[140px] h-[44px]"
        src="assets/images/app store.png"
        alt="App Store"
      />
    </div>
  </div>
</div>
<div className="flex flex-col justify-center items-center px-4">
  <div className="text-center mt-[70px]">
    <h1 className="text-[#646464] font-bold text-[12px]">CATEGORY</h1>
    <h1 className="text-[22px] md:text-[26px] font-extrabold">
      The Captain Taxis 13Cabs Accepts <br className="hidden md:block" /> Cabcharge
    </h1>
  </div>

  <div className="flex flex-wrap justify-center gap-5 mt-[40px]">
    {/* Card 1 */}
    <div className="w-[160px] sm:w-[180px]">
      <Card className="!border-none" hoverable>
        <div className="p-[10px] flex justify-center">
          <img className="w-[50px]" alt="gift card" src="assets/images/gift card.svg" />
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-[#35344d] font-bold">Giftcard</h1>
          <p className="text-[#7c7c7c] text-[12px]">Giftcard: The perfect, flexible gift choice.</p>
        </div>
      </Card>
    </div>

    {/* Card 2 */}
    <div className="w-[160px] sm:w-[180px]">
      <Card className="!border-none" hoverable>
        <div className="p-[10px] flex justify-center">
          <img className="w-[50px]" alt="fastcard" src="assets/images/fastcard.svg" />
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-[#35344d] font-bold">Fastcard</h1>
          <p className="text-[#7c7c7c] text-[12px]">Fastcard: Quick, secure, and seamless payments.</p>
        </div>
      </Card>
    </div>

    {/* Card 3 */}
    <div className="w-[160px] sm:w-[180px]">
      <Card className="!border-none" hoverable>
        <div className="p-[10px] flex justify-center">
          <img className="w-[50px]" alt="digital pass" src="assets/images/digital. pass.png" />
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-[#35344d] font-bold">Digital Pass</h1>
          <p className="text-[#7c7c7c] text-[12px]">Digital Pass: Instant, secure access on your phone.</p>
        </div>
      </Card>
    </div>

    {/* Card 4 */}
    <div className="w-[160px] sm:w-[180px]">
      <Card className="!border-none" hoverable>
        <div className="p-[10px] flex justify-center">
          <img className="w-[50px]" alt="eTicket" src="assets/images/e ticket.svg" />
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-[#35344d] font-bold">eTicket</h1>
          <p className="text-[#7c7c7c] text-[12px]">eTicket: Secure, digital access made easy.</p>
        </div>
      </Card>
    </div>
  </div>
</div>

<div className="p-4">
  <div className="bg-[#4D2D7C] text-white p-6 md:p-10 flex flex-col text-center rounded-tl-[40px] md:rounded-tl-[70px] rounded-[10px]">
    <h1 className="font-bold text-[18px] md:text-[20px]">We’re here to help you.</h1>
    <p className="text-[13px] md:text-[14px] mt-2 md:mt-4">
      We’re here to help you every step of the way. Whether you have questions,
      need assistance, or require support, our dedicated team is ready to provide
      the solutions you need. Your satisfaction is our priority, and we’re committed
      to ensuring you have a smooth and positive experience.
    </p>
    <ul className="flex flex-col sm:flex-row justify-center items-center text-center gap-3 sm:gap-[40px] mt-4 font-bold">
      <li className="list-disc">24/7 Customer</li>
      <li className="list-disc">Personalised Service</li>
      <li className="list-disc">Trained Professionals</li>
    </ul>
  </div>
</div>

      </div>
    </div>
  );
};

export default App;
