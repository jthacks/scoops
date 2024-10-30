import React from 'react';
import AnimatedSection from './AnimatedSection';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-600">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon="🐾"
              title="Regular Clean-ups"
              description="Weekly or bi-weekly scheduled visits to keep your garden consistently clean."
            />
            <ServiceCard
              icon="🧹"
              title="One-time Clean-ups"
              description="Perfect for when you need a thorough cleaning before an event or after winter."
            />
            <ServiceCard
              icon="🌿"
              title="Deodorizing"
              description="We use pet-safe, eco-friendly deodorizers to keep your garden smelling fresh."
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}