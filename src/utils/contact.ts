import { Service } from '../types';

export function createContactLinks(service: Service) {
  const emailSubject = encodeURIComponent(`Servicio de Lavado CleanCarProGT - ${service.title}`);
  const emailBody = encodeURIComponent(`
    Solicitud de servicio:
    Servicio: ${service.title}
    Precio: Q${service.price}
    Fecha: ${new Date().toLocaleDateString()}

    IMPORTANTE: Por favor adjunte una foto del vehículo de lado para evaluar el estado y tamaño del mismo.
    
    Este correo es una solicitud de servicio para CleanCarProGT.
  `);

  const messageText = encodeURIComponent(`
    Hola, me interesa el servicio de CleanCarProGT:
    ${service.title}
    Precio: Q${service.price}

    *Por favor, envíe una foto del vehículo de lado para proceder con la solicitud.*
  `);

  return {
    emailLink: `mailto:devlewiso@outlook.com?subject=${emailSubject}&body=${emailBody}`,
    whatsappLink: `https://api.whatsapp.com/send?text=${messageText}`,
    telegramLink: `https://t.me/share/url?url=https://cleancarprogt.com&text=${messageText}`
  };
}