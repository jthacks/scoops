import React from 'react';

export default function Header() {
  return (
    <header className="bg-primary-500 text-white sticky top-0 z-40">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-moolah">Pooopa Scooopa</h1>
          <div className="space-x-6">
            <a href="#services" className="hover:text-primary-100 transition duration-300">Services</a>
            <a href="#about" className="hover:text-primary-100 transition duration-300">About</a>
            <a href="#contact" className="hover:text-primary-100 transition duration-300">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}