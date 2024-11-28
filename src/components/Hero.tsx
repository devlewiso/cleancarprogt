export function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80"
          alt="Car Wash"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container mx-auto px-4 relative text-white">
        <h2 className="text-5xl font-bold mb-4">Lavado de Autos a Domicilio</h2>
        <p className="text-xl mb-8">El mejor servicio de lavado móvil en la Ruta al Atlántico</p>
        <a href="#servicios" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
          Ver Servicios
        </a>
      </div>
    </div>
  );
}