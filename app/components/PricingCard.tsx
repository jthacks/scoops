import React from 'react';

interface PricingCardProps {
  title: string;
  price: number;
  frequency: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ title, price, frequency, features, isPopular = false }: PricingCardProps) {
  return (
    <div className={`${isPopular ? 'bg-green-600 text-white' : 'bg-white'} p-8 rounded-lg shadow-md ${isPopular ? 'transform scale-105' : 'border border-gray-200'}`}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-3xl font-bold mb-4">£{price}<span className="text-sm font-normal">/{frequency}</span></p>
      <ul className="space-y-2 mb-8">
        {features.map((feature, index) => (
          <li key={index}>✓ {feature}</li>
        ))}
      </ul>
      <button className={`w-full ${isPopular ? 'bg-white text-green-600 hover:bg-green-50' : 'bg-green-600 text-white hover:bg-green-700'} py-2 rounded-full transition duration-300`}>
        Choose Plan
      </button>
    </div>
  );
}