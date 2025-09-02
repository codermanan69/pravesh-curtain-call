import { useState, useEffect } from 'react';
import CurtainAnimation from '@/components/CurtainAnimation';
import HeroSection from '@/components/HeroSection';
import EventDetails from '@/components/EventDetails';
import SponsorsSection from '@/components/SponsorsSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showCurtain, setShowCurtain] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleCurtainComplete = () => {
    setShowCurtain(false);
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Curtain Animation */}
      {showCurtain && <CurtainAnimation onAnimationComplete={handleCurtainComplete} />}
      
      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {showContent && (
          <>
            <HeroSection isVisible={showContent} />
            <EventDetails />
            <SponsorsSection />
            <BookingSection />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
