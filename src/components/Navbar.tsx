import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">GSWISP Internet</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#pocetna" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Početna</a>
            <a href="#paketi" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Internet paketi</a>
            <a href="#optika" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Optička mreža</a>
            <a href="#bezicni" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Fiksni bežični internet</a>
            <a href="#pokrivenost" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Pokrivenost</a>
            <a href="#o-nama" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">O nama</a>
            <a href="#kontakt" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Kontakt</a>
            <div className="flex flex-col items-end">
              <a href="tel:+385985353333" className="flex items-center text-blue-600 dark:text-blue-400">
                <Phone className="h-4 w-4 mr-2" />
                098 535 333
              </a>
              <a href="tel:+385984974777" className="flex items-center text-blue-600 dark:text-blue-400">
                <Phone className="h-4 w-4 mr-2" />
                098 497 477
              </a>
            </div>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 transition-colors">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#pocetna" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Početna</a>
            <a href="#paketi" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Internet paketi</a>
            <a href="#optika" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Optička mreža</a>
            <a href="#bezicni" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Fiksni bežični internet</a>
            <a href="#pokrivenost" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Pokrivenost</a>
            <a href="#o-nama" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">O nama</a>
            <a href="#kontakt" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Kontakt</a>
            <a href="tel:+385985353333" className="flex items-center px-3 py-2 text-blue-600 dark:text-blue-400">
              <Phone className="h-4 w-4 mr-2" />
              098 535 333
            </a>
            <a href="tel:+385984974777" className="flex items-center px-3 py-2 text-blue-600 dark:text-blue-400">
              <Phone className="h-4 w-4 mr-2" />
              098 497 477
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}