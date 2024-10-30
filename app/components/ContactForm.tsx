'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';
import FormInput from './form/FormInput';
import FormTextArea from './form/FormTextArea';
import FormSelect from './form/FormSelect';
import SubmitButton from './form/SubmitButton';
import { useContactForm } from '@/hooks/useContactForm';

export default function ContactForm() {
  const { formData, isSubmitting, handleSubmit, handleChange } = useContactForm();

  const frequencyOptions = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'biweekly', label: 'Bi-weekly' },
    { value: 'monthly', label: 'Monthly' }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        label="Name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
      />

      <FormInput
        label="Email"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <FormInput
        label="Phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
      />

      <FormInput
        label="Number of Dogs"
        name="numberOfDogs"
        type="number"
        required
        min={1}
        value={formData.numberOfDogs}
        onChange={handleChange}
      />

      <FormSelect
        label="Visit Frequency"
        name="visitFrequency"
        required
        value={formData.visitFrequency}
        onChange={handleChange}
        options={frequencyOptions}
      />

      <FormInput
        label="Dog Breeds"
        name="dogBreeds"
        required
        value={formData.dogBreeds}
        onChange={handleChange}
      />

      <FormTextArea
        label="Garden Access Details"
        name="gardenAccess"
        required
        value={formData.gardenAccess}
        onChange={handleChange}
        placeholder="Please describe how we can access your garden..."
      />

      <FormTextArea
        label="Additional Notes"
        name="additionalNotes"
        value={formData.additionalNotes}
        onChange={handleChange}
      />

      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
}