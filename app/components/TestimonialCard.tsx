'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
  image?: string;
}

export default function TestimonialCard({ name, location, text, rating, image }: TestimonialCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-primary-100"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 relative">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )}
        </div>
        <div className="ml-4">
          <h4 className="font-bold text-primary-600">{name}</h4>
          <p className="text-sm text-primary-400">{location}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-primary-600/80 italic">&ldquo;{text}&rdquo;</p>
    </motion.div>
  );
}