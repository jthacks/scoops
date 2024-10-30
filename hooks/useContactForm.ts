'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { ContactFormData } from '@/types/contact';

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  numberOfDogs: 1,
  visitFrequency: 'weekly',
  dogBreeds: '',
  gardenAccess: '',
  additionalNotes: ''
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      toast.success('Thank you! We will be in touch soon.');
      setFormData(initialFormData);
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return {
    formData,
    isSubmitting,
    handleSubmit,
    handleChange
  };
}