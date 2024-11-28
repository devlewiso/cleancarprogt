export function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Información que Recolectamos</h2>
            <p className="text-gray-600 mb-4">
              En CleanCarProGT, nos comprometemos a proteger su privacidad. Solo recolectamos
              información necesaria para brindar nuestros servicios, incluyendo:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Información de contacto (correo electrónico)</li>
              <li>Detalles del servicio solicitado</li>
              <li>Fecha y hora de la solicitud</li>
              <li>Fotografías del vehículo proporcionadas por el cliente</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Uso de Cookies</h2>
            <p className="text-gray-600">
              Utilizamos cookies para mejorar su experiencia en nuestro sitio web.
              Estas nos ayudan a entender cómo interactúa con nuestro contenido
              y recordar sus preferencias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
            <p className="text-gray-600">
              Si tiene preguntas sobre nuestra política de privacidad,
              puede contactarnos en devlewiso@outlook.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}