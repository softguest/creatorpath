// lib/whatsapp.ts
import { bootcampConfig } from "./bootcamp-config";

export function createWhatsAppUrl(message: string): string {
  if (!bootcampConfig.whatsappNumber) {
    return "#";
  }
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${bootcampConfig.whatsappNumber}?text=${encodedMessage}`;
}

export const whatsappMessages = {
  general: "Hello Boris, I am interested in joining the 30-Day Creator Bootcamp. I would like more information about the membership options.",
  starter: "Hello Boris, I am interested in the Creator Starter membership.",
  insider: "Hello Boris, I am interested in the Creator Insider membership.",
  accelerator: "Hello Boris, I am interested in applying for the Creator Accelerator.",
};