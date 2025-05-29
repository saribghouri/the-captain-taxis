import React from 'react'

const Pricing = () => {
    return (
        <div className="mt-[150px] ">
            <section
                className="h-150 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('assets/images/MEN-IN-A-CAR.png')`,
                }}
            >
                <div className="relative z-10 h-full  flex flex-col">
                    <div className="flex-1 flex flex-col justify-center mt-[20px] ml-[120px] px-4 sm:px-6 lg:px-8 pb-24">
                        <div className="max-w-8xl  text-left mt-[40px]">
                            <h1 className="text-white text-2xl max-w-[90%] mb-[20px]  md:text-4xl lg:text-6xl xl:text-6xl font-bold leading-tight ">
                                Upfront Pricing
                            </h1>
                            <p className="text-[#d6d6d6] text-lg md:text-[25px] max-w-2xl  font-normal mb-4 tracking-wide">Know Your Fate Before You Ride.The Captain Provides Upfront Pricing, So You Can Enjoy Peace Of Mind With No Surprises Andino Hidden Fees.</p>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Pricing