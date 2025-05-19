"use client";
import React, { useState } from "react";
import { Button, Drawer, Dropdown } from "antd";
import { MenuOutlined, DownOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  const createMegaMenu = (columns) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-white shadow-md min-w-[300px] sm:min-w-[600px]">
      {columns.map((col, i) => (
        <div key={i}>
          <h4 className="font-bold mb-2">{col.heading}</h4>
          {col.items.map((item, idx) => (
            <div
              key={idx}
              className="cursor-pointer text-gray-700 hover:underline"
              onClick={() => {
                router.push(item.path);
                onClose();
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  const menuItems = {
    whatWeOffer: createMegaMenu([
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
          { label: "Parcel Delivery Service", path: "/services/parcel-delivery" },
          { label: "Events & Weddings Service", path: "/services/events-weddings" },
          { label: "Corporate Travel Service", path: "/services/corporate-travel" },
          { label: "Sydney Taxi Tourist Tour", path: "/services/tourist-tour" },
        ],
      },
    ]),
    pricing: createMegaMenu([
      {
        heading: "Pricing",
        items: [
          { label: "Fare Estimator", path: "/pricing/fare-estimator" },
          { label: "TTSS Subsidy Scheme", path: "/pricing/ttss-subsidy" },
        ],
      },
    ]),
    drivers: createMegaMenu([
      {
        heading: "Drivers",
        items: [
          { label: "Why Drive with Us", path: "/drivers/why-drive" },
          { label: "Become a Driver", path: "/drivers/join" },
        ],
      },
    ]),
    corporate: createMegaMenu([
      {
        heading: "Corporate Accounts",
        items: [
          { label: "Business Accounts", path: "/corporate/business" },
          { label: "Event Transfers", path: "/corporate/events" },
          { label: "Airport Shuttles", path: "/corporate/airport" },
        ],
      },
    ]),
    help: createMegaMenu([
      {
        heading: "Help & FAQs",
        items: [
          { label: "Booking Help", path: "/help/booking" },
          { label: "Payment Questions", path: "/help/payment" },
          { label: "Accessibility Information", path: "/help/accessibility" },
        ],
      },
    ]),
    contact: createMegaMenu([
      {
        heading: "Contact",
        items: [
          { label: "Customer Support", path: "/contact/customer-support" },
          { label: "Driver Support", path: "/contact/driver-support" },
        ],
      },
    ]),
  };

  return (
    <div className="fixed w-full top-0 left-0 z-50">
      {/* Top bar */}
      <div className=" bg-[#fff]  shadow-sm flex justify-between items-center px-2 md:px-16 py-2">
        <img
          onClick={() => router.push("/")}
          className="w-[150px]  cursor-pointer"
          src="/assets/images/logo1.png"
          alt="Logo"
        />
        <div className="hidden md:flex items-center gap-4">
          <Button type="text" onClick={() => router.push("/download")} className="font-medium !bg-[#e8d1ff]">
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
          <Button className="Consult" type="default" onClick={() => router.push("/login")}>
            Login
          </Button>
          <Button
            type="primary"
            className=" Consult  "
            onClick={() => router.push("/signup")}
          >
            Sign Up
          </Button>
        </div>
        <div className="md:hidden">
          <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />
        </div>
      </div>

      {/* Nav bar */}
      <div className="bg-[#4D2D7C] text-white px-4 md:px-16 py-3 flex flex-wrap items-center justify-between text-sm">
        <div className="flex flex-wrap items-center gap-4">
          <Button type="text" className="!text-white !p-0" onClick={() => router.push("/")}>
            Home
          </Button>
          <Button type="text" className="!text-white" onClick={() => router.push("/book-ride")}>
            Book a Ride
          </Button>
          <Dropdown overlay={menuItems.whatWeOffer} trigger={["click"]}>
            <span className="cursor-pointer hover:underline">What We Offer <DownOutlined /></span>
          </Dropdown>
          <Dropdown overlay={menuItems.pricing} trigger={["hover"]}>
            <span className="cursor-pointer hover:underline">Pricing <DownOutlined /></span>
          </Dropdown>
          <Dropdown overlay={menuItems.drivers} trigger={["hover"]}>
            <span className="cursor-pointer hover:underline">Drivers <DownOutlined /></span>
          </Dropdown>
          <Dropdown overlay={menuItems.corporate} trigger={["hover"]}>
            <span className="cursor-pointer hover:underline">Corporate Accounts <DownOutlined /></span>
          </Dropdown>
          <Dropdown overlay={menuItems.help} trigger={["hover"]}>
            <span className="cursor-pointer hover:underline !rounded-[50px]">Help & FAQs <DownOutlined /></span>
          </Dropdown>
          <Dropdown overlay={menuItems.contact} trigger={["hover"]}>
            <span className="cursor-pointer hover:underline">Contact <DownOutlined /></span>
          </Dropdown>
        </div>
        <div className="flex items-center gap-2 mt-3 md:mt-0 text-[#fff] font-semibold">
          <PhoneOutlined /> 13 2227
          
           <img
          onClick={() => router.push("/")}
          className=" w-[40px] cursor-pointer"
          src="/assets/images/Instagram-Logo.wine.svg"
          alt="Logo"
        />
           <img
          onClick={() => router.push("/")}
          className=" w-[22px] cursor-pointer"
          src="/assets/images/YouTube_full-color_icon_(2017).svg.webp"
          alt="Logo"
        />
         <img
          onClick={() => router.push("/")}
          className="w-[40px] cursor-pointer"
          src="/assets/images/Facebook-f_Logo-Blue-Logo.wine.svg"
          alt="Logo"
        />
       
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer title="Menu" placement="right" onClose={onClose} open={visible}>
        <Button type="text" onClick={() => { router.push("/"); onClose(); }}>Home</Button>
        <Button type="text" onClick={() => { router.push("/book-ride"); onClose(); }}>Book a Ride</Button>
        {Object.entries(menuItems).map(([key, menu]) => (
          <Dropdown overlay={menu} key={key}>
            <Button type="text" onClick={onClose} className="text-left w-full mt-2">
              {key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
            </Button>
          </Dropdown>
        ))}
        <Button type="text" onClick={() => { router.push("/login"); onClose(); }}>Login / Sign Up</Button>
      </Drawer>
    </div>
  );
};

export default Header;
