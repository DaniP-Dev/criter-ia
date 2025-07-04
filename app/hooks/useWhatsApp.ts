import { useCallback } from "react";
import { generateWhatsAppLink, WHATSAPP_MESSAGES } from "../config/whatsapp";

type WhatsAppSection = keyof typeof WHATSAPP_MESSAGES;

export const useWhatsApp = () => {
  const openWhatsApp = useCallback((section: WhatsAppSection = "general", customMessage?: string) => {
    const message = customMessage || WHATSAPP_MESSAGES[section];
    const whatsappUrl = generateWhatsAppLink(message);
    
    // Abrir en una nueva ventana/pestaña
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }, []);

  const getWhatsAppLink = useCallback((section: WhatsAppSection = "general", customMessage?: string) => {
    const message = customMessage || WHATSAPP_MESSAGES[section];
    return generateWhatsAppLink(message);
  }, []);

  return {
    openWhatsApp,
    getWhatsAppLink,
  };
};
