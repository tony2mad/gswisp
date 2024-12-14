import { Phone, Mail, MapPin } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Button from './ui/Button';

export default function Contact() {
  return (
    <Section id="kontakt" className="bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Kontaktirajte nas</h2>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Tu smo za sva vaša pitanja</p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card>
          <form className="p-8 space-y-6" name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Ime i prezime
              </label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border border-white dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                aria-label="Vaše ime i prezime"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email adresa
              </label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border border-white dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                aria-label="Vaša email adresa"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Poruka
              </label>
              <textarea 
                id="message"
                name="message"
                required
                rows={4} 
                className="mt-1 block w-full rounded-md border border-white dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                aria-label="Vaša poruka"
              ></textarea>
            </div>
            <Button type="submit" variant="primary" fullWidth>
              Pošalji poruku
            </Button>
          </form>
        </Card>

        <Card>
          <div className="p-8 space-y-8">
            <div itemScope itemType="http://schema.org/LocalBusiness">
              <meta itemProp="name" content="GSWISP Internet" />
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" aria-hidden="true" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Telefon</h3>
                  <p className="mt-1">
                    <a 
                      href="tel:+385985353333" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      itemProp="telephone"
                    >
                      098 535 333
                    </a>
                  </p>
                  <p className="mt-1">
                    <a 
                      href="tel:+385984974777" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      itemProp="telephone"
                    >
                      098 497 477
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" aria-hidden="true" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                  <p className="mt-1">
                    <a 
                      href="mailto:meridian.arts2@gmail.com" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      itemProp="email"
                    >
                      meridian.arts2@gmail.com
                    </a>
                  </p>
                  <p className="mt-1">
                    <a 
                      href="mailto:info@gswisp.net" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      itemProp="email"
                    >
                      info@gswisp.net
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" aria-hidden="true" />
                <div className="ml-4" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Adresa</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    <span itemProp="streetAddress">Popa Frana Biničkog 12</span><br />
                    <span itemProp="postalCode">53000</span> <span itemProp="addressLocality">Gospić</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}