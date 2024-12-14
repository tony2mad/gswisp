import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Container from './ui/Container';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-white">GSWISP Internet</span>
            </div>
            <p className="mt-4 text-gray-400">
              Vaš pouzdani partner za brzi internet u Gospiću i okolici. Pružamo kvalitetne usluge pristupa internetu za domove i poslovne korisnike.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Brzi linkovi</h3>
            <ul className="space-y-2">
              {[
                ['Početna', '#pocetna'],
                ['Internet paketi', '#paketi'],
                ['Pokrivenost', '#pokrivenost'],
                ['O nama', '#o-nama'],
                ['Kontakt', '#kontakt']
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-gray-400 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Popa Frana Biničkog 12, 53000 Gospić
              </li>
              <li>
                <a href="tel:+385985353333" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-5 w-5 mr-2" />
                  098 535 333
                </a>
              </li>
              <li>
                <a href="tel:+385984974777" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-5 w-5 mr-2" />
                  098 497 477
                </a>
              </li>
              <li>
                <a href="mailto:meridian.arts2@gmail.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 mr-2" />
                  meridian.arts2@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:info@gswisp.net" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 mr-2" />
                  info@gswisp.net
                </a>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} GSWISP Internet. Sva prava pridržana.
          </p>
        </div>
      </Container>
    </footer>
  );
}