import { ArrowRight, Star, Quote, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import WhatsAppButton from "../components/WhatsAppButton";
import heroBanner from "../assets/hero-banner.jpg";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted & Reliable",
      description: "Backed by numerous positive reviews and years of trusted service in Accra."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support to ensure your journey is smooth and worry-free."
    },
    {
      icon: Star,
      title: "Quality Vehicles",
      description: "Well-maintained, clean vehicles that undergo regular safety inspections."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Friendly, professional service with flexible options to meet your every need."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 35, 126, 0.7), rgba(26, 35, 126, 0.5)), url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <ScrollAnimation animation="fade-in">
            <h1 className="heading-hero text-white mb-6">
              Explore Accra & Beyond with{" "}
              <span className="text-gradient bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">
                Osagyefo Car Rentals
              </span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" delay={300}>
            <p className="text-premium text-white/90 mb-8 max-w-3xl mx-auto">
              A trusted car rental agency in North Kaneshie. Quality vehicles at affordable prices.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton text="Book Now on WhatsApp" variant="large" />
              <Link 
                to="/fleet" 
                className="btn-secondary flex items-center gap-2 bg-white/10 border border-white/20 text-white hover:bg-white/20"
              >
                View Our Fleet
                <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in">
            <h2 className="heading-section text-gradient">
              Why Choose Osagyefo?
            </h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <ScrollAnimation 
                key={feature.title} 
                animation="fade-in" 
                delay={index * 200}
              >
                <div className="card-premium p-6 text-center hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Fleet Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="heading-section text-gradient">
                Our Premium Fleet
              </h2>
              <p className="text-premium mt-4">
                From luxury sedans to spacious SUVs, we have the perfect vehicle for every journey.
              </p>
            </div>
          </ScrollAnimation>
          
          {/* Featured Vehicles */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ScrollAnimation animation="fade-in" delay={200}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-[0_4px_16px_hsl(237_85%_31%_/_0.15)] hover:shadow-[0_8px_32px_hsl(237_85%_31%_/_0.2)] transform hover:scale-105 transition-all duration-500">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src="/lovable-uploads/5d9f71e6-d446-4b6d-b6e6-4ae458f39203.png" 
                    alt="Toyota Land Cruiser"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Premium SUV
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Toyota Land Cruiser</h3>
                  <p className="text-muted-foreground text-sm mb-3">Ultimate luxury SUV for VIP travel</p>
                  <a
                    href="https://wa.me/233245720474"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full text-center text-sm"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={400}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-[0_4px_16px_hsl(237_85%_31%_/_0.15)] hover:shadow-[0_8px_32px_hsl(237_85%_31%_/_0.2)] transform hover:scale-105 transition-all duration-500">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src="/lovable-uploads/e894ce23-fca4-442a-84c8-7dd1c517fabf.png" 
                    alt="Mercedes CLA"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Luxury Sedan
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Mercedes CLA</h3>
                  <p className="text-muted-foreground text-sm mb-3">Elegant sedan for business occasions</p>
                  <a
                    href="https://wa.me/233245720474"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full text-center text-sm"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={600}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-[0_4px_16px_hsl(237_85%_31%_/_0.15)] hover:shadow-[0_8px_32px_hsl(237_85%_31%_/_0.2)] transform hover:scale-105 transition-all duration-500">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src="/lovable-uploads/b985a8b8-2e75-4984-8e1e-39d300088939.png" 
                    alt="Luxury Bus"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Group Transport
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Luxury Bus</h3>
                  <p className="text-muted-foreground text-sm mb-3">Perfect for group tours and events</p>
                  <a
                    href="https://wa.me/233245720474"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full text-center text-sm"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          
          <ScrollAnimation animation="fade-in" delay={800}>
            <div className="text-center">
              <Link 
                to="/fleet" 
                className="btn-hero inline-flex items-center gap-2"
              >
                Explore All Vehicles
                <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="heading-section text-gradient">
                What Our Customers Say
              </h2>
              <p className="text-premium mt-4">
                Trusted by hundreds of satisfied customers across Ghana and beyond.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Review 1 */}
            <ScrollAnimation animation="fade-in" delay={200}>
              <div className="card-premium p-6 relative">
                <Quote className="w-8 h-8 text-secondary absolute top-4 right-4 opacity-50" />
                
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "Excellent service! I needed a car for airport pickup and Osagyefo delivered exactly as promised. 
                  The driver was professional, the vehicle was clean, and the price was very reasonable. 
                  Will definitely use them again for my business trips to Accra."
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">KA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Kwame Asante</h4>
                    <p className="text-sm text-muted-foreground">Business Executive</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Review 2 */}
            <ScrollAnimation animation="fade-in" delay={400}>
              <div className="card-premium p-6 relative">
                <Quote className="w-8 h-8 text-secondary absolute top-4 right-4 opacity-50" />
                
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "Outstanding family trip experience! We rented a Toyota Highlander for our family vacation 
                  and it was perfect. Spacious, comfortable, and well-maintained. The team was very helpful 
                  with recommendations for places to visit. Highly recommended!"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">AM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Akosua Mensah</h4>
                    <p className="text-sm text-muted-foreground">Family Traveler</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Review 3 */}
            <ScrollAnimation animation="fade-in" delay={600}>
              <div className="card-premium p-6 relative">
                <Quote className="w-8 h-8 text-secondary absolute top-4 right-4 opacity-50" />
                
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "Reliable and trustworthy service! I've used Osagyefo Car Rentals multiple times for 
                  both business and personal trips. Their WhatsApp booking system is so convenient, 
                  and they're always available when I need them. Great value for money!"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">JO</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">John Osei</h4>
                    <p className="text-sm text-muted-foreground">Regular Customer</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Review Stats */}
          <ScrollAnimation animation="fade-in" delay={800}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground text-sm">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.9</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground text-sm">Customer Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground text-sm">Support Available</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Call to Action */}
          <ScrollAnimation animation="fade-in" delay={1000}>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Join hundreds of satisfied customers who trust Osagyefo Car Rentals
              </p>
              <WhatsAppButton 
                text="Book Your Vehicle Today" 
                variant="large"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Book your perfect vehicle today and experience the best car rental service in Accra.
            </p>
            <WhatsAppButton 
              text="Get Started - Book on WhatsApp" 
              variant="large"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            />
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Home;