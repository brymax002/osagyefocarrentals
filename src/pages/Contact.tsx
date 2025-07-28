import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hello! I'm ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/233245720474?text=${encodedMessage}`, '_blank');
    
    // Show success toast
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message has been prepared for WhatsApp.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-16">
      <SEO 
        title="Contact Osagyefo Car Rentals | Book Your Vehicle in Accra, Ghana"
        description="Contact Osagyefo Car Rentals for vehicle bookings. WhatsApp: +233 24 572 0474, Email: addoemma246@gmail.com. Located in North Kaneshie, Accra. 24/7 support available."
        keywords="contact car rental Accra, book car rental Ghana, North Kaneshie car rental contact, WhatsApp car booking Ghana, Accra car rental phone number"
        url="/contact"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent to-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-hero text-gradient mb-6">
                Get In Touch
              </h1>
              <p className="text-premium">
                Ready to book your vehicle or have questions? We're here to help 24/7.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ScrollAnimation animation="slide-in-left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gradient">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Reach out to us through any of the following channels. 
                    We respond quickly and are always ready to assist with your car rental needs.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/30 hover-lift">
                    <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">WhatsApp</h3>
                      <p className="text-muted-foreground">+233 24 572 0474</p>
                      <span className="text-sm text-[#25D366]">Fastest response • Available 24/7</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/30 hover-lift">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">addoemma246@gmail.com</p>
                      <span className="text-sm text-primary">Professional inquiries welcome</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/30 hover-lift">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Visit Us</h3>
                      <p className="text-muted-foreground">H De Mod, Bush St</p>
                      <p className="text-muted-foreground">North Kaneshie, Accra, Ghana</p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <WhatsAppButton text="Chat on WhatsApp" variant="large" />
                  <a 
                    href="mailto:addoemma246@gmail.com"
                    className="btn-secondary text-center"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact Form */}
            <ScrollAnimation animation="slide-in-right">
              <div className="card-premium p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Send Us a Message
                </h3>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll send your message via WhatsApp for the fastest response.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your rental needs, dates, vehicle preferences, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-hero flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send via WhatsApp
                  </button>
                </form>

                <div className="mt-4 p-4 bg-accent/20 rounded-xl">
                  <p className="text-sm text-muted-foreground text-center">
                    <MessageCircle className="w-4 h-4 inline mr-1" />
                    Your message will open in WhatsApp for instant delivery
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="heading-section text-gradient">
                Find Our Location
              </h2>
              <p className="text-premium">
                Located in the heart of North Kaneshie for easy access from anywhere in Accra.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" delay={300}>
            <div className="max-w-4xl mx-auto">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
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
              <div className="text-center mt-6">
                <a 
                  href="https://maps.app.goo.gl/qkozKD115WMXPj2G7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in">
            <h2 className="heading-section text-gradient">
              Frequently Asked Questions
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
            {[
              {
                question: "What types of vehicles do you offer?",
                answer: "We offer compact cars, sedans, SUVs, and pickup trucks, depending on your needs."
              },
              {
                question: "Do I need a Ghanaian driver's license?",
                answer: "We accept both Ghanaian and valid international driver's licenses."
              },
              {
                question: "Is there a deposit required?",
                answer: "Yes, a small refundable security deposit is typically required. Details will be shared at booking."
              },
              {
                question: "Can I rent a car with a driver?",
                answer: "Yes, we offer chauffeur services upon request."
              },
              {
                question: "Do you offer airport pickups?",
                answer: "Absolutely! Just let us know your flight details and we'll handle the rest."
              },
              {
                question: "How do I make a booking?",
                answer: "Bookings can be made directly via WhatsApp for the fastest service."
              }
            ].map((faq, index) => (
              <ScrollAnimation 
                key={index} 
                animation="fade-in" 
                delay={index * 100}
              >
                <div className="card-premium p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;