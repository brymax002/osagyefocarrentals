import { MapPin, Mail, Heart, Award, Users, Car } from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";
import WhatsAppButton from "../components/WhatsAppButton";

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Customers" },
    { icon: Car, number: "20+", label: "Quality Vehicles" },
    { icon: Award, number: "5", label: "Years Experience" },
    { icon: Heart, number: "100%", label: "Customer Satisfaction" }
  ];

  const values = [
    {
      title: "Reliability",
      description: "Every vehicle in our fleet undergoes regular maintenance and safety checks to ensure your peace of mind."
    },
    {
      title: "Affordability",
      description: "Quality service doesn't have to break the bank. We offer competitive rates with transparent pricing."
    },
    {
      title: "Flexibility",
      description: "Whether you need a car for an hour or a month, we have flexible rental options to suit your schedule."
    },
    {
      title: "Customer Care",
      description: "Our friendly team is always ready to help, from booking to return, ensuring a smooth experience."
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
                About Osagyefo Car Rentals
              </h1>
              <p className="text-premium">
                Your trusted partner for reliable, affordable, and comfortable transportation in Accra and beyond.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation 
                key={stat.label} 
                animation="fade-in" 
                delay={index * 150}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-in-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At Osagyefo Car Rentals, we believe that every journey should be smooth, comfortable, and affordable. 
                    Based in North Kaneshie, Accra, we've built a reputation as one of the most reliable and customer-friendly 
                    car rental services in the region.
                  </p>
                  <p>
                    Whether you're exploring the vibrant streets of Accra or heading out of town for business or leisure, 
                    our diverse fleet of well-maintained vehicles is ready to serve your every need.
                  </p>
                  <p>
                    Our commitment to excellence has made us the preferred choice for both locals and visitors who value 
                    quality service at competitive prices.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div className="card-premium p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "To provide a smooth, enjoyable, and affordable rental experience that exceeds our customers' 
                  expectations while building lasting relationships built on trust and reliability."
                </p>
                <WhatsAppButton text="Experience Our Service" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in">
            <h2 className="heading-section text-gradient">
              Why Choose Us?
            </h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {values.map((value, index) => (
              <ScrollAnimation 
                key={value.title} 
                animation="fade-in" 
                delay={index * 200}
              >
                <div className="card-premium p-6 hover-lift">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="heading-section text-gradient">
                Visit Our Location
              </h2>
              <p className="text-premium">
                Conveniently located in North Kaneshie, Accra for easy access.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-in-left">
              <div className="card-premium p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Our Address</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  H De Mod, Bush St, North Kaneshie, Accra, Ghana
                </p>
                
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Contact Info</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Email: addoemma246@gmail.com
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <WhatsAppButton text="Get Directions" />
                  <a 
                    href="https://maps.app.goo.gl/qkozKD115WMXPj2G7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-center"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-[var(--shadow-medium)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8234567!2d-0.2412345!3d5.5677891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzQnMDQuMCJOIDDCsDE0JzI4LjQiVw!5e0!3m2!1sen!2sgh!4v1635123456789!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Osagyefo Car Rentals Location"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;