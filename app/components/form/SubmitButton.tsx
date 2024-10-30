'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export default function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <motion.button
      type="submit"
      disabled={isSubmitting}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full bg-accent-400 text-white py-3 px-6 rounded-full font-bold hover:bg-accent-500 transition duration-300 ${
        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {isSubmitting ? 'Sending...' : 'Send Enquiry'}
    </motion.button>
  );
}