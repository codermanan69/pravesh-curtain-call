import { Clock, MapPin, Calendar, Users, Utensils, Music } from 'lucide-react';

const EventDetails = () => {
  const highlights = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Unlimited Food",
      description: "Delicious dinner buffet with variety of cuisines",
      color: "pravesh-red"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "AC Banquet Hall",
      description: "Premium air-conditioned venue with elegant ambiance",
      color: "pravesh-blue"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Live Performances",
      description: "Amazing live music, dance performances & entertainment",
      color: "pravesh-gold"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Interactive Games",
      description: "Fun games, prizes, and networking opportunities",
      color: "pravesh-red"
    }
  ];

  const eventInfo = [
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Date",
      value: "October 11th, 2025",
      color: "pravesh-red"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Time",
      value: "6:00 PM Onwards",
      color: "pravesh-blue"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Venue",
      value: "Grand Banquet Hall",
      color: "pravesh-gold"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display bg-gradient-pravesh bg-clip-text text-transparent mb-6">
            Event Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get ready for the most spectacular freshers party of the year! Here's what awaits you.
          </p>
        </div>

        {/* Event Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {eventInfo.map((info, index) => (
            <div 
              key={index}
              className="event-card bg-card/40 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${info.color}/20 border border-${info.color}/30 mb-4`}>
                <span className={`text-${info.color}`}>
                  {info.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{info.label}</h3>
              <p className={`text-${info.color} font-semibold text-lg`}>{info.value}</p>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="event-card bg-card/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center group"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-${highlight.color}/20 border border-${highlight.color}/30 mb-6 group-hover:scale-110 transition-all duration-300`}>
                <span className={`text-${highlight.color}`}>
                  {highlight.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{highlight.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Special Note */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-pravesh/10 backdrop-blur-lg rounded-2xl p-8 border border-pravesh-gold/30 max-w-4xl mx-auto">
            <h3 className="text-title text-pravesh-gold mb-4">
              🎉 Special Welcome for Freshers 🎉
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              This is your moment to shine! Join your seniors and fellow freshers for an unforgettable evening 
              of fun, food, and friendships. Come dressed to impress and get ready to create memories that 
              will last a lifetime!
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-pravesh-red/20 text-pravesh-red px-4 py-2 rounded-full border border-pravesh-red/30">
                Smart Casual Dress Code
              </span>
              <span className="bg-pravesh-blue/20 text-pravesh-blue px-4 py-2 rounded-full border border-pravesh-blue/30">
                Photography Allowed
              </span>
              <span className="bg-pravesh-gold/20 text-pravesh-gold px-4 py-2 rounded-full border border-pravesh-gold/30">
                Networking Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;