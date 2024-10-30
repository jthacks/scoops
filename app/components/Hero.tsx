import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-32">
      <AnimatedSection className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6 text-primary-600">Keep Your Garden Clean and Fresh</h2>
        <p className="text-2xl mb-4 text-accent-500">&ldquo;They poop, we scoop&rdquo;</p>
        <p className="text-xl mb-4 text-primary-600/80">Professional dog waste removal services for your home</p>
        <p className="text-lg mb-12 text-primary-600/60">Serving Cardiff, Newport, Swansea, and surrounding areas</p>
        <a 
          href="#contact" 
          className="bg-accent-400 text-white px-8 py-4 rounded-full font-bold hover:bg-accent-500 transition duration-300 inline-block transform hover:scale-105"
        >
          Get a Quote
        </a>
      </AnimatedSection>
    </section>
  );
}