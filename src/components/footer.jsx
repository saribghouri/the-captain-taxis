"use client"
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  PhoneOutlined,
  MailOutlined,
  RightOutlined,
} from "@ant-design/icons"

const Footer = () => {
  return (
    <footer className="relative bg-white text-gray-700 pt-20 pb-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4D2D7C] via-[#4D2D7C] to-[#4D2D7C]"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#4D2D7C] opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4D2D7C] opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mb-16">
          {/* Logo and About Column */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img className="w-full max-w-[200px]" src="assets/images/Logo1.png" alt="The Captain Taxis Logo" />
            </div>
            <p className="text-gray-600 mb-6 pr-4">
              Your trusted transportation partner offering professional, reliable service for all your travel needs.
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#4D2D7C] bg-opacity-10 flex items-center justify-center text-[#ffffff] hover:bg-[#4D2D7C] hover:text-white transition-all duration-300"
              >
                <FacebookFilled />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#4D2D7C] bg-opacity-10 flex items-center justify-center text-[#ffffff] hover:bg-[#4D2D7C] hover:text-white transition-all duration-300"
              >
                <InstagramFilled />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#4D2D7C] bg-opacity-10 flex items-center justify-center text-[#ffffff] hover:bg-[#4D2D7C] hover:text-white transition-all duration-300"
              >
                <LinkedinFilled />
              </a>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#4D2D7C] bg-opacity-10 flex items-center justify-center text-[#ffffff]">
                <PhoneOutlined />
              </div>
              <span className="text-gray-700 font-medium">13 2227 (24/7)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#4D2D7C] bg-opacity-10 flex items-center justify-center text-[#ffffff]">
                <MailOutlined />
              </div>
              <a
                href="mailto:support@thecaptaintaxis.com.au"
                className="text-gray-700 font-medium hover:text-[#4D2D7C] transition-colors"
              >
                support@thecaptaintaxis.com.au
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-bold mb-6 text-gray-900 relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-[#4D2D7C]"></span>
            </h2>
            <ul className="space-y-3">
              {["Home", "Book a Ride", "Services", "Fare Estimator", "TTSS", "Join Fleet"].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#4D2D7C] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-2 bg-[#4D2D7C] rounded-full mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-bold mb-6 text-gray-900 relative">
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-[#4D2D7C]"></span>
            </h2>
            <ul className="space-y-3">
              {["About Us", "Contact"].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#4D2D7C] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-2 bg-[#4D2D7C] rounded-full mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-bold mb-6 text-gray-900 relative">
              <span className="relative z-10">Legal</span>
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-[#4D2D7C]"></span>
            </h2>
            <ul className="space-y-3">
              {["Terms & Conditions", "Privacy Policy", "Accessibility"].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#4D2D7C] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-2 bg-[#4D2D7C] rounded-full mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-bold mb-6 text-gray-900 relative">
              <span className="relative z-10">Newsletter</span>
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-[#4D2D7C]"></span>
            </h2>
            <p className="text-gray-600 mb-4">Subscribe for updates and special offers.</p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D2D7C] focus:border-transparent"
              />
              <button className="bg-[#4D2D7C] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center">
                Subscribe <RightOutlined className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-gray-100 pt-10 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Download Our App</h3>
              <p className="text-gray-600 mb-4">Get the best experience on our mobile app</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="transform transition-transform hover:scale-105">
                <img src="assets/images/google play.png" alt="Google Play" className="h-12 w-auto object-contain" />
              </a>
              <a href="#" className="transform transition-transform hover:scale-105">
                <img src="assets/images/app store.png" alt="App Store" className="h-12 w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="bg-[#4D2D7C] text-white py-4 px-8 rounded-full inline-block relative shadow-md">
            &copy; {new Date().getFullYear()} The Captain Taxis. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
