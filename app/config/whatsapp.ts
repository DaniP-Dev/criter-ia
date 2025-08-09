// Configuración centralizada de WhatsApp
export const WHATSAPP_CONFIG = {
  phoneNumber: "3023603875",
  countryCode: "57", // Colombia
};

// Función para generar el link de WhatsApp
export const generateWhatsAppLink = (message?: string): string => {
  const encodedMessage = message ? encodeURIComponent(message) : "";
  const phoneWithCountryCode = `${WHATSAPP_CONFIG.countryCode}${WHATSAPP_CONFIG.phoneNumber}`;
  
  return `https://wa.me/${phoneWithCountryCode}${message ? `?text=${encodedMessage}` : ""}`;
};

// Mensajes predefinidos para diferentes secciones
export const WHATSAPP_MESSAGES = {
  banner: "¡Hola! Me interesa conocer más sobre los servicios de Criteria Comunicación Política",
  services: "Hola, me gustaría obtener más información sobre sus servicios de comunicación política",
  contact: "¡Hola! Me gustaría ponerme en contacto con el equipo de Criteria",
  general: "¡Hola! Me interesa conocer más sobre Criteria Comunicación Política",
};
