import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin, Clock } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-white hover:bg-blue-700 rounded-lg transition-colors"
        aria-label="Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <div
        className={`
          absolute top-full right-0 w-64 bg-blue-600 rounded-lg shadow-lg mt-2 transition-all duration-300 transform origin-top-right
          md:hidden
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
        `}
      >
        <div className="p-4 space-y-4">
          <Link
            to="/"
            className="block text-white hover:bg-blue-700 rounded px-3 py-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <a
            href="#servicios"
            className="block text-white hover:bg-blue-700 rounded px-3 py-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </a>
          <a
            href="#contacto"
            className="block text-white hover:bg-blue-700 rounded px-3 py-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
          <div className="pt-2 border-t border-blue-500">
            <div className="flex items-center gap-2 px-3 py-2 text-white">
              <MapPin size={20} />
              <span>Ruta CA-9, KM 10-24</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 text-white">
              <Clock size={20} />
              <span>7:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex md:items-center md:gap-6">
        <div className="flex items-center gap-2 group cursor-pointer">
          <MapPin size={20} className="transition-transform duration-300 group-hover:scale-110" />
          <span className="transition-colors duration-300 group-hover:text-blue-100">
            Ruta CA-9, KM 10-24
          </span>
        </div>
        <div className="flex items-center gap-2 group cursor-pointer">
          <Clock size={20} className="transition-transform duration-300 group-hover:scale-110" />
          <span className="transition-colors duration-300 group-hover:text-blue-100">
            7:00 - 18:00
          </span>
        </div>
      </div>
    </nav>
  );
}