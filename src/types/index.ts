export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  type: 'moto' | 'carro' | 'camion';
  details: string[];
  image: string;
}

export interface Section {
  id: string;
  title: string;
  content: string;
}