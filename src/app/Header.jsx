"use client";
import React, { useState } from "react";
import { Button, Drawer, Dropdown, Menu } from "antd";
import {
  MenuOutlined,
  DownOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { Download, Mail, Phone } from "lucide-react";

const menuData = [
  {
    key: "whatWeOffer",
    label: "What We Offer",
    columns: [
      {
        heading: "Vehicles",
        items: [
          { label: "Next Available", path: "/vehicles/next-available" },
          { label: "Sedan", path: "/vehicles/sedan" },
          { label: "SUV", path: "/vehicles/suv" },
          { label: "Maxi", path: "/vehicles/maxi" },
          { label: "Cargo", path: "/vehicles/cargo" },
          { label: "NDIS Transport", path: "/vehicles/ndis" },
        ],
      },
      {
        heading: "Special Services",
        items: [
          { label: "Airport Shuttle", path: "/services/airport-shuttle" },
          { label: "NDIS Support Service", path: "/services/ndis-support" },
          {
            label: "Parcel Delivery Service",
            path: "/services/parcel-delivery",
          },
          {
            label: "Events & Weddings Service",
            path: "/services/events-weddings",
          },
          {
            label: "Corporate Travel Service",
            path: "/services/corporate-travel",
          },
          { label: "Sydney Taxi Tourist Tour", path: "/services/tourist-tour" },
        ],
      },
      {
        heading: "Last arrivals",
        items: [],
      },
    ],
  },

  {
    key: "drivers",
    label: "Drivers",
    columns: [
      {
        heading: "Drivers",
        items: [
          { label: "Why Drive with Us", path: "/drivers/why-drive" },
          { label: "Become a Driver", path: "/drivers/join" },
        ],
      },
    ],
  },
  // {
  //   key: "corporate",
  //   label: "Corporate Accounts",
  //   columns: [
  //     {
  //       heading: "Corporate Accounts",
  //       items: [
  //         { label: "Business Accounts", path: "/corporate/business" },
  //         { label: "Event Transfers", path: "/corporate/events" },
  //         { label: "Airport Shuttles", path: "/corporate/airport" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   key: "help",
  //   label: "Help & FAQs",
  //   columns: [
  //     {
  //       heading: "Help & FAQs",
  //       items: [
  //         { label: "Booking Help", path: "/help/booking" },
  //         { label: "Payment Questions", path: "/help/payment" },
  //         { label: "Accessibility Information", path: "/help/accessibility" },
  //       ],
  //     },
  //   ],
  // },
  {
    key: "contact",
    label: "Contact",
    columns: [
      {
        heading: "Contact",
        items: [
          { label: "Customer Support", path: "/contact/customer-support" },
          { label: "Driver Support", path: "/contact/driver-support" },
        ],
      },
    ],
  },
]

const MegaMenu = ({ columns, onItemClick }) => (
  <div className="absolute left-0 right-0 w-full">
    <div className="max-w-3xl mx-auto mt-6 p-3 bg-white rounded-2xl">
      <div
        className={`grid gap-6 ${columns.length === 1
            ? "grid-cols-1"
            : columns.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : columns.length === 3
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : columns.length === 4
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                  : "grid-cols-1"
          }`}
      >
        {columns.map((col, i) => (
          <div
            key={i}
            className={`${col.items.length === 0 ? "bg-[#3a2160]" : "bg-transparent"
              } p-4 rounded-md`}
          >
            <h4
              className={`font-bold text-lg pb-2 ${col.items.length === 0 ? "text-white" : "text-black"
                }`}
            >
              {col.heading}
            </h4>
            {col.items.length === 0 ? (
              <div className="flex flex-col items-start justify-between h-[70%]">
                <p className="text-white text-sm mb-4">
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
                <button
                  onClick={() => onItemClick("/last-arrivals")}
                  className="bg-white text-[#6B46C1] px-4 py-1.5 rounded-md font-semibold"
                >
                  Read article
                </button>
              </div>
            ) : (
              <Menu className="!shadow-none">
                {col.items.map((item, idx) => (
                  <Menu.Item
                    key={idx}
                    onClick={() => onItemClick(item.path)}
                    className="cursor-pointer !text-[#a09a9a] !p-0 !py-[5px] !text-xs"
                  >
                    <span className="text-left"> {item.label}</span>
                  </Menu.Item>
                ))}
              </Menu>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
)

const MobileMenuSection = ({ menu, isActive, toggleMenu, onItemClick }) => (
  <div className="mb-1">
    <div
      className="flex justify-between items-center py-3 px-2 hover:bg-purple-50 cursor-pointer transition-colors"
      onClick={() => toggleMenu(menu.key)}
    >
      <div className="flex items-center">
        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
        <span className="font-medium">{menu.label}</span>
      </div>
      <DownOutlined className={`text-xs transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
    </div>
    {isActive && (
      <div className="pl-6 pr-2 py-2 bg-gray-50 rounded-md mb-2 border-l-4 border-purple-600 animate-fadeIn">
        {menu.columns.map((col, i) => (
          <div key={i} className="mb-3">
            <h5 className="font-semibold text-purple-700 mb-2 border-b border-gray-200 pb-1">{col.heading}</h5>
            <div className="space-y-1">
              {col.items.map((item, idx) => (
                <div
                  key={idx}
                  className="py-2 cursor-pointer text-gray-700 hover:text-purple-700 transition-colors flex items-center"
                  onClick={() => onItemClick(item.path)}
                >
                  <span className="w-1 h-1 bg-purple-500 rounded-full mr-2 opacity-75"></span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
)

const Header = () => {
  const [visible, setVisible] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const router = useRouter()

  const showDrawer = () => setVisible(true)
  const onClose = () => {
    setVisible(false)
    setActiveMenu(null)
  }

  const handleItemClick = (path) => {
    router.push(path)
    onClose()
  }

  const toggleMobileMenu = (menuKey) => {
    setActiveMenu(activeMenu === menuKey ? null : menuKey)
  }

  return (
    <div className="fixed w-full top-0 left-0 z-50">
      {/* Top bar - Hidden on mobile */}
      <div className="bg-[#4d2d7c] text-white   py-4 ">
        <div className="max-w-8xl ml-[15px] mr-[15px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 text-sm">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex items-center gap-2">
              <Phone className="w-15 " />
              <span className="font-semibold tracking-widest">0420 966 387</span>
            </div>

            <div className="hidden lg:block w-px h-4 bg-gray-600"></div>

            <div className="flex items-center gap-2">
              <Mail className="w-10 " />
              <span className=" tracking-widest font-semibold text-[14px] text-white">Info@thecaptaintaxis.com.au</span>
            </div>
          </div>

          <div className="hidden lg:block w-px h-4 bg-gray-600"></div>

          {/* Promotional Text */}
          <div className="flex-1 text-center lg:text-left">
            <span className=" text-[16px]">
              Get 20% OFF on Your First Ride! Ride with The Captain Taxis – smooth, fast, and affordable.
            </span>
          </div>


        </div>
      </div>
      {/* Nav bar - Hidden on mobile */}
      <div className="hidden md:block bg-white  shadow-md">
        <div className=" mx-auto  md:px-8 lg:px-8 py-4">
          <div className="flex w-full px-10 justify-between ">
            {/* Left side navigation */}
            <div className="flex items-center space-x-1">
              <img className="w-[120px] mr-[75px]" src="assets/images/Logo1.png" alt="" />
              <Button
                type="button"
                className="!text-[#4b4b4b] !font-medium !text-[20px]  !rounded-md !px-3 !h-9 transition-colors duration-200 hover:underline hover:decoration-purple-800 hover:decoration-2 hover:underline-offset-4"
                onClick={() => router.push("/")}
              >
                Home  
              </Button>
              <Button
                type="button"
                className="!text-[#4b4b4b] !font-medium !text-[20px]  !rounded-md !px-3 !h-9 transition-colors duration-200 hover:underline hover:decoration-purple-800 hover:decoration-2 hover:underline-offset-4"
                onClick={() => router.push("/book-a-ride")}
              >
                Book A Ride  
              </Button>


              {menuData.map((menu) => (
                <Dropdown
                  key={menu.key}
                  overlay={
                    <MegaMenu
                      columns={menu.columns}
                      onItemClick={handleItemClick}
                    />
                  }
                  trigger={["hover"]}
                  placement="bottomCenter"
                  overlayClassName="w-full"
                >
                  <button className="px-3 py-1.5 rounded-md  !font-medium cursor-pointer text-[20px] hover:underline hover:decoration-purple-800 hover:decoration-2 hover:underline-offset-4  transition-colors duration-200 flex items-center gap-5">
                    {menu.label} <DownOutlined className="text-xs opacity-70" />
                  </button>
                </Dropdown>
              ))}
            </div>

            <div>

              <Button className="!bg-[#4D2D7C] !text-[#ffffff] ! !px-[30px] !py-[20px] !text-[16px] rounded-2xl">Book Now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-[#4D2D7C] text-white px-4 py-3 flex justify-between items-center">
        <img
          onClick={() => router.push("/")}
          className="w-[120px] cursor-pointer"
          src="/assets/images/Logo1.png"
          alt="Logo"
        />
        <Button
          type="text"
          icon={<MenuOutlined className="!text-white text-xl" />}
          onClick={showDrawer}
          className="text-white border-none shadow-none"
        />
      </div>
      <Drawer
        title={
          <div className="flex items-center justify-end">
            <img src="/assets/images/Logo1.png" alt="Logo" className="h-8" />
          </div>
        }
        placement="right"
        onClose={onClose}
        open={visible}
        className="mobile-drawer"
        width={300}
      >
        <div className="flex flex-col">
          <Button
            type="text"
            onClick={() => handleItemClick("/")}
            className="text-left py-3 px-2 mb-1 hover:bg-purple-50 hover:text-purple-700 transition-colors flex items-center"
          >
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
            Home
          </Button>
          <Button
            type="text"
            onClick={() => handleItemClick("/book-ride")}
            className="text-left py-3 px-2 mb-1 hover:bg-purple-50 hover:text-purple-700 transition-colors flex items-center"
          >
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
            Book a Ride
          </Button>
          {menuData.map((menu) => (
            <MobileMenuSection
              key={menu.key}
              menu={menu}
              isActive={activeMenu === menu.key}
              toggleMenu={toggleMobileMenu}
              onItemClick={handleItemClick}
            />
          ))}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Button
              type="primary"
              className="w-full mb-2 !bg-gradient-to-r !from-purple-700 !to-purple-900"
              onClick={() => handleItemClick("/login")}
            >
              Login
            </Button>
            <Button
              type="default"
              className="w-full !border-purple-700 !text-purple-700"
              onClick={() => handleItemClick("/signup")}
            >
              Sign Up
            </Button>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col items-center">
            <div className="font-semibold text-gray-700 flex items-center mb-3">
              <PhoneOutlined className="mr-2" /> Call us: 13 2227
            </div>
            <div className="flex gap-4">
              <img
                onClick={() => router.push("/")}
                className="w-[30px] cursor-pointer hover:opacity-80 transition-opacity"
                src="/assets/images/Instagram-Logo.wine.svg"
                alt="Instagram"
              />
              <img
                onClick={() => router.push("/")}
                className="w-[20px] cursor-pointer hover:opacity-80 transition-opacity"
                src="/assets/images/YouTube_full-color_icon_(2017).svg.webp"
                alt="YouTube"
              />
              <img
                onClick={() => router.push("/")}
                className="w-[30px] cursor-pointer hover:opacity-80 transition-opacity"
                src="/assets/images/Facebook-f_Logo-Blue-Logo.wine.svg"
                alt="Facebook"
              />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Header
