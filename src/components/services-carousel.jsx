"use client"


const ServicesSection = () => {
  const services = [
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
  ]

  return (
    <section className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/backdound 3.png')",
        }}
      >
       
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl  text-white mb-4">Our Services</h1>
            <p className="text-xl text-white/90">We are Always There at Your Services</p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ service }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl group transition-all duration-300 hover:scale-105">
      {/* Card with hover effect */}
      <div className="relative p-6 h-full  ant-modal-contents backdrop-blur-sm transition-all duration-300">
        <div className="flex items-center gap-6">
          {/* Car Image */}
          <div className="">
            <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-52 h-30 object-contain" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 group-hover:text-white/80 transition-colors duration-300 text-sm mb-3 leading-relaxed">
              {service.description}
            </p>
            <p className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 mb-4">
              {service.rate}
            </p>

            {/* Book Button */}
            <button className="bg-[#2D1A4A]  text-[#ffffff] group-hover:text-[#2D1A4A] group-hover:bg-white border border-[#2D1A4A] group-hover:border-white px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300">
              Book Ride Now
              {/* <Carout className="w-4 h-4" /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
