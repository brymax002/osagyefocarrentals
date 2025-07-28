import { MessageCircle } from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";
import WhatsAppButton from "../components/WhatsAppButton";

const Fleet = () => {
  const vehicles = [
    {
      id: 1,
      name: "Luxury Bus",
      type: "Group Transport",
      image: "/lovable-uploads/b985a8b8-2e75-4984-8e1e-39d300088939.png",
      features: ["30+ Passengers", "Air Conditioning", "Long Distance", "Group Events"],
      description: "Perfect for group tours, events, and long-distance travel"
    },
    {
      id: 2,
      name: "Toyota Land Cruiser",
      type: "Premium SUV",
      image: "/lovable-uploads/5d9f71e6-d446-4b6d-b6e6-4ae458f39203.png",
      features: ["7 Passengers", "4WD Capability", "Premium Interior", "Off-Road Ready"],
      description: "Ultimate luxury SUV for VIP travel and adventure"
    },
    {
      id: 3,
      name: "Mercedes CLA",
      type: "Luxury Sedan",
      image: "/lovable-uploads/e894ce23-fca4-442a-84c8-7dd1c517fabf.png",
      features: ["4 Passengers", "Premium Comfort", "Business Class", "City Driving"],
      description: "Elegant sedan for business meetings and special occasions"
    },
    {
      id: 4,
      name: "Toyota Sedan",
      type: "Executive",
      image: "/lovable-uploads/2cc744ad-b192-413c-93c8-cb63a6eee860.png",
      features: ["5 Passengers", "Fuel Efficient", "Reliable", "Professional"],
      description: "Professional transportation for business and daily use"
    },
    {
      id: 5,
      name: "Honda CR-V",
      type: "Compact SUV",
      image: "/lovable-uploads/eabf2ecc-29b3-4b63-b19c-1fb095f5add4.png",
      features: ["5 Passengers", "Cargo Space", "All-Weather", "City & Highway"],
      description: "Versatile SUV perfect for families and city adventures"
    },
    {
      id: 6,
      name: "Toyota Highlander",
      type: "Family SUV",
      image: "/lovable-uploads/543365ac-1ca0-4939-9c56-979b20de107e.png",
      features: ["8 Passengers", "Large Interior", "Safety Features", "Family-Friendly"],
      description: "Spacious family vehicle for comfortable group travel"
    },
    {
      id: 7,
      name: "Mitsubishi Outlander",
      type: "Adventure SUV",
      image: "/lovable-uploads/7cccefb7-b8b4-47be-9be2-e933c258bbe7.png",
      features: ["7 Passengers", "All-Terrain", "Modern Tech", "Efficient"],
      description: "Modern SUV with advanced features and capability"
    },
    {
      id: 8,
      name: "Toyota Camry",
      type: "Premium Sedan",
      image: "/lovable-uploads/f0cefc26-8cb2-4884-a517-de53d94c1fac.png",
      features: ["5 Passengers", "Smooth Ride", "Reliability", "Comfort"],
      description: "Reliable and comfortable sedan for all occasions"
    },
    {
      id: 9,
      name: "Toyota Land Cruiser VX",
      type: "Luxury Off-Road",
      image: "/lovable-uploads/5946f44d-7bab-4706-876b-6fa6f9f8df5e.png",
      features: ["8 Passengers", "Premium 4WD", "Luxury Interior", "Ultimate Power"],
      description: "Top-tier luxury SUV for the most demanding journeys"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent to-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-hero text-gradient mb-6">
                Our Premium Fleet
              </h1>
              <p className="text-premium">
                Choose from our diverse collection of well-maintained vehicles, 
                perfect for every occasion and budget.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <ScrollAnimation 
                key={vehicle.id} 
                animation="fade-in" 
                delay={index * 200}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-[0_4px_16px_hsl(237_85%_31%_/_0.15)] hover:shadow-[0_8px_32px_hsl(237_85%_31%_/_0.2)] transform hover:scale-105 transition-all duration-500">
                  {/* Image */}
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {vehicle.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">
                      {vehicle.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {vehicle.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {vehicle.features.map((feature) => (
                        <div 
                          key={feature}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-secondary rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Book Button */}
                    <a
                      href="https://wa.me/233245720474"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={20} />
                      Book This Car
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-in-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                  What's Included
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    </div>
                    <span className="text-muted-foreground">Comprehensive insurance coverage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    </div>
                    <span className="text-muted-foreground">24/7 roadside assistance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    </div>
                    <span className="text-muted-foreground">Regular maintenance and cleaning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    </div>
                    <span className="text-muted-foreground">Flexible pickup and drop-off</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div className="card-premium p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Can't Find What You Need?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're constantly updating our fleet and may have additional vehicles available. 
                  Contact us to discuss your specific requirements.
                </p>
                <WhatsAppButton text="Ask About Other Vehicles" variant="large" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Book Your Vehicle?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get instant quotes and availability by contacting us on WhatsApp.
            </p>
            <WhatsAppButton 
              text="Get Instant Quote" 
              variant="large"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            />
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Fleet;