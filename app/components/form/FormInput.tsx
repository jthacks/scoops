'use client';
import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  min?: number;
}

export default function FormInput({
  label,
  name,
  type = 'text',
  required = false,
  value,
  onChange,
  placeholder,
  min
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-primary-600">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        className="mt-1 block w-full rounded-md border border-primary-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
      />
    </div>
  );
}