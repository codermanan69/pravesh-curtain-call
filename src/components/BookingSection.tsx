import { Button } from '@/components/ui/button';
import { Ticket, Star, Clock, Users } from 'lucide-react';

const BookingSection = () => {
  const handleBookNow = () => {
    // Replace with actual BookMyShow URL when available
    window.open('https://in.bookmyshow.com', '_blank');
  };

  const passFeatures = [
    {
      icon: <Ticket className="w-6 h-6" />,
      title: "Entry Pass",
      description: "Guaranteed entry to the venue"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Unlimited Food",
      description: "Full dinner buffet included"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "VIP Experience",
      description: "Premium seating & priority service"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Early Access",
      description: "Special entry 30 mins before"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pravesh-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pravesh-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display bg-gradient-pravesh bg-clip-text text-transparent mb-6">
            Book Your Pass Now!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on the biggest freshers party of the year. Limited passes available!
          </p>
        </div>

        {/* Main Booking Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/40 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-pravesh-gold/30 shadow-dramatic">
            {/* Price Section */}
            <div className="text-center mb-8">
              <div className="bg-gradient-pravesh/10 rounded-2xl p-6 mb-6 border border-pravesh-red/20">
                <h3 className="text-title text-pravesh-gold mb-2">Early Bird Special</h3>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-3xl md:text-5xl font-black text-foreground">₹499</span>
                  <span className="text-xl text-muted-foreground line-through">₹799</span>
                  <span className="bg-pravesh-red text-white px-3 py-1 rounded-full text-sm font-bold">
                    38% OFF
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Limited time offer • Only 50 passes left!
                </p>
              </div>
            </div>

            {/* Pass Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {passFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pravesh-gold/20 border border-pravesh-gold/30 mb-4">
                    <span className="text-pravesh-gold">
                      {feature.icon}
                    </span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Booking Button */}
            <div className="text-center">
              <Button 
                onClick={handleBookNow}
                size="lg"
                className="bg-gradient-pravesh hover:shadow-glow-red text-white text-xl px-16 py-8 rounded-full font-bold transition-all duration-300 hover:scale-105 mb-4"
              >
                🎫 Book on BookMyShow
              </Button>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm mt-6">
                <span className="flex items-center text-pravesh-green">
                  ✅ Secure Payment
                </span>
                <span className="flex items-center text-pravesh-green">
                  ✅ Instant Confirmation
                </span>
                <span className="flex items-center text-pravesh-green">
                  ✅ Easy Refunds
                </span>
              </div>
            </div>

            {/* Urgency Banner */}
            <div className="mt-8 bg-pravesh-red/10 border border-pravesh-red/30 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-pravesh-red animate-pulse" />
                <span className="text-pravesh-red font-bold">LIMITED TIME OFFER!</span>
              </div>
              <p className="text-sm text-foreground">
                Only <span className="font-bold text-pravesh-red">50 passes</span> remaining at this price. 
                Price increases to ₹799 after early bird offer ends!
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-title text-pravesh-gold mb-4">Need Help?</h3>
            <p className="text-muted-foreground mb-6">
              Having trouble booking or have questions about the event? We're here to help!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                💬 WhatsApp Support
              </a>
              <a 
                href="mailto:help@pravesh2k25.com"
                className="bg-pravesh-blue hover:shadow-glow-blue text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                📧 Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;