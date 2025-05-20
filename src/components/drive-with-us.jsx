"use client"
import {
  DollarCircleOutlined,
  CarOutlined,
  SafetyOutlined,
  ScheduleOutlined,
  TeamOutlined,
  TrophyOutlined,
} from "@ant-design/icons"

const DriveWithUs = () => {
  const benefits = [
    {
      text: "Steady, Guaranteed Earnings (fixed fares, no surge)",
      icon: <DollarCircleOutlined className="text-xl" />,
    },
    {
      text: "Premium, Well-Maintained Cars",
      icon: <CarOutlined className="text-xl" />,
    },
    {
      text: "Top-Tier Safety & Security (in-car cameras, 24/7 support)",
      icon: <SafetyOutlined className="text-xl" />,
    },
    {
      text: "Flexible Scheduling (full- or part-time)",
      icon: <ScheduleOutlined className="text-xl" />,
    },
    {
      text: "NDIS & Corporate Partnerships (higher-value trips)",
      icon: <TeamOutlined className="text-xl" />,
    },
    {
      text: "Ongoing Training & Driver Support",
      icon: <TrophyOutlined className="text-xl" />,
    },
  ]

  return (
    <div className=" p-[20px]  ">
  <div className="relative bg-gradient-to-b from-gray-50 testomonial-shadow to-white py-20 px-4 sm:px-6 lg:px-16 overflow-hidden shadow-xl">
   
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#4D2D7C] opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4D2D7C] opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Drive with The Captain Taxis</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Earn more as a fully-professional taxi driver—no surge, no gimmicks.
          </p>
        </div>

        <div
          className="bg-white rounded-2xl p-8 mb-12 border border-gray-100"
          style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4D2D7C] bg-opacity-10 flex items-center justify-center mr-4 group-hover:bg-[#4D2D7C] transition-all duration-300">
                  <span className="text-[#a7a7a7] group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </span>
                </div>
                <div className="pt-1">
                  <p className="text-gray-700 font-medium">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-[#DFBA3F] rounded-lg transform rotate-1 scale-105 opacity-30"></div>
            <a
              href="/apply-driver"
              className="relative inline-block bg-[#4D2D7C] hover:bg-[#3a2160] text-white font-semibold px-8 py-4 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1"
            >
              Become a Driver
            </a>
          </div>

          <p className="mt-6 text-gray-500 text-sm">
            Join our team of professional drivers today and experience the difference
          </p>
        </div>
      </div>
    </div>
    </div>
  
  )
}

export default DriveWithUs
