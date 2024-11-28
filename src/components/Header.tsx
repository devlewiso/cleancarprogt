import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-bold relative group"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-100">
              CleanCarProGT
            </span>
            <span className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></span>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}