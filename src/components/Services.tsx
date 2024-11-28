import { useState } from 'react';
import { services } from '../data/services';
import { ServiceModal } from './ServiceModal';
import type { Service } from '../types';

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Nuestros Servicios</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ofrecemos servicios profesionales de lavado y detailing para todo tipo de vehículos,
          con la comodidad de atención a domicilio en la Ruta al Atlántico.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4 h-20">{service.description}</p>
                <ul className="text-sm text-gray-500 mb-4 space-y-1">
                  {service.details.slice(0, 3).map((detail, index) => (
                    <li key={index} className="flex items-center group-hover:text-gray-700 transition-colors">
                      <span className="mr-2 text-blue-600">•</span>
                      {detail}
                    </li>
                  ))}
                  {service.details.length > 3 && (
                    <li 
                      className="text-blue-600 cursor-pointer hover:text-blue-700 transition-colors" 
                      onClick={() => openModal(service)}
                    >
                      Ver más detalles...
                    </li>
                  )}
                </ul>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-blue-600 group-hover:scale-105 transition-transform">Q{service.price}</p>
                  <button
                    onClick={() => openModal(service)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 active:scale-95"
                  >
                    Solicitar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}