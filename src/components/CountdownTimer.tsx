import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-10-11T18:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="countdown-digit mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-pravesh-gold font-semibold text-sm md:text-lg uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center py-8">
      <div className="bg-card/30 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-pravesh-gold/20 glow-gold">
        <div className="text-center mb-6">
          <h3 className="text-title text-pravesh-gold mb-2">Event Countdown</h3>
          <p className="text-muted-foreground">October 11th, 2025 • 6:00 PM</p>
        </div>
        
        <div className="flex items-center justify-center">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="text-pravesh-gold text-4xl md:text-6xl font-bold mx-2">:</div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="text-pravesh-gold text-4xl md:text-6xl font-bold mx-2">:</div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <div className="text-pravesh-gold text-4xl md:text-6xl font-bold mx-2">:</div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;