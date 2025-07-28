import { MessageCircle } from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";
import WhatsAppButton from "../components/WhatsAppButton";
import carSedan from "../assets/car-sedan.jpg";
import carSuv from "../assets/car-suv.jpg";
import carCompact from "../assets/car-compact.jpg";
import carPickup from "../assets/car-pickup.jpg";

const Fleet = () => {
  const vehicles = [
    {
      id: 1,
      name: "Premium Sedan",
      type: "Luxury",
      image: carSedan,
      features: ["4 Passengers", "Air Conditioning", "GPS Navigation", "Bluetooth"],
      description: "Perfect for business trips and comfortable city travel"
    },
    {
      id: 2,
      name: "Family SUV",
      type: "Spacious",
      image: carSuv,
      features: ["7 Passengers", "Large Cargo", "All-Weather", "Safety Features"],
      description: "Ideal for family trips and group adventures"
    },
    {
      id: 3,
      name: "Compact Car",
      type: "Economy",
      image: carCompact,
      features: ["4 Passengers", "Fuel Efficient", "Easy Parking", "City-Friendly"],
      description: "Great for city exploration and short trips"
    },
    {
      id: 4,
      name: "Pickup Truck",
      type: "Utility",
      image: carPickup,
      features: ["5 Passengers", "Large Bed", "Towing Capacity", "Off-Road Ready"],
      description: "Perfect for heavy-duty tasks and cargo transport"
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
          <div className="grid md:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <ScrollAnimation 
                key={vehicle.id} 
                animation="fade-in" 
                delay={index * 200}
              >
                <div className="card-fleet group">
                  {/* Image */}
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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