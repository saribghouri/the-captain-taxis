import Image from "next/image"

export default function CustomerBenefits() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl  text-[#4b2e83] mb-3">Key Benefits</h2>
        <p className="text-lg text-gray-700">We are Always for Your Benefits</p>
      </div>

      <div className="relative mb-16">
        <div className="absolute top-24 left-0 right-0 hidden md:block">
          <svg viewBox="0 0 1200 100" className="w-full h-12">
            <path
              d="M0,50 C300,10 600,90 900,50 C1200,10 1500,90 1800,50"
              fill="none"
              stroke="#F3F4F6"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-[#4b2e83] flex items-center justify-center mb-6">
              <img src="assets/images/Fixed.svg" alt="" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fixed Fares. No Surge</h3>
            <p className="text-center text-gray-500 mb-6">
              Always know what you'll pay
              <br />
              no surprises.
            </p>
            <button className="bg-[#4b2e83] text-white px-6 py-2 rounded-full flex items-center">
              Know More
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-2">
                <circle cx="12" cy="12" r="12" fill="white" />
                <path d="M10 8L14 12L10 16" stroke="#4b2e83" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-[#4b2e83] flex items-center justify-center mb-6">
                           <img src="assets/images/Professional Drivers..svg" alt="" />

            </div>
            <h3 className="text-xl font-bold mb-3">Professional Drivers.</h3>
            <p className="text-center text-gray-500 mb-6">
              Fully trained, uniformed &<br />
              NDIS-accredited.
            </p>
            <button className="bg-[#4b2e83] text-white px-6 py-2 rounded-full flex items-center">
              Know More
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-2">
                <circle cx="12" cy="12" r="12" fill="white" />
                <path d="M10 8L14 12L10 16" stroke="#4b2e83" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-[#4b2e83] flex items-center justify-center mb-6">
                           <img src="assets/images/Any Need.svg" alt="" />

            </div>
            <h3 className="text-xl font-bold mb-3">Any Vehicle, Any Need.</h3>
            <p className="text-center text-gray-500 mb-6">
              Sedan, SUV, Maxi, Cargo
              <br />
              or Wheelchair-Accessible.
            </p>
            <button className="bg-[#4b2e83] text-white px-6 py-2 rounded-full flex items-center">
              Know More
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-2">
                <circle cx="12" cy="12" r="12" fill="white" />
                <path d="M10 8L14 12L10 16" stroke="#4b2e83" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-[#4b2e83] flex items-center justify-center mb-6">
                           <img src="assets/images/TTSS Subsidy..svg" alt="" />

            </div>
            <h3 className="text-xl font-bold mb-3">TTSS Subsidy.</h3>
            <p className="text-center text-gray-500 mb-6">
              NSW residents save 50%
              <br />
              (up to $60 per trip).
            </p>
            <button className="bg-[#4b2e83] text-white px-6 py-2 rounded-full flex items-center">
              Know More
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-2">
                <circle cx="12" cy="12" r="12" fill="white" />
                <path d="M10 8L14 12L10 16" stroke="#4b2e83" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
        <img src="/assets/images/sydney-skyline.png" alt="Sydney skyline at sunset" fill className="object-cover" />
      </div>
    </div>
  )
}
