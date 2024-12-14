import React from 'react';
import Section from './ui/Section';
import { useNavigate } from 'react-router-dom';

export default function Flyers() {
  const navigate = useNavigate();

  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Optički internet u vašoj zgradi</h2>
        <button 
          onClick={() => navigate('/interest-form')}
          className="mt-8 px-8 py-3 text-white rounded-md font-medium
            bg-gradient-to-r from-blue-600 to-blue-500
            hover:from-blue-500 hover:to-blue-400
            animate-pulse-slow
            transition-all duration-2000
            shadow-lg hover:shadow-xl"
          style={{ animationDuration: '2s' }}
        >
          Saznajte više o našoj ponudi za stambene zgrade
        </button>
      </div>
    </Section>
  );
}