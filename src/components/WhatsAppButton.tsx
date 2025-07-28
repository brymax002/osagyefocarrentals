import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  variant?: "default" | "large" | "icon";
}

const WhatsAppButton = ({ 
  text = "Book Now", 
  className = "",
  variant = "default"
}: WhatsAppButtonProps) => {
  const baseClasses = "btn-whatsapp";
  
  const variantClasses = {
    default: "text-base",
    large: "text-lg px-8 py-4",
    icon: "p-3 rounded-full"
  };

  return (
    <a
      href="https://wa.me/233245720474"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle size={variant === "large" ? 24 : 20} />
      {variant !== "icon" && text}
    </a>
  );
};

export default WhatsAppButton;