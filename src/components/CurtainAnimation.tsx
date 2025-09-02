import { useEffect, useState } from 'react';

interface CurtainAnimationProps {
  onAnimationComplete: () => void;
}

const CurtainAnimation = ({ onAnimationComplete }: CurtainAnimationProps) => {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Start opening animation after a brief delay
    const timer = setTimeout(() => {
      setIsOpening(true);
      // Call completion callback after animation finishes
      setTimeout(onAnimationComplete, 2000);
    }, 500);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className={`curtain ${isOpening ? 'curtain-open' : ''}`}>
      {/* Left Curtain */}
      <div className="curtain-left">
        <div className="absolute inset-0 bg-gradient-to-r from-pravesh-red via-pravesh-red to-pravesh-blue opacity-90" />
        <div className="absolute inset-0 opacity-20 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      {/* Right Curtain */}
      <div className="curtain-right">
        <div className="absolute inset-0 bg-gradient-to-l from-pravesh-blue via-pravesh-blue to-pravesh-red opacity-90" />
        <div className="absolute inset-0 opacity-20 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      {/* Center Logo Preview */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-pravesh-gold text-4xl md:text-6xl font-black animate-pulse-glow">
          PRAVESH 2K25
        </div>
      </div>
    </div>
  );
};

export default CurtainAnimation;