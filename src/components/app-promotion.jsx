"use client";

const AppPromotion = () => {
  const features = [
    "Book Rides In Seconds",
    "Track Your Driver In Real-Time",
    "Save Favorite Destinations",
    "Access Ttss Subsidies Easily",
    "View Ride History And Receipts",
  ];

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="assets/images/background 4.svg"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 via-transparent to-purple-50/20"></div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-300 opacity-15 rounded-full transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-100 opacity-20 rounded-full transform translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-200 opacity-10 rounded-full"></div>

        <div className="absolute top-1/3 left-1/3 w-32 h-32 border border-purple-200 opacity-20 rounded-lg transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-purple-300 opacity-15 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-400 opacity-5 rounded-3xl blur-3xl transform scale-110"></div>
              <div className="absolute inset-0 bg-white opacity-30 rounded-2xl blur-xl"></div>
              <img
                src="assets/images/mobile.png"
                alt="Captain Taxis Mobile App Screenshots"
                className="relative z-10 max-w-full h-auto opacity-90 drop-shadow-2xl"
              />
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-purple-300 opacity-20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-400 opacity-15 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-6xl sm:text-4xl lg:text-4xl text-[#4d2d7c] mb-2 leading-tight drop-shadow-sm">
                Get Our App
              </h2>
              <h3 className="text-2xl sm:text-[18px] text-[#4d2d7c] mb-6">
                Go Your Way
              </h3>
            </div>

            <p className="text-[#3b2065] text-[14px]  mb-8 backdrop-blur-sm">
              The Captain Taxis Is Your Go-To Transportation Service Offering A
              Range Of Specialized Services Tailored To Meet Your Diverse Needs.
              We Know How Hectic It Can Be When You're In A Hurry To Reach Your
              Destination. That's Why We've Chosen Skilled Drivers Who
              Appreciate The Importance Of Being Punctual, Providing A
              Comfortable Ride, And Driving Responsibly.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-[#271347] mb-6">
                With Our App, You Can:
              </h4>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#4d2d7c] mr-4 flex-shrink-0 shadow-sm"></div>
                    <span className="text-[#3b2065] font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <p className="text-gray-800 font-semibold mb-4">
                Discover our app
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#download-android"
                className="group transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="bg-black text-white rounded-lg px-4 py-3 flex items-center shadow-lg group-hover:shadow-xl min-w-[160px] backdrop-blur-sm">
                  <div className="mr-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </a>

              <a
                href="#download-ios"
                className="group transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="bg-black text-white rounded-lg px-4 py-3 flex items-center shadow-lg group-hover:shadow-xl min-w-[160px] backdrop-blur-sm">
                  <div className="mr-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">DOWNLOAD ON THE</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;
