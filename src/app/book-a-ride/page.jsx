"use client"
import { Plus } from "lucide-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button, Input } from "antd"
import Header from "../Header"
import GoogleMap from "@/components/google-map"
import { useState } from "react"
import { TimePicker } from "antd"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"

const page = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedCar, setSelectedCar] = useState("sedan-max4") // Default selection
  const { TextArea } = Input
  const pickupLocation = "9 Waterloo Rd, Macquarie Park NSW 2113, Australia"
  const dropoffLocation = "117 Ryedale Rd, West Ryde NSW 2114, Australia"
  const [showTripSummary, setShowTripSummary] = useState(false)

  const [value, setValue] = useState("")

  const handleCarSelect = (carId) => {
    setSelectedCar(carId)
  }

  const onChange = (e) => {
    console.log("Change:", e.target.value)
  }
  dayjs.extend(customParseFormat)
  const onChangetime = (time, timeString) => {
    console.log(time, timeString)
  }
  const [time, setTime] = useState(dayjs("00:00", "HH:mm"))
  const [isAM, setIsAM] = useState(true)

  const onTimeChange = (value) => {
    if (!value) return
    let newTime = value
    if (isAM && value.hour() >= 12) {
      newTime = value.subtract(12, "hour")
    } else if (!isAM && value.hour() < 12) {
      newTime = value.add(12, "hour")
    }
    setTime(newTime)
  }

  const handleAMPMClick = (mode) => {
    setIsAM(mode === "AM")

    let newTime = time
    if (mode === "AM" && time.hour() >= 12) {
      newTime = time.subtract(12, "hour")
    } else if (mode === "PM" && time.hour() < 12) {
      newTime = time.add(12, "hour")
    }
    setTime(newTime)
  }

  return (
    <>
      <Header />
      <div className="flex  gap-[20px] max-h-screen  mt-[150px] px-6 ">
        {/* Left side - Map */}
        <div className="flex-1 relative ">
          <GoogleMap className="rounded-2xl" pickup={pickupLocation} dropoff={dropoffLocation} />
        </div>

        {/* Right side - Booking Form */}
        <div className="w-[800px] p-6 flex flex-col testomonial-shadow rounded-2xl">
          {!showTripSummary ? (
            <>
              <h1 className="text-3xl font-semibold text-gray-900 mb-6">Book Your Ride</h1>

              {/* Where from */}
              <div className="mb-4">
                <label className="text-[18px] font-semibold text-black mb-2 block">Where from?</label>
                <div className="relative">
                  <Input
                    value="9 Waterloo Rd, Macquarie Park NSW 2113, Australia"
                    className="pr-10  !text-[18px]  !text-gray-600"
                    variant="underlined"
                    placeholder="Underlined"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-3 h-3 bg-purple-900 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Where to */}
              <div className="mb-6">
                <label className="text-[18px] font-semibold text-black mb-2 block">Where to?</label>
                <div className="relative">
                  <Input
                    value="117 Ryedale Rd, West Ryde NSW 2114, Australia"
                    variant="underlined"
                    className="pr-10  !text-[18px]  !text-gray-600"
                    readOnly
                  />
                  <Plus className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-black" />
                </div>
              </div>

              {/* Select Car */}
              <div className="mb-6">
                <label className="text-[18px] font-semibold text-black mb-3 block">Select Car</label>
                <div className="relative">
                  {/* Left Arrow */}
                  <button
                    onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                    className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
                    disabled={currentSlide === 0}
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={() => setCurrentSlide(Math.min(2, currentSlide + 1))}
                    className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
                    disabled={currentSlide === 2}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>

                  {/* Slider Container */}
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-300 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {/* Slide 1 */}
                      <div className="w-full flex-shrink-0">
                        <div className="grid grid-cols-4 gap-2">
                          <div
                            className={`${selectedCar === "sedan-max4" ? "border-2 border-purple-900 bg-purple-50" : "border border-gray-200 hover:border-gray-300"} rounded-lg p-1 text-center flex flex-col items-center cursor-pointer`}
                            onClick={() => handleCarSelect("sedan-max4")}
                          >
                            <img className=" h-12" src="assets/images/sedan.png" alt="" />
                            <div className="text-[16px] font-medium mt-[6px]">
                              {" "}
                              <span className="font-semibold">Sedan</span> Max 4
                            </div>
                          </div>
                          <div
                            className={`${selectedCar === "suv-max5" ? "border-2 border-purple-900 bg-purple-50" : "border border-gray-200 hover:border-gray-300"} rounded-lg p-1 text-center flex flex-col items-center cursor-pointer`}
                            onClick={() => handleCarSelect("suv-max5")}
                          >
                            <img className=" h-12" src="assets/images/suv.png" alt="" />
                            <div className="text-[16px] font-medium mt-[6px]">
                              {" "}
                              <span className="font-semibold">SUV</span> Max 5
                            </div>
                          </div>
                          <div
                            className={`${selectedCar === "maxi-max7" ? "border-2 border-purple-900 bg-purple-50" : "border border-gray-200 hover:border-gray-300"} rounded-lg p-1 text-center flex flex-col items-center cursor-pointer`}
                            onClick={() => handleCarSelect("maxi-max7")}
                          >
                            <img className=" h-12" src="assets/images/maxi 7.png" alt="" />
                            <div className="text-[16px] font-medium mt-[6px]">
                              <span className="font-semibold">Maxi</span> Max 7
                            </div>
                          </div>
                          <div
                            className={`${selectedCar === "maxi-1" ? "border-2 border-purple-900 bg-purple-50" : "border border-gray-200 hover:border-gray-300"} rounded-lg p-1 text-center flex flex-col items-center cursor-pointer`}
                            onClick={() => handleCarSelect("maxi-1")}
                          >
                            <img className=" h-12" src="assets/images/suv.png" alt="" />
                            <div className="text-[16px] font-medium mt-[6px]">
                              {" "}
                              <span className="font-semibold">Maxi</span>Maxi
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Slide 2 */}
                      <div className="w-full flex-shrink-0">
                        <div className="grid grid-cols-4 gap-2">
                          <div
                            className={`${selectedCar === "maxi-2" ? "border-2 border-purple-900 bg-purple-50" : "border border-gray-200 hover:border-gray-300"} rounded-lg p-1 text-center flex flex-col items-center cursor-pointer`}
                            onClick={() => handleCarSelect("maxi-2")}
                          >
                            <img className=" h-12" src="assets/images/suv.png" alt="" />
                            <div className="text-[16px] font-medium mt-[6px]">
                              {" "}
                              <span className="font-semibold">Maxi</span>Maxi
                            </div>
                          </div>
                          <div
                            className={`${selectedCar === "maxi-3" ? "border-2 border-purple-900 bg-purple-50" : "border border-gray-200 hover:border-gray-300"} rounded-lg p-1 text-center flex flex-col items-center cursor-pointer`}
                            onClick={() => handleCarSelect("maxi-3")}
                          >
                            <img className=" h-12" src="assets/images/suv.png" alt="" />
                            <div className="text-[16px] font-medium mt-[6px]">
                              {" "}
                              <span className="font-semibold">Maxi </span> Maxi
                            </div>
                          </div>
                          <div
                            className={`${selectedCar === "sedan-2" ? "border-2 border-purple-900 bg-purple-50" : "border border-gray-200 hover:border-gray-300"} rounded-lg p-1 text-center flex flex-col items-center cursor-pointer`}
                            onClick={() => handleCarSelect("sedan-2")}
                          >
                            <img className=" h-12" src="assets/images/sedan.png" alt="" />
                            <div className="text-[16px] font-medium mt-[6px]">
                              {" "}
                              <span className="font-semibold">Sedan</span> Max 4
                            </div>
                          </div>
                          <div
                            className={`${selectedCar === "maxi-max7-2" ? "border-2 border-purple-900 bg-purple-50" : "border border-gray-200 hover:border-gray-300"} rounded-lg p-1 text-center flex flex-col items-center cursor-pointer`}
                            onClick={() => handleCarSelect("maxi-max7-2")}
                          >
                            <img className=" h-12" src="assets/images/maxi 7.png" alt="" />
                            <div className="text-[16px] font-medium mt-[6px]">
                              <span className="font-semibold">Maxi</span> Max 7
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Slide 3 */}
                      <div className="w-full flex-shrink-0">
                        <div className="grid grid-cols-4 gap-2">
                          <div
                            className={`${selectedCar === "maxi-max7-3" ? "border-2 border-purple-900 bg-purple-50" : "border border-gray-200 hover:border-gray-300"} rounded-lg p-1 text-center flex flex-col items-center cursor-pointer`}
                            onClick={() => handleCarSelect("maxi-max7-3")}
                          >
                            <img className=" h-12" src="assets/images/maxi 7.png" alt="" />
                            <div className="text-[16px] font-medium mt-[6px]">
                              <span className="font-semibold">Maxi</span> Max 7
                            </div>
                          </div>
                          <div
                            className={`${selectedCar === "sedan-3" ? "border-2 border-purple-900 bg-purple-50" : "border border-gray-200 hover:border-gray-300"} rounded-lg p-1 text-center flex flex-col items-center cursor-pointer`}
                            onClick={() => handleCarSelect("sedan-3")}
                          >
                            <img className=" h-12" src="assets/images/sedan.png" alt="" />
                            <div className="text-[16px] font-medium mt-[6px]">
                              {" "}
                              <span className="font-semibold">Sedan</span> Max 4
                            </div>
                          </div>
                          <div
                            className={`${selectedCar === "suv-2" ? "border-2 border-purple-900 bg-purple-50" : "border border-gray-200 hover:border-gray-300"} rounded-lg p-1 text-center flex flex-col items-center cursor-pointer`}
                            onClick={() => handleCarSelect("suv-2")}
                          >
                            <img className=" h-12" src="assets/images/suv.png" alt="" />
                            <div className="text-[16px] font-medium mt-[6px]">
                              {" "}
                              <span className="font-semibold">SUV</span> Max 5
                            </div>
                          </div>
                          <div
                            className={`${selectedCar === "maxi-4" ? "border-2 border-purple-900 bg-purple-50" : "border border-gray-200 hover:border-gray-300"} rounded-lg p-1 text-center flex flex-col items-center cursor-pointer`}
                            onClick={() => handleCarSelect("maxi-4")}
                          >
                            <img className=" h-12" src="assets/images/suv.png" alt="" />
                            <div className="text-[16px] font-medium mt-[6px]">
                              {" "}
                              <span className="font-semibold">Maxi</span> Maxi
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <label className="text-[18px] font-semibold text-black mb-3 block">Payment Method</label>
                <div className="flex gap-10 flex-wrap items-center">
                  <div className=" border-1 px-[20px] py-[5px] border-gray-500  rounded-[7px]">
                    <img className="w-10 h-6" src="assets/images/master card.png" alt="" />
                  </div>
                  <div className="  border-1 px-[20px] py-[10px] border-gray-500 rounded-[7px] flex items-center justify-center text-white text-xs font-bold">
                    <img className="w-14 h-4" src="assets/images/visa.png" alt="" />
                  </div>
                  <div className=" border-1 px-[20px] py-[5px] border-gray-500 rounded-[7px] flex items-center justify-center">
                    <img className="w-14 h-6" src="assets/images/apple pay.png" alt="" />
                  </div>
                  <div className="  rounded-[7px] flex items-center justify-center border-1 px-[20px] py-[5px] border-gray-500 text-white text-xs">
                    <img className="w-14 h-6" src="assets/images/g pay.png" alt="" />
                  </div>
                </div>
              </div>

              {/* When to Travel */}
              <div className="mb-6">
                <label className="text-[18px] font-semibold text-black mb-3 block">When to Travel?</label>
                <div className="flex gap-3 items-center">
                  <TimePicker
                    className="w-full h-[40px]"
                    value={time}
                    onChange={onTimeChange}
                    format="h:mm A"
                    use12Hours
                  />

                  <div className="flex bg-gray-100 rounded">
                    <button
                      className={`px-4 py-1 text-sm font-medium rounded ${
                        isAM ? "bg-purple-900 text-white" : "text-gray-600"
                      }`}
                      onClick={() => handleAMPMClick("AM")}
                    >
                      AM
                    </button>
                    <button
                      className={`px-4 py-2 text-sm font-medium rounded ${
                        !isAM ? "bg-purple-900 text-white" : "text-gray-600"
                      }`}
                      onClick={() => handleAMPMClick("PM")}
                    >
                      PM
                    </button>
                  </div>
                </div>
              </div>

              {/* Special Instructions */}
              <div className="mb-6 flex-1">
                <label className="text-[18px] font-semibold text-black mb-3 block">Special Instructions</label>
                <TextArea
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Controlled autosize"
                  autoSize={{ minRows: 4, maxRows: 8 }}
                />
              </div>

              {/* Confirm Button */}
              <Button
                className="w-full !bg-[#4d2d7c] !py-[25px] !text-[20px] !hover:bg-white !text-white !rounded-lg !font-medium"
                onClick={() => setShowTripSummary(true)}
              >
                Confirm & Continue
              </Button>
            </>
          ) : (
            <>
              {/* Trip Summary */}
              <div className="bg-white">
                <h1 className="text-3xl font-semibold text-gray-900 mb-8">Trip Summary</h1>

                <div className="space-y-6">
                  {/* Pickup Address */}
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Pickup Address</h3>
                    <p className="text-gray-600 text-base">9 Waterloo Rd, Macquarie Park NSW 2113, Australia</p>
                  </div>

                  {/* Drop-off Address */}
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Drop-off Address</h3>
                    <p className="text-gray-600 text-base">117 Ryedale Rd, West Ryde NSW 2114, Australia</p>
                  </div>

                  {/* Vehicle Type */}
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Vehicle Type</h3>
                    <p className="text-gray-600 text-base">Sedan</p>
                  </div>

                  {/* Passengers */}
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Passengers</h3>
                    <p className="text-gray-600 text-base">4</p>
                  </div>

                  {/* Time */}
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Time</h3>
                    <p className="text-gray-600 text-base">05:40 PM</p>
                  </div>

                  {/* Distance */}
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Distance</h3>
                    <p className="text-gray-600 text-base">6.3 km</p>
                  </div>

                  {/* Duration */}
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Duration</h3>
                    <p className="text-gray-600 text-base">11 Minute</p>
                  </div>
                </div>

                {/* Total */}
                <div className="mt-8 mb-8">
                  <h2 className="text-2xl font-bold text-center text-black">Total: $100 AUD</h2>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="flex-1 !bg-[#4d2d7c] !py-[20px] !text-[18px] !text-white !rounded-lg !font-medium">
                    Pay Now
                  </Button>
                  <Button
                    className="flex-1 !bg-white !border-2 !border-gray-300 !py-[20px] !text-[18px] !text-gray-700 !rounded-lg !font-medium hover:!bg-gray-50"
                    onClick={() => setShowTripSummary(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
export default page
