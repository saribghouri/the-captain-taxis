"use client";
import { Row, Col, Card, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
const App = () => {
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

  return (
    <div className="items-center min-h-screen">
      <div className="relative">

        <div className="fixed top-0 left-0 w-full items-center opacity-80 bg-[#8e95ff] header flex justify-between p-[20px] z-50">
          <div> <img
            className=" w-[90px]"
            src="assets/images/logo.png"
            alt="icon"
          /></div>
          <div className="flex gap-5 text-white">
            <a>Home</a>
            <a>Services</a>
            <a>Vehicles</a>
            <a>About Us</a>
            <a>Contact Us</a>
          </div>
          <div>
            <Button>Customer Support</Button>
          </div>
        </div>


        <div className="secttion-one text-white mt-[70px]">
          <div className="flex justify-center w-full ">
            <div className="bg-[#e3e1e1] m-[50px]  w-[70%] flex rounded-tl-[50px] rounded-br-[50px] relative">
              <img
                className="w-[90px] h-[90px] -mt-[30px] ml-[30px]"
                src="assets/images/Mask Group 2.png"
                alt="icon"
              />
              <div className="flex w-full items-center gap-2 ml-[80px]">
                <h1 className="text-[#000] font-bold text-[20px]">Caption Taxi Gift Card! </h1>
                <img
                  className=""
                  src="assets/images/car icon.svg"
                  alt="icon"
                />
              </div>
              <Button className=" !bg-transparent mr-[20px] mt-[10px] !border-none !text-[15px] !font-medium !text-[#4109eb]">Find out more</Button>
            </div>
          </div>
          <div className="pt-[80px] pl-[80px]">
            <h1 className=" font-medium text-[25px]">WELCOME TO THE</h1>
            <h1 className=" font-bold text-[25px] ml-[80px]">CAPTAIN TAXIS</h1>
            <p>
              Reliable and Inclusive: The Captain Taxis - Your Trusted
              Transport!
            </p>
            <Button className=" !rounded-3xl mt-[30px] !text-[#851fea] !font-medium">
              Book A Ride
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center mt-[40px] mb-[20px] w-full justify-center">
          <h1 className="' font-bold text-[30px]">OUR SERVICES</h1>
          <p>We are Always There at Your Services</p>
        </div>


        <div className="relative w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 px-4 py-6 overflow-x-auto pointer-events-none scroll-smooth no-scrollbar"
          >
            {[1, 2, 3,].map((item, index) => {

              const content = [
                {
                  title: <h1 className="text-center text-[25px] font-bold ">
                    Events & Weddings Service
                  </h1>,

                  description: <p className="flex items-center text-center "> Make your special events unforgettable with our premier taxi service!
                    Arrive in style with our elegant, well-maintained vehicles and professional chauffeurs.
                    From bridal party transport to guest shuttles, we ensureconvenience and sophistication.
                    Let us handle the details while you enjoy your celebration!</p>,
                },
                {
                  title: <h1 className="text-center text-[25px] font-bold ">Sydney Taxi Tourist Tour</h1>,

                  description: <p className="flex items-center text-center ">Explore Sydney with our Tourist Taxi Service! Ride
                    in comfort to iconic spots like the Opera House and Bondi Beach. Enjoy
                    personalized tours, stunning views, and a seamless experience.
                    Let us make your
                    Sydney journey unforgettable!</p>,
                },
                {
                  title: <h1 className="text-center text-[25px] font-bold ">Parcel Service</h1>,

                  description: <p className="flex items-center text-center "> "Introducing our Taxi Parcel Delivery Service! Enjoy swift, secure, and
                    reliable package transportation. Our trusted drivers ensure timely deliveries with
                    real-time tracking. Say
                    goodbye to delays—choose us for hassle-free courier solutions!</p>,
                },

              ];

              const current = content[index] || {};

              return (
                <Card
                  key={item}
                  variant="borderless"
                  className="w-[35%] flex-shrink-0 pointer-events-auto"
                  cover={
                    <img
                      alt={`Card ${item}`}
                      src={
                        item === 1
                          ? "/assets/images/wedding service.png"
                          : item === 2
                            ? "/assets/images/service.png"
                            : item === 3
                              ? "/assets/images/parcel.png"
                              : `/assets/images/car${item}.jpg`
                      }
                      className="h-[200px] object-cover"
                    />
                  }
                >
                  <div className="flex flex-col space-y-2">
                    <h2 className="text-lg font-bold text-[#4D2D7C]">{current.title}</h2>
                    <h3 className="text-sm font-semibold text-gray-600">{current.subtitle}</h3>
                    <p className="text-[10px] font-semibold text-[#706e6e]">{current.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>



          <div className="flex justify-center">
            <Button
              shape="circle"
              icon={<LeftOutlined />}
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10"
            />
            <Button
              shape="circle"
              icon={<RightOutlined />}
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-10"
            />
          </div>
        </div>
        <div className=" w-full justify-center items-center mt-[20px]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-extrabold text-[40px]">GET OUR APP </h1>
            <h1 className="font-bold text-[30px] text-[#4D2D7C]">GO YOUR WAY</h1>
          </div>


        </div>
        <div className="flex justify-between w-full  mt-[50px] gap-20">

          <div>
            <img
              className="  "
              src="assets/images/Get our service.png"
              alt="icon"
            />
          </div>
          <div className="">
            <p className="w-[70%] leading-8 font-medium text-[#727272]">The Captain Taxis is your go-to transportation
              service offering a range of
              specialized services tailored to meet your diverse
              needs. We know how hectic it can be when you’re in a hurry
              to reach your destination. That’s why we’ve chosen skilled
              drivers who appreciate the importance of being punctual,
              providing a comfortable ride, and driving responsibly. We take
              pride in their outstanding professionalism, making your journey with
              The Captain Taxis reliable and trustworthy. Choose The Captain Taxis
              for more than just affordable rides – experience the reliability of a family.</p>
            <div className=" flex items-center mt-[20px] ">
              <img
                className="w-[20%] h-[20%] "
                src="assets/images/google play.png"
                alt="icon"
              />
              <img
                className="w-[20%] !h-[44px]  "
                src="assets/images/app store.png"
                alt="icon"
              />
            </div>
          </div>

        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className="text-center mt-[70px]">
            <h1 className="text-[#646464] font-bold text-[12px]">CATEGORY</h1>
            <h1 className=" text-[26px] font-extrabold">The Caption Taxis 13Cabs Accepts <br></br>Cabcharge</h1>
          </div>
          <div className=" flex gap-[20px] mt-[40px]">
            <div>
              <Card className="!border-none"
                hoverable
                style={{ width: 180 }}

              >
                <div className=" p-[10px] flex justify-center">
                  <img className="w-[50px]" alt="example" src="assets/images/gift card.svg" />

                </div>
                <div className="flex flex-col text-center">
                  <h1 className=" text-[#35344d] font-bold">Giftcard</h1>
                  <p className="text-[#7c7c7c] text-[12px]">Giftcard: The perfect, flexible gift choice.</p>
                </div>
              </Card>
            </div>
            <div>
              <Card className="!border-none"
                hoverable
                style={{ width: 180 }}

              >
                <div className=" p-[10px] flex justify-center">
                  <img className="w-[50px]" alt="example" src="assets/images/fastcard.svg" />

                </div>
                <div className="flex flex-col text-center">
                  <h1 className=" text-[#35344d] font-bold">Fastcard</h1>
                  <p className="text-[#7c7c7c] text-[12px]">Fastcard: Quick, secure, and seamless payments.</p>
                </div>
              </Card>
            </div>
            <div>
              <Card className="!border-none"
                hoverable
                style={{ width: 180 }}

              >
                <div className=" p-[10px] flex justify-center">
                  <img className="w-[50px]" alt="example" src="assets/images/digital. pass.png" />

                </div>
                <div className="flex flex-col text-center">
                  <h1 className=" text-[#35344d] font-bold">Digital Pass</h1>
                  <p className="text-[#7c7c7c] text-[12px]">Digital Pass: Instant, secure access on your phone.</p>
                </div>
              </Card>
            </div>
            <div>
              <Card className="!border-none"
                hoverable
                style={{ width: 180 }}

              >
                <div className=" p-[10px] flex justify-center">
                  <img className="w-[50px]" alt="example" src="assets/images/e ticket.svg" />

                </div>
                <div className="flex flex-col text-center">
                  <h1 className=" text-[#35344d] font-bold">eTicket</h1>
                  <p className="text-[#7c7c7c] text-[12px]">eTicket: Secure, digital access made easy.</p>
                </div>
              </Card>
            </div>
          </div>

        </div>
        <div className="p-[20px] ">
          <div className="bg-[#4D2D7C] text-[#fff] p-[40px] flex flex-col text-center rounded-tl-[70px] rounded-[10px] ">
            <h1 className="font-bold text-[20px]">We’re here to help you.</h1>
            <p className="text-[13px] mt-[10px]">We’re here to help you every step of the way. Whether you have questions, need assistance, or require support, our dedicated team is ready to provide the solutions you need. Your satisfaction is our priority, and we’re committed to ensuring you have a smooth and positive experience.”</p>
          <ul className=" flex justify-center text-center gap-[40px] mt-[20px] font-bold">
            <li className=" list-disc">24/7 customer </li>
            <li className=" list-disc">Personalised service</li>
            <li className=" list-disc">Trained Professionals</li>
          </ul>
          </div>

        </div>
         <footer className="bg-[#ece7ff] text-black px-6 py-10 rounded-tl-[30px] rounded-tr-[30px]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-2">
      
         <div>

           <img
                  className=" w-[800px]"
                  src="assets/images/Logo1.png"
                  alt="icon"
                />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Book a Ride</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Fare Estimator</a></li>
            <li><a href="#" className="hover:underline">TTSS</a></li>
            <li><a href="#" className="hover:underline">Join Fleet</a></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Legal</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Accessibility</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
          <p className="text-sm mb-2">📞 Phone: 13 2227 (24/7)</p>
          <p className="text-sm mb-4">📧 Email: <a href="mailto:support@thecaptaintaxis.com.au" className="underline">support@thecaptaintaxis.com.au</a></p>
          <div className="flex space-x-4 mt-2 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-[#4267B2]"><FacebookFilled /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500"><InstagramFilled /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#0077B5]"><LinkedinFilled /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 bg-[#4D2D7C] rounded-[50px] items-center text-sm border-t border-gray-700 p-[20px] text-gray-100">
        &copy; {new Date().getFullYear()} The Captain Taxis. All rights reserved.
      </div>
    </footer>
      </div>
    </div>
  );
};

export default App;
