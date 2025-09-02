import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import praveshLogo from '@/assets/pravesh-logo.png';
import CountdownTimer from './CountdownTimer';

interface HeroSectionProps {
  isVisible: boolean;
}

const HeroSection = ({ isVisible }: HeroSectionProps) => {
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Delay logo reveal for dramatic effect
      const timer = setTimeout(() => setLogoLoaded(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Spotlight Effect */}
      <div className="absolute inset-0 spotlight opacity-20" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pravesh-gold rounded-full animate-bounce-gentle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center">
          {/* Logo Section */}
          <div className={`mb-8 transition-all duration-1000 ${
            logoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <img 
              src={praveshLogo} 
              alt="Pravesh 2k25 Logo" 
              className="mx-auto max-w-2xl w-full h-auto logo-glow"
            />
          </div>

          {/* Main Heading */}
          <div className={`mb-6 transition-all duration-1000 delay-300 ${
            logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-hero bg-gradient-pravesh bg-clip-text text-transparent mb-4">
              PRAVESH 2K25
            </h1>
            <p className="text-xl md:text-2xl text-pravesh-gold font-semibold">
              The Ultimate Freshers Party Experience
            </p>
          </div>

          {/* Event Details */}
          <div className={`mb-8 transition-all duration-1000 delay-500 ${
            logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-card/20 backdrop-blur-lg rounded-2xl p-6 border border-pravesh-red/20 inline-block">
              <h2 className="text-display text-pravesh-white mb-2">October 11th, 2025</h2>
              <p className="text-lg text-muted-foreground mb-4">6:00 PM onwards • AC Banquet Hall</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-pravesh-red/20 text-pravesh-red px-3 py-1 rounded-full border border-pravesh-red/30">
                  🍽️ Unlimited Food
                </span>
                <span className="bg-pravesh-blue/20 text-pravesh-blue px-3 py-1 rounded-full border border-pravesh-blue/30">
                  ❄️ AC Banquet
                </span>
                <span className="bg-pravesh-gold/20 text-pravesh-gold px-3 py-1 rounded-full border border-pravesh-gold/30">
                  🎵 Live Performances
                </span>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className={`mb-12 transition-all duration-1000 delay-700 ${
            logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <CountdownTimer />
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-1000 ${
            logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              size="lg" 
              className="bg-gradient-pravesh hover:shadow-glow-red text-white text-xl px-12 py-6 rounded-full font-bold transition-all duration-300 hover:scale-105"
            >
              🎫 Book Your Pass Now
            </Button>
            <p className="text-sm text-muted-foreground mt-4 animate-pulse">
              ⚡ Limited Passes Available • Book Fast!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;