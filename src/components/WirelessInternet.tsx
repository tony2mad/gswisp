import React from 'react';
import SectionTitle from './sections/SectionTitle';
import PackageGrid from './packages/PackageGrid';
import { wirelessPackages } from '../data/packages';
import Card from './ui/Card';

export default function WirelessInternet() {
  return (
    <section id="bezicni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Fiksni bežični GSWISP internet"
          subtitle="Pouzdana bežična veza bez ugovorne obveze"
          titleClassName="text-gray-900"
          subtitleClassName="text-gray-600"
        />
        <PackageGrid 
          packages={wirelessPackages} 
          speedUnit="Mbits"
          icon="wifi"
        />
        
        <Card className="mt-16 p-8 bg-gray-900">
          <h3 className="text-2xl font-bold text-center text-white mb-6">
            Radno vrijeme
          </h3>
          <p className="text-xl text-center">
            <span className="font-semibold text-white">Ponedjeljak - Petak:</span>{' '}
            <span className="text-blue-400">9:00 - 17:00 sati</span>
          </p>
        </Card>
      </div>
    </section>
  );
}