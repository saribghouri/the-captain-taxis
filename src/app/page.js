"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./Header";
import ServicesCarousel from "@/components/services-carousel";
import HowItWorks from "@/components/how-it-works";
import DriveWithUs from "@/components/drive-with-us";
import Testimonials from "@/components/testimonials";
import AppPromotion from "@/components/app-promotion";
import Footer from "@/components/footer";
import CustomerBenefits from "@/components/customer-benefits";
import HeroSection from "@/components/hero-section";
import YourHelp from "@/components/your-help";
const App = () => {
  return (
    <div className="relative">
      <Header />

      <HeroSection />
      <CustomerBenefits />
      <HowItWorks />

      <ServicesCarousel />

      <DriveWithUs />

      <Testimonials />

      <AppPromotion />

      <YourHelp />

      <Footer />
    </div>
  );
};

export default App;
