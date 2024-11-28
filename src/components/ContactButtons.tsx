import { Send, MessageCircle } from 'lucide-react';
import { Service } from '../types';
import { createContactLinks } from '../utils/contact';

interface ContactButtonsProps {
  service: Service;
}

export function ContactButtons({ service }: ContactButtonsProps) {
  const { emailLink, whatsappLink, telegramLink } = createContactLinks(service);

  return (
    <div className="mt-6 space-y-3">
      <a
        href={emailLink}
        className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-4 py-2 rounded-full transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 active:scale-95"
      >
        <Send size={20} className="transition-transform duration-300 group-hover:rotate-12" />
        Solicitar por correo
      </a>
      
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-green-600 text-white px-4 py-2 rounded-full transform transition-all duration-300 hover:bg-green-700 hover:scale-105 active:scale-95"
      >
        <MessageCircle size={20} className="transition-transform duration-300 group-hover:rotate-12" />
        WhatsApp
      </a>

      <a
        href={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-blue-500 text-white px-4 py-2 rounded-full transform transition-all duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95"
      >
        <MessageCircle size={20} className="transition-transform duration-300 group-hover:rotate-12" />
        Telegram
      </a>
    </div>
  );
}