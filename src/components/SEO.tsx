import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = "Osagyefo Car Rentals - Explore Accra & Beyond | Quality Car Rental Ghana",
  description = "Trusted car rental agency in North Kaneshie, Accra. Quality vehicles at affordable prices. 24/7 service, flexible options, and professional support. Book now on WhatsApp!",
  keywords = "car rental Accra, Ghana car rental, North Kaneshie car rental, affordable car rental, vehicle rental Ghana",
  image = "/og-image.jpg",
  url = "/",
  type = "website"
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (meta) {
        meta.content = content;
      } else {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `https://osagyefo-car-rentals.lovable.app${image}`, true);
    updateMetaTag('og:url', `https://osagyefo-car-rentals.lovable.app${url}`, true);
    updateMetaTag('og:type', type, true);
    
    // Update Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `https://osagyefo-car-rentals.lovable.app${image}`);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = `https://osagyefo-car-rentals.lovable.app${url}`;
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = `https://osagyefo-car-rentals.lovable.app${url}`;
      document.head.appendChild(canonical);
    }
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;