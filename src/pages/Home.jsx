import React, { useState } from "react";
import Navigation from "../components/layout/Navigation";
import HeroSection from "../sections/HeroSection";
import DashboardSection from "../sections/DashboardSection";
import CardsSection from "../sections/CardsSection";
import SubsidiesSection from "../sections/SubsidiesSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/layout/Footer";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <>
            <HeroSection setActiveSection={setActiveSection} />
            <DashboardSection />
            <CardsSection />
            <SubsidiesSection />
            <ContactSection />
          </>
        );
      case "dashboard":
        return <DashboardSection />;
      case "cards":
        return <CardsSection />;
      case "subsidies":
        return <SubsidiesSection />;
      default:
        return (
          <>
            <HeroSection setActiveSection={setActiveSection} />
            <DashboardSection />
            <CardsSection />
            <SubsidiesSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="pt-16 lg:pt-0">{renderContent()}</main>
      <Footer />
    </div>
  );
};

export default Home;
