// Footer.js
import React, { useEffect, useState } from 'react';
import logo from "../assets/FS-logo10.jpg";

const Footer: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    setDarkMode(storedMode === 'true');
  }, []);

  return (
    <footer className={`py-10 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-300 text-gray-700'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src={logo}
              alt="Logo"
              className="w-40 mb-4 h-24 rounded-lg"
            />
            <p>The Comfort Technology Company.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Atención</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className={`hover:text-gray-800 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Contacto
                </a>
              </li>
              <li>
                <a href="/shipments" className={`hover:text-gray-800 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Envíos
                </a>
              </li>
              <li>
                <a href="/payments" className={`hover:text-gray-800 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Pagos y Seguridad
                </a>
              </li>
              <li>
                <a href="/regret-button" className={`hover:text-gray-800 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Botón de Regreso
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Información</h3>
            <ul className="space-y-2">
              <li>
                <a href="/exchanges-returns" className={`hover:text-gray-800 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Cambios y Devoluciones
                </a>
              </li>
              <li>
                <a href="/size-guides" className={`hover:text-gray-800 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Guías de Tallas
                </a>
              </li>
              <li>
                <a href="/faq" className={`hover:text-gray-800 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="/technologies" className={`hover:text-gray-800 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Tecnologías
                </a>
              </li>
              <li>
                <a href="/about-us" className={`hover:text-gray-800 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <a href="/women" className={`hover:text-gray-800 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Mujeres
                </a>
              </li>
              <li>
                <a href="/men" className={`hover:text-gray-800 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Hombres
                </a>
              </li>
              <li>
                <a href="/children" className={`hover:text-gray-800 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Niños
                </a>
              </li>
              <li>
                <a href="/promotions/30-off" className={`hover:text-gray-800 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  30% OFF
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          <p>
            © 2023 FS. Todos los derechos reservados | Diseñado y Desarrollado por Innovate Group | Socio de Shopify Plus
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
