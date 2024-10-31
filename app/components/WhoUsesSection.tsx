import React from 'react';
import AnimatedSection from './AnimatedSection';

interface CustomerCardProps {
  title: string;
  description: string;
  icon: string;
}

function CustomerCard({ title, description, icon }: CustomerCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-duration-300 border border-primary-100">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-primary-600">{title}</h3>
      <p className="text-primary-600/80">{description}</p>
    </div>
  );
}

export default function WhoUsesSection() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-6 text-primary-600">Who Uses Pooopa Scooopa?</h2>
          <p className="text-lg text-center mb-12 text-primary-600/80 max-w-3xl mx-auto">
            We're here to make life easier, cleaner, and more convenient for all types of pet owners across the UK. 
            Our customers value a tidy garden but may not have the time, ability, or desire to keep up with this routine task.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CustomerCard
              icon="⏰"
              title="Busy Pet Owners"
              description="For those with tight schedules, we ensure you have one less thing to worry about. Enjoy your free time with a fresh, clean garden."
            />
            <CustomerCard
              icon="👵"
              title="Elderly Individuals"
              description="Perfect for older adults who find garden maintenance challenging. Let us handle the heavy lifting for a worry-free outdoor space."
            />
            <CustomerCard
              icon="♿"
              title="Disabled Customers"
              description="We proudly offer assistance to customers with disabilities, providing a hassle-free solution that ensures gardens stay clean and accessible."
            />
            <CustomerCard
              icon="🌱"
              title="Eco-Conscious Families"
              description="We're committed to the environment, turning collected waste into eco-friendly fertilizer. Perfect for those wanting a greener approach!"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
} 