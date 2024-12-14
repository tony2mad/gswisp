import React from 'react';
import PackageCard from './PackageCard';

interface Package {
  name: string;
  speed: string;
  price: string;
  features: string[];
}

interface PackageGridProps {
  packages: Package[];
  speedUnit?: string;
  icon?: 'wifi' | 'fiber';
}

export default function PackageGrid({ packages, speedUnit = 'Mbps', icon = 'fiber' }: PackageGridProps) {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-3">
      {packages.map((pkg) => (
        <PackageCard
          key={pkg.name}
          {...pkg}
          speedUnit={speedUnit}
          icon={icon}
        />
      ))}
    </div>
  );
}