import React from 'react';
import { Check, Wifi } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface PackageCardProps {
  name: string;
  speed: string;
  price: string;
  features: string[];
  speedUnit?: string;
  icon?: 'wifi' | 'fiber';
}

export default function PackageCard({ 
  name, 
  speed, 
  price, 
  features, 
  speedUnit = 'Mbps',
  icon = 'fiber'
}: PackageCardProps) {
  return (
    <Card>
      <div className="px-6 py-8">
        <div className="flex items-center justify-center">
          {icon === 'wifi' ? (
            <Wifi className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          ) : (
            <svg className="h-12 w-12 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          )}
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-center text-gray-900 dark:text-white">{name}</h3>
        <div className="mt-4 text-center">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">{speed}</span>
          <span className="ml-2 text-gray-600 dark:text-gray-400">{speedUnit}</span>
        </div>
        <div className="mt-4 text-center">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">{price}</span>
          <span className="ml-2 text-gray-600 dark:text-gray-400">€/mj</span>
        </div>
        <ul className="mt-8 space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Check className="h-5 w-5 text-green-500" />
              <span className="ml-3 text-gray-600 dark:text-gray-400">{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant="success" fullWidth className="mt-8">
          Odaberi paket
        </Button>
      </div>
    </Card>
  );
}