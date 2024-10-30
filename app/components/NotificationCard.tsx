'use client';
import { motion } from 'framer-motion';

interface NotificationCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function NotificationCard({ icon, title, description }: NotificationCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-primary-100"
    >
      <div className="text-4xl mb-4 animate-float">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-primary-600">{title}</h3>
      <p className="text-primary-600/80">{description}</p>
    </motion.div>
  );
}