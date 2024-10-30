'use client';
import React from 'react';

interface FormSelectProps {
  label: string;
  name: string;
  required?: boolean;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string | number; label: string }[];
}

export default function FormSelect({
  label,
  name,
  required = false,
  value,
  onChange,
  options
}: FormSelectProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-primary-600">
        {label} {required && '*'}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full rounded-md border border-primary-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}