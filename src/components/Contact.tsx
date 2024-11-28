import { MapPin, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <MapPin className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
            <p className="text-gray-600 text-center">Ruta CA-9, Guatemala<br />KM 10-24</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <Mail className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Correo</h3>
            <p className="text-gray-600">devlewiso@outlook.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}