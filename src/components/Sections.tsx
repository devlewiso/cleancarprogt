import { useState } from 'react';
import { sections } from '../data/sections';

export function Sections() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Información</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center transition-all duration-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-inset"
                onClick={() => toggleSection(section.id)}
              >
                <span className="font-semibold transition-colors duration-300 hover:text-blue-600">{section.title}</span>
                <span className={`transform transition-all duration-300 ${openSection === section.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  openSection === section.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 border-t bg-gray-50">
                  <p className="text-gray-600">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}