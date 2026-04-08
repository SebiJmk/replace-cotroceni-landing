import { useState, useCallback } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <div className="min-h-screen">
      {!loaded && <LoadingScreen onComplete={handleComplete} />}
      <Header />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
