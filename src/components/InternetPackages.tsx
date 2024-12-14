import React from 'react';
import SectionTitle from './sections/SectionTitle';
import PackageGrid from './packages/PackageGrid';
import { fiberPackages } from '../data/packages';

export default function InternetPackages() {
  return (
    <section id="paketi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Internet paketi optike"
          subtitle="Odaberite paket koji najbolje odgovara vašim potrebama"
        />
        <PackageGrid packages={fiberPackages} />
      </div>
    </section>
  );
}