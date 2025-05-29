"use client"

import Image from "next/image"

const WhereYouCanUse = () => {
  const partners = [
      {
        name: "13cabs",
        logo: "assets/images/cabrage.png",
      },
      {
     name: "CAB",
     logo: "assets/images/13cab.png",
     
   },
    {
      name: "CABCHARGE",
      logo: "assets/images/eastren cab.png",
    },
    {
      name: "EASTERN Cabs",
      logo: "assets/images/cab.png",
    },
  ]

  return (
    

    <div className="relative w-full  md:h-42 bg-[#e8e8f0]   overflow-hidden">
      {/* Purple diagonal banner */}
      <div
        className="absolute top-0 left-0 py-[70px] bg-[#502a7e] text-white h-full flex items-center px-6 md:px-12"
        style={{
          clipPath: "polygon(0 0, 70% 0, 50% 100%, 0 100%)",
          width: "45%",
        }}
      >
        <div className="">
          <div className="text-lg md:text-xl lg:text-4xl font-normal leading-tight">Where You Can Use</div>
          <div className="text-xl md:text-2xl lg:text-[40px] font-bold">Captain Taxi</div>
        </div>
      </div>

      {/* Partners logos section */}
      <div
        className="absolute right-0 top-0 h-full flex items-center pr-6 md:pr-12"
        style={{ width: "67%" }}
      >
        <div className="flex items-center gap-8 md:gap-12 ">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
              
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  
  )
}

export default WhereYouCanUse
