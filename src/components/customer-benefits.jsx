"use client";
import {
  DollarOutlined,
  UserOutlined,
  AppstoreAddOutlined,
  CarOutlined,
} from "@ant-design/icons";

const CustomerBenefits = () => {
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
  return (
    <section className="md:px-8 md:py-16 px-5 py-12">
      <div className="section">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12 w-full justify-center">
            <h1 className="font-bold text-[30px] text-[#4D2D7C] capitalize">
              Key Benefits
            </h1>
            <p className="text-gray-600 text-xl">
              We are Always for Your Benefits
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 pt-32 rounded-3xl shadow-md relative overflow-hidden"
              >
                {/* Icon on yellow circle */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-[#4D2D7C] border-4 border-white text-white flex items-center justify-center shadow-md">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-bold text-base text-gray-800 uppercase tracking-wide mb-4">
                  {item.title}
                </h3>

                {/* Message Box */}
                <div className="bg-[#F3F4F6] text-black rounded-2xl p-5 space-y-4">
                  <p className="text-sm leading-relaxed">{item.description}</p>
                  <button className="w-full bg-[#4D2D7C] text-white font-semibold py-2 rounded-full  transition">
                    KNOW MORE →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerBenefits;
