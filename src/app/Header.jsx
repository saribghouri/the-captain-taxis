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
    ],
  },
  {
    key: "pricing",
    label: "Pricing",
    columns: [
      {
        heading: "Pricing",
        items: [
          { label: "Fare Estimator", path: "/pricing/fare-estimator" },
          { label: "TTSS Subsidy Scheme", path: "/pricing/ttss-subsidy" },
        ],
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
  {
    key: "corporate",
    label: "Corporate Accounts",
    columns: [
      {
        heading: "Corporate Accounts",
        items: [
          { label: "Business Accounts", path: "/corporate/business" },
          { label: "Event Transfers", path: "/corporate/events" },
          { label: "Airport Shuttles", path: "/corporate/airport" },
        ],
      },
    ],
  },
  {
    key: "help",
    label: "Help & FAQs",
    columns: [
      {
        heading: "Help & FAQs",
        items: [
          { label: "Booking Help", path: "/help/booking" },
          { label: "Payment Questions", path: "/help/payment" },
          { label: "Accessibility Information", path: "/help/accessibility" },
        ],
      },
    ],
  },
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
];

const MegaMenu = ({ columns, onItemClick }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-white shadow-lg rounded-lg min-w-[300px] sm:min-w-[600px] border-t-4 border-purple-600 animate-fadeIn">
    {columns.map((col, i) => (
      <div key={i}>
        <h4 className="font-bold text-purple-700 mb-3 pb-2 border-b border-gray-200">
          {col.heading}
        </h4>
        <Menu>
          {col.items.map((item, idx) => (
            <Menu.Item
              key={idx}
              onClick={() => onItemClick(item.path)}
              className="cursor-pointer py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 flex items-center group"
            >
              <span className="w-1 h-1 bg-purple-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    ))}
  </div>
);

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
      <DownOutlined
        className={`text-xs transition-transform duration-300 ${
          isActive ? "rotate-180" : ""
        }`}
      />
    </div>
    {isActive && (
      <div className="pl-6 pr-2 py-2 bg-gray-50 rounded-md mb-2 border-l-4 border-purple-600 animate-fadeIn">
        {menu.columns.map((col, i) => (
          <div key={i} className="mb-3">
            <h5 className="font-semibold text-purple-700 mb-2 border-b border-gray-200 pb-1">
              {col.heading}
            </h5>
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
);

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const router = useRouter();

  const showDrawer = () => setVisible(true);
  const onClose = () => {
    setVisible(false);
    setActiveMenu(null);
  };

  const handleItemClick = (path) => {
    router.push(path);
    onClose();
  };

  const toggleMobileMenu = (menuKey) => {
    setActiveMenu(activeMenu === menuKey ? null : menuKey);
  };

  return (
    <div className="fixed w-full top-0 left-0 z-50">
      {/* Top bar - Hidden on mobile */}
      <div className="hidden md:flex bg-white shadow-sm justify-between items-center px-2 md:px-16 py-2">
        <img
          onClick={() => router.push("/")}
          className="w-[150px] cursor-pointer"
          src="/assets/images/Logo1.png"
          alt="Logo"
        />
        <div className="flex items-center gap-4">
          <Button
            type="text"
            onClick={() => router.push("/download")}
            className="font-medium bg-[#e8d1ff]"
          >
            Download App
          </Button>
          <Button
            icon={<GlobalOutlined />}
            type="text"
            className="text-gray-700"
            onClick={() => alert("Country selector")}
          >
            AU
          </Button>
          <Button type="default" onClick={() => router.push("/login")}>
            Login
          </Button>
          <Button type="primary" onClick={() => router.push("/signup")}>
            Sign Up
          </Button>
        </div>
      </div>
      {/* Nav bar - Hidden on mobile */}
      <div className="hidden md:block bg-gradient-to-r from-[#4D2D7C] to-[#3a2160] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            {/* Left side navigation */}
            <div className="flex items-center space-x-1">
              <Button
                type="text"
                className="!text-white hover:!text-white hover:!bg-[#5d3d8c] !rounded-md !px-3 !h-9 !font-medium transition-colors duration-200"
                onClick={() => router.push("/")}
              >
                Home
              </Button>
              <Button
                type="text"
                className="!text-white hover:!text-white hover:!bg-[#5d3d8c] !rounded-md !px-3 !h-9 !font-medium transition-colors duration-200"
                onClick={() => router.push("/book-ride")}
              >
                Book a Ride
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
                  placement="bottomLeft"
                >
                  <button className="px-3 py-1.5 rounded-md hover:bg-[#5d3d8c] transition-colors duration-200 flex items-center gap-1">
                    {menu.label} <DownOutlined className="text-xs opacity-70" />
                  </button>
                </Dropdown>
              ))}
            </div>

            {/* Right side contact and social */}
            <div className="flex items-center space-x-4">
              {/* Phone number */}
              <a
                href="tel:132227"
                className="flex items-center gap-1.5 hover:text-yellow-200 transition-colors duration-200"
              >
                <div className="w-7 h-7 rounded-full bg-white bg-opacity-10 flex items-center justify-center">
                  <PhoneOutlined className="text-sm" />
                </div>
                <span className="font-medium">13 2227</span>
              </a>

              {/* Social media icons */}
              <div className="flex items-center space-x-3">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/");
                  }}
                  className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all duration-200"
                >
                  <img
                    className="w-4 h-4 object-contain"
                    src="/assets/images/Instagram-Logo.wine.svg"
                    alt="Instagram"
                  />
                </a>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/");
                  }}
                  className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all duration-200"
                >
                  <img
                    className="w-4 h-4 object-contain"
                    src="/assets/images/YouTube_full-color_icon_(2017).svg.webp"
                    alt="YouTube"
                  />
                </a>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/");
                  }}
                  className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all duration-200"
                >
                  <img
                    className="w-4 h-4 object-contain"
                    src="/assets/images/Facebook-f_Logo-Blue-Logo.wine.svg"
                    alt="Facebook"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile header */}
      <div className="md:hidden bg-[#4D2D7C] text-white px-4 py-3 flex justify-between items-center">
        <img
          onClick={() => router.push("/")}
          className="w-[120px] cursor-pointer"
          src="/assets/images/logo.png"
          alt="Logo"
        />
        <Button
          type="text"
          icon={<MenuOutlined className="!text-white text-xl" />}
          onClick={showDrawer}
          className="text-white border-none shadow-none"
        />
      </div>
      {/* Mobile Drawer */}
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
  );
};

export default Header;
