import { useEffect, useState } from 'react';

const SponsorsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder sponsor data - replace with actual sponsor logos
  const sponsors = [
    { name: "TechCorp", logo: "🚀", tier: "title" },
    { name: "InnovateLab", logo: "💡", tier: "title" },
    { name: "FutureTech", logo: "⚡", tier: "gold" },
    { name: "StartupX", logo: "🌟", tier: "gold" },
    { name: "CreativeStudio", logo: "🎨", tier: "silver" },
    { name: "DigitalEdge", logo: "💻", tier: "silver" },
    { name: "NextGen", logo: "🔮", tier: "silver" },
    { name: "TechSolutions", logo: "🛠️", tier: "bronze" }
  ];

  const titleSponsors = sponsors.filter(s => s.tier === 'title');
  const goldSponsors = sponsors.filter(s => s.tier === 'gold');
  const silverSponsors = sponsors.filter(s => s.tier === 'silver');
  const bronzeSponsors = sponsors.filter(s => s.tier === 'bronze');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sponsors.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [sponsors.length]);

  const SponsorTier = ({ 
    title, 
    sponsors, 
    size, 
    color 
  }: { 
    title: string; 
    sponsors: typeof titleSponsors; 
    size: string; 
    color: string; 
  }) => (
    <div className="mb-12">
      <h3 className={`text-2xl font-bold text-${color} text-center mb-8`}>{title}</h3>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className={`sponsor-logo bg-card/30 backdrop-blur-lg rounded-2xl ${size} border border-white/10 flex items-center justify-center group cursor-pointer`}
          >
            <div className="text-center">
              <div className="text-4xl mb-2">{sponsor.logo}</div>
              <p className="text-sm font-semibold text-foreground group-hover:text-pravesh-gold transition-colors">
                {sponsor.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display bg-gradient-pravesh bg-clip-text text-transparent mb-6">
            Our Proud Sponsors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Special thanks to our amazing sponsors who make Pravesh 2k25 possible!
          </p>
        </div>

        {/* Title Sponsors */}
        <SponsorTier
          title="Title Sponsors"
          sponsors={titleSponsors}
          size="w-48 h-32"
          color="pravesh-gold"
        />

        {/* Gold Sponsors */}
        <SponsorTier
          title="Gold Sponsors"
          sponsors={goldSponsors}
          size="w-40 h-28"
          color="pravesh-red"
        />

        {/* Silver Sponsors */}
        <SponsorTier
          title="Silver Sponsors"
          sponsors={silverSponsors}
          size="w-32 h-24"
          color="pravesh-blue"
        />

        {/* Bronze Sponsors */}
        <SponsorTier
          title="Bronze Sponsors"
          sponsors={bronzeSponsors}
          size="w-28 h-20"
          color="foreground"
        />

        {/* Moving Banner */}
        <div className="mt-16 overflow-hidden">
          <div className="bg-gradient-pravesh/10 backdrop-blur-lg rounded-2xl p-6 border border-pravesh-gold/30">
            <div className="flex items-center justify-center space-x-8 animate-pulse">
              <span className="text-pravesh-gold font-bold text-lg">✨ Proudly Sponsored By ✨</span>
              <div className="flex space-x-6">
                {sponsors.slice(currentSlide, currentSlide + 3).map((sponsor, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-2xl">{sponsor.logo}</span>
                    <span className="text-foreground font-semibold">{sponsor.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center">
          <div className="bg-card/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-title text-pravesh-gold mb-4">
              Want to Partner With Us?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our amazing sponsors and get your brand in front of 500+ energetic freshers and students!
            </p>
            <button className="bg-gradient-pravesh hover:shadow-glow-red text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;