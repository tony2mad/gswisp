import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export default function Hero() {
  return (
    <div id="pocetna" className="relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Brzi Internet u</span>
                <span className="block text-blue-600 dark:text-blue-400">Gospiću i okolici</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Pouzdana internetska veza za vaš dom i poslovanje. Bez ugovorne obveze, uz besplatnu instalaciju i vrhunsku korisničku podršku.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Button 
                  variant="primary"
                  size="lg"
                  className="flex items-center"
                  onClick={() => document.getElementById('paketi')?.scrollIntoView()}
                  aria-label="Pregledaj internet pakete"
                >
                  Pogledaj pakete
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => document.getElementById('kontakt')?.scrollIntoView()}
                    aria-label="Kontaktiraj GSWISP"
                  >
                    Kontaktiraj nas
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img 
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" 
          src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
          alt="GSWISP mrežna infrastruktura - optički internet i bežični internet u Gospiću"
          width="1000"
          height="800"
          loading="eager"
        />
      </div>
    </div>
  );
}