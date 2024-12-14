import { Network, Building2, Home, CheckCircle2, TrendingUp } from 'lucide-react';
import Section from './ui/Section';

export default function FiberServices() {
  return (
    <section id="optika" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Optička infrastruktura</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Izgradnja moderne optičke mreže za vaš dom ili zgradu</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="absolute top-0 right-0 -mt-4 mr-4 bg-blue-500 rounded-full p-3">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4">Stambene zgrade</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Implementacija optičke infrastrukture u cijeloj stambenoj zgradi, omogućujući svim stanarima pristup brzom internetu.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Besplatna procjena izvedivosti',
                'Profesionalna instalacija do svakog stana',
                'Minimalno zadiranje u postojeću infrastrukturu',
                'Brza implementacija'
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1" />
                  <span className="ml-3 text-gray-600 dark:text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="absolute top-0 right-0 -mt-4 mr-4 bg-blue-500 rounded-full p-3">
              <Home className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4">Stambena naselja</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Razvoj optičke mreže za cijelo stambeno naselje, osiguravajući vrhunsku povezanost za sve stanovnike.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Projektiranje prema potrebama naselja',
                'Podzemna instalacija optičkih kabela',
                'Mogućnost fazne implementacije',
                'Dugoročno održivo rješenje'
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1" />
                  <span className="ml-3 text-gray-600 dark:text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="absolute top-0 right-0 -mt-4 mr-4 bg-blue-500 rounded-full p-3">
              <Network className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4">Prednosti optike</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Optička mreža donosi brojne prednosti u odnosu na tradicionalne načine povezivanja.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Brzine do 1 Gbps',
                'Stabilna i pouzdana veza',
                'Niska latencija',
                'Spremno za budućnost',
                'Povećavate vrijednost svoje nekretnine jer je činite atraktivnijom'
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1" />
                  <span className="ml-3 text-gray-600 dark:text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#kontakt" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
            Zatražite ponudu
          </a>
        </div>
      </div>
    </section>
  );
}