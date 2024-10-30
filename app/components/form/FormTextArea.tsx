'use client';
import React from 'react';

interface FormTextAreaProps {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}

export default function FormTextArea({
  label,
  name,
  required = false,
  value,
  onChange,
  placeholder,
  rows = 3
}: FormTextAreaProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-primary-600">
        {label} {required && '*'}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md border border-primary-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
      />
    </div>
  );
}