"use client";
import React, { useState } from "react";
import { Button, Drawer, Dropdown } from "antd";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  const createMegaMenu = (columns) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white shadow-md w-[600px]">
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
    <>
<div className="flex justify-between items-center p-4 md:px-16 shadow-md fixed !text-[#fff] w-full z-50 header-container">
      
        <img
          onClick={() => router.push("/")}
          className="w-[160px] cursor-pointer"
          src="/assets/images/logo.png"
          alt="Logo"
        />

       
        <div className="hidden md:flex gap-6 items-center !text-[#fff] ">
          <Button className="!text-[#fff] !font-medium !text-[18px]"  type="text" onClick={() => router.push("/")}>
            Home
          </Button>
          <Button className="!text-[#fff] !font-medium !text-[18px]"  type="text" onClick={() => router.push("/book-ride")}>
            Book a Ride
          </Button>
          <Dropdown overlay={menuItems.whatWeOffer} trigger={["hover"]}>
            <Button className="!text-[#fff] !font-medium !text-[18px]"  type="text">
              What We Offer <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={menuItems.pricing} trigger={["hover"]}>
            <Button className="!text-[#fff] !font-medium !text-[18px]"  type="text">
              Pricing <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={menuItems.drivers} trigger={["hover"]}>
            <Button className="!text-[#fff] !font-medium !text-[18px]"  type="text">
              Drivers <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={menuItems.corporate} trigger={["hover"]}>
            <Button className="!text-[#fff] !font-medium !text-[18px]"  type="text">
              Corporate Accounts <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={menuItems.help} trigger={["hover"]}>
            <Button className="!text-[#fff] !font-medium !text-[18px]"  type="text">
              Help & FAQs <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={menuItems.contact} trigger={["hover"]}>
            <Button className="!text-[#fff] !font-medium !text-[18px]"  type="text">
              Contact <DownOutlined />
            </Button>
          </Dropdown>

        
          <Button className="!text-[#fff]  Consult" type="link" onClick={() => router.push("/login")}>
            Login 
          </Button>
          <Button className="!text-[#fff]  Consult"  type="link" onClick={() => router.push("/SignUp")}>
            Sign Up
          </Button>
       
        </div>


        <div className="md:hidden">
          <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />
        </div>
      </div>

  
      <Drawer title="Menu" placement="right" onClose={onClose} open={visible}>
        <Button
          type="text"
          onClick={() => {
            router.push("/");
            onClose();
          }}
        >
          Home
        </Button>
        <Button
          type="text"
          onClick={() => {
            router.push("/book-ride");
            onClose();
          }}
        >
          Book a Ride
        </Button>
        {Object.entries(menuItems).map(([key, menu]) => (
          <Dropdown overlay={menu} key={key}>
            <Button
              type="text"
              onClick={onClose}
              className="text-left w-full mt-2"
            >
              {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
            </Button>
          </Dropdown>
        ))}
        <Button
          type="text"
          onClick={() => {
            router.push("/login");
            onClose();
          }}
        >
          Login / Sign Up
        </Button>
      </Drawer>
    </>
  );
};

export default Header;
