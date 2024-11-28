import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookie-consent', 'true', { expires: 365 });
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm mr-8">
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web.
          Al continuar navegando, acepta nuestra política de cookies.
        </p>
        <div className="flex gap-4">
          <a href="/politicas" className="text-blue-400 hover:text-blue-300">
            Más información
          </a>
          <button
            onClick={acceptCookies}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}