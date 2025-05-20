"use client"
import { DollarOutlined, UserOutlined, AppstoreAddOutlined, CarOutlined } from "@ant-design/icons"

const CustomerBenefits = () => {
  const benefits = [
    {
      icon: <DollarOutlined className="text-3xl text-[#4D2D7C]" />,
      title: "Fixed Fares. No Surge.",
      description: "Always know what you'll pay—no surprises.",
    },
    {
      icon: <UserOutlined className="text-3xl text-[#4D2D7C]" />,
      title: "Professional Drivers.",
      description: "Fully trained, uniformed & NDIS-accredited.",
    },
    {
      icon: <AppstoreAddOutlined className="text-3xl text-[#4D2D7C]" />,
      title: "Any Vehicle, Any Need.",
      description: "Sedan, SUV, Maxi, Cargo or Wheelchair-Accessible.",
    },
    {
      icon: <CarOutlined className="text-3xl text-[#4D2D7C]" />,
      title: "TTSS Subsidy.",
      description: "NSW residents save 50% (up to $60 per trip).",
    },
  ]

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose The Captain Taxis</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our premium taxi service designed with your comfort and convenience in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-gray-100 group hover:-translate-y-1"
            >
              <div className="mb-4 relative">
                <div className="w-16 h-16 rounded-full bg-[#4D2D7C] bg-opacity-10 flex items-center justify-center mb-4 group-hover:bg-[#4D2D7C] transition-all duration-300">
                  <div className="text-[#4D2D7C] group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#DFBA3F] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/booking"
            className="inline-block bg-[#4D2D7C] text-white font-medium px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
          >
            Book Your Ride Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default CustomerBenefits
