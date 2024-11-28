export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">CleanCarProGT</h2>
          <p className="mb-4">Servicio Profesional de Lavado a Domicilio</p>
          <p className="text-gray-400">© {new Date().getFullYear()} CleanCarProGT. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}