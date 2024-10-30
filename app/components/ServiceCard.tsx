'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="bg-primary-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-primary-100"
    >
      <div className="text-primary-500 mb-4 text-4xl">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-primary-600">{title}</h3>
      <p className="text-primary-600/80">{description}</p>
    </motion.div>
  );
}