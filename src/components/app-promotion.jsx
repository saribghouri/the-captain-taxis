"use client"
import { MobileOutlined, CheckOutlined } from "@ant-design/icons"

const AppPromotion = () => {
  const features = [
    "Book rides in seconds",
    "Track your driver in real-time",
    "Save favorite destinations",
    "Access TTSS subsidies easily",
    "View ride history and receipts",
  ]

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#4D2D7C] opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4D2D7C] opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column - Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="mb-8">
              <div className="inline-block bg-[#4D2D7C] bg-opacity-10 px-4 py-2 rounded-full mb-4">
                <div className="flex items-center">
                  <MobileOutlined className="text-[#ffffff] mr-2" />
                  <span className="text-[#ffffff] font-medium">Mobile App</span>
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2 leading-tight">GET OUR APP</h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#4D2D7C] mb-6">GO YOUR WAY</h3>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              The Captain Taxis is your go-to transportation service offering a range of specialized services tailored
              to meet your diverse needs. We know how hectic it can be when you're in a hurry to reach your destination.
              That's why we've chosen skilled drivers who appreciate the importance of being punctual, providing a
              comfortable ride, and driving responsibly.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">With our app, you can:</h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#4D2D7C] bg-opacity-10 flex items-center justify-center mr-3">
                      <CheckOutlined className="text-[#ffffff] text-sm" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#download-android" className="group transform transition-all duration-300 hover:scale-105">
                <div className="bg-black text-white rounded-xl px-6 py-3 flex items-center shadow-md group-hover:shadow-lg">
                  <div className="mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.9 5c-.7.4-1.9 1-3.3 1.5-2.7 1.1-5.4 1.5-5.4 1.5-.5.1-1.4.3-2.2.5-1.3.4-2.4.9-3 1.4-.6.5-.9 1-.9 1.5 0 .6.3 1.1.9 1.6.6.5 1.6 1 3 1.4.8.2 1.7.4 2.2.5 0 0 2.7.4 5.4 1.5 1.4.6 2.6 1.1 3.3 1.5.2.1.4.2.5.3.5.3.8.7.8 1.2 0 .2 0 .4-.1.6-.1.2-.3.4-.5.6-.2.2-.5.3-.8.4-.3.1-.7.1-1 .1-.5 0-1.1-.1-1.6-.4-.5-.2-1-.5-1.5-.9-.5-.4-1-.8-1.4-1.3-.4-.5-.8-1-1.1-1.5-.3-.5-.5-1-.7-1.5-.2-.5-.3-1-.3-1.4 0-.5.1-1 .3-1.4.2-.5.4-1 .7-1.5.3-.5.7-1 1.1-1.5.4-.5.9-.9 1.4-1.3.5-.4 1-.7 1.5-.9.5-.2 1.1-.4 1.6-.4.4 0 .7 0 1 .1.3.1.6.2.8.4.2.2.4.4.5.6.1.2.1.4.1.6 0 .5-.3.9-.8 1.2-.1.1-.3.2-.5.3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </a>

              <a href="#download-ios" className="group transform transition-all duration-300 hover:scale-105">
                <div className="bg-black text-white rounded-xl px-6 py-3 flex items-center shadow-md group-hover:shadow-lg">
                  <div className="mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.3 5.1c-1.2.7-2 1.9-2.3 3.2-.2 1.3.1 2.7.9 3.7 1.2 1.5 2.9 1.5 4.1 0 .5-.6.8-1.4.9-2.2.1-.8-.1-1.6-.5-2.3-.4-.7-1-1.2-1.7-1.6-.5-.3-1-.5-1.4-.8zm-4.5 14.8c.4 0 .7-.1 1.1-.2.3-.1.7-.3 1-.5.3-.2.6-.5.9-.8.3-.3.5-.6.7-1 .2-.4.3-.8.4-1.2.1-.4.1-.9 0-1.3-.1-.4-.2-.9-.4-1.3-.2-.4-.5-.8-.8-1.1-.3-.3-.7-.6-1.1-.8-.4-.2-.8-.3-1.3-.4-.4-.1-.9 0-1.3.1-.4.1-.8.3-1.2.6-.3.3-.6.6-.9 1-.2.4-.4.8-.5 1.2-.1.4-.1.9 0 1.3.1.4.2.9.4 1.2.2.4.5.7.8 1 .3.3.7.5 1.1.7.4.2.8.3 1.2.4.3.1.6.1.9.1z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">DOWNLOAD ON THE</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - App Image */}
          <div className="w-full md:w-1/2 order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-[#4D2D7C] opacity-5 rounded-full transform scale-90 blur-xl"></div>
            <div className="relative z-10 flex justify-center">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#DFBA3F] opacity-10 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#DFBA3F] opacity-10 rounded-full"></div>
                <img
                  className="max-w-full h-auto rounded-2xl shadow-2xl transform rotate-1"
                  src="assets/images/Get our service.png"
                  alt="The Captain Taxis Mobile App"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppPromotion
