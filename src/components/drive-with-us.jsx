"use client"

import { DollarSign, Car, Shield, Calendar, Users, Award } from "lucide-react"
import Image from "next/image"

export default function DriveWithUs() {
  const benefits = [
    {
      text: "Steady, Guaranteed Earnings (fixed fares, no surge)",
      icon: <img className="w-[20px]" src="assets/images/Steady, Guaranteed.svg" alt="" />,
    },
    {
      text: "Premium, Well-Maintained Cars",
      icon: <img className="w-[20px]" src="assets/images/Premium, Well.svg" alt="" />,
    },
    {
      text: "Top-Tier Safety & Security (in-car cameras, 24/7 support)",
      icon: <img className="w-[20px]" src="assets/images/Top-Tier Safety.svg" alt="" />,
    },
    {
      text: "Flexible Scheduling (full- or part-time)",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      text: "NDIS & Corporate Partnerships (higher-value trips)",
      icon: <img className="w-[20px]" src="assets/images/NDIS & Corporate.svg" alt="" />,
    },
    {
      text: "Ongoing Training & Driver Support",
      icon: <img className="w-[20px]" src="assets/images/Ongoing Training.svg" alt="" />,
    },
  ]

  return (
    <div className="w-full bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/images/car.png"
              alt="Captain Taxis Car"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col">
            <h1 className="text-[#4D2D7C] text-3xl md:text-4xl  mb-2">Drive with The Captain Taxis</h1>
            <p className="text-gray-600 text-lg mb-8">
              Earn more as a fully-professional taxi driver—no surge, no gimmicks.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4D2D7C]/10 flex items-center justify-center">
                    <span className="text-[#4D2D7C]">{benefit.icon}</span>
                  </div>
                  <p className="text-gray-700">{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center flex justify-center">
              <a
                href="/apply-driver"
                className="inline-block bg-[#4D2D7C] hover:bg-[#3a2160] text-white font-semibold px-6 py-3 rounded-4xl transition duration-300"
              >
                Become a Driver
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
