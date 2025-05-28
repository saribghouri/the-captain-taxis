"use client"
import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-3">
            <div className="mb-6">
              <img
                className="w-full max-w-[200px]"
                src="assets/images/Logo1.png"
                alt="The Captain Taxis Logo"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Book your trip in minute, <br></br>get full
               control for much<br></br> longer.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-gray-800 mb-6 capitalize tracking-wide">CONTACTS</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 font-bold  transition-colors text-[15px]">541a Burwood Road,</p>
                <p className="text-gray-600  font-bold  transition-colors text-[15px]">Belmore NSW 2192</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#4D2D7C]" />
                <span className="text-gray-700 font-extrabold">0420 966 387</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#4D2D7C]" />
                <a
                  href="mailto:info@thecaptaintaxis.com.au"
                  className="text-gray-700 font-extrabold hover:text-[#4D2D7C] transition-colors"
                >
                  info@thecaptaintaxis.com.au
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-6 capitalize tracking-wide">Quick Links</h3>
            <ul className="space-y-3 font-bold">
              {["Home", "Join as a Driver", "Vehicle", "Services"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-800 text-[15px] hover:text-[#4D2D7C] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Center */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-6 capitalize tracking-wide">Support Center</h3>
            <ul className="space-y-3 font-bold">
              {["Legal Policy/Terms", "Contact Us", "About Us", "Additional Links"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-800 text-[15px] hover:text-[#4D2D7C] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media and App Download */}
          <div className="lg:col-span-2">
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#4D2D7C] hover:text-white transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#4D2D7C] hover:text-white transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#4D2D7C] hover:text-white transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[#4D2D7C] mb-3">Discover our app</h4>
              <div className="space-y-2 flex items-center">
                <a href="#" className="block">
                  <img src="assets/images/app store.png" alt="Get it on Google Play" className="h-6  w-auto" />
                </a>
                <a href="#" className="block mt-[-8px]">
                  <img src="assets/images/google play.png" alt="Download on App Store" className="h-8.5 rounded-[50px] w-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center">
            <p className="text-[#8053c4]  text-sm font-bold">
              Copyright © {new Date().getFullYear()} The Captain Taxis | All rights
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
