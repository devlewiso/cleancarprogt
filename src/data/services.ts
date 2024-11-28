import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'lavado-ejecutivo',
    title: 'Lavado Ejecutivo - Auto',
    description: 'Servicio premium que incluye limpieza profunda interior y exterior, con productos de alta calidad y atención al detalle.',
    price: 125,
    type: 'carro',
    details: [
      'Lavado exterior con shampoo premium',
      'Aspirado profundo de interiores',
      'Limpieza y protección de tablero',
      'Limpieza profunda de vidrios interior/exterior',
      'Limpieza de rines y llantas',
      'Aromatización premium',
      'Protección UV para tablero'
    ],
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80'
  },
  {
    id: 'lavado-personal',
    title: 'Lavado Personal - Auto',
    description: 'Servicio básico pero efectivo para mantener su vehículo limpio. Ideal para mantenimiento regular.',
    price: 75,
    type: 'carro',
    details: [
      'Lavado exterior completo',
      'Limpieza básica de vidrios',
      'Aspirado de interiores',
      'Limpieza de rines',
      'Aromatización básica'
    ],
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80'
  },
  {
    id: 'detailing',
    title: 'Detailing Completo',
    description: 'Tratamiento profesional integral que restaura y protege su vehículo, dejándolo en condiciones de exhibición.',
    price: 450,
    type: 'carro',
    details: [
      'Pulido profesional en tres etapas',
      'Encerado con cera de carnauba',
      'Limpieza profunda de interiores',
      'Tratamiento de cuero/tela especializado',
      'Protección cerámica para rines',
      'Restauración de plásticos exteriores',
      'Limpieza profunda de motor'
    ],
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80'
  },
  {
    id: 'moto',
    title: 'Lavado de Motocicleta',
    description: 'Servicio especializado para motos de cualquier cilindrada, con cuidado especial en partes sensibles.',
    price: 50,
    type: 'moto',
    details: [
      'Lavado completo con shampoo especial',
      'Limpieza y lubricación de cadena',
      'Pulido de partes cromadas',
      'Limpieza de asiento y plásticos',
      'Protección UV para plásticos'
    ],
    image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&q=80'
  },
  {
    id: 'camion',
    title: 'Lavado de Camión',
    description: 'Servicio especializado para vehículos pesados, adaptado a las necesidades específicas de camiones.',
    price: 200,
    type: 'camion',
    details: [
      'Lavado exterior con equipo especializado',
      'Limpieza de llantas y rines',
      'Limpieza completa de cabina',
      'Aspirado de interiores',
      'Limpieza de vidrios y espejos',
      'Aromatización'
    ],
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80'
  },
  {
    id: 'ceramic',
    title: 'Recubrimiento Cerámico',
    description: 'Protección premium de larga duración que mantiene su vehículo brillante y protegido contra elementos ambientales.',
    price: 800,
    type: 'carro',
    details: [
      'Descontaminación y corrección de pintura',
      'Aplicación de cerámica profesional',
      'Protección por 12-24 meses',
      'Protección UV y química avanzada',
      'Efecto hidrofóbico extremo',
      'Brillo intenso y profundo',
      'Incluye mantenimiento a los 6 meses'
    ],
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80'
  }
];