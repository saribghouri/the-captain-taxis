import Image from "next/image"

export default function CustomerBenefits() {
  return (
    <div className="max-w-[100%] mx-auto ">
    

     <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-[90%] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-7xl font-bold mb-6 leading-tight">
            <span className="text-black">Book Ride With </span>
            <span className="text-[#4b2e83]">The Captain Taxi</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-[25px] leading-relaxed max-w-7xl mx-auto">
            Need A Ride ? The Captain Taxis App Is Here To Get You Moving. With Just A Few Taps, You Can Book A Reliable
            Ride, - Track Your Driver, And Reach Your Destination Safely. Whether You're Heading To The Airport Or
            Across Town, Count On Us For A Smooth And Comfortable Journey.
          </p>
        </div>

        {/* Image Grid */}
        <div className="flex  h-[500px]">
          {/* Left Large Image */}
          <div className="flex-1">
            <div
              className="w-[90%] h-full bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage: "url(assets/images/1.png)",
              }}
            ></div>
          </div>

          {/* Right Grid - 2x2 */}
          <div className="flex-2 grid grid-cols-2 gap-6">
            {/* Top Left */}
            <div
              className="bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage: "url(assets/images/2.png)",
              }}
            ></div>

            {/* Top Right */}
            <div
              className="bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage: "url(assets/images/3.png)",
              }}
            ></div>

            {/* Bottom Left */}
            <div
              className="bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage: "url(assets/images/4.png)",
              }}
            ></div>

            {/* Bottom Right */}
            <div
              className="bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage: "url(assets/images/5.png)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}
