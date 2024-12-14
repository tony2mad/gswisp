import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InternetPackages from '../components/InternetPackages';
import FiberServices from '../components/FiberServices';
import WirelessInternet from '../components/WirelessInternet';
import Coverage from '../components/Coverage';
import Contact from '../components/Contact';
import Flyers from '../components/Flyers';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <InternetPackages />
        <FiberServices />
        <WirelessInternet />
        <Coverage />
        <Contact />
        <Flyers />
        <Footer />
      </div>
    </div>
  );
}