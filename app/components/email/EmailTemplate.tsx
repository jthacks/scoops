import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  numberOfDogs: number;
  visitFrequency: number;
  dogBreeds: string;
  gardenAccess: string;
  additionalNotes?: string;
}

export function EmailTemplate({
  name,
  email,
  phone,
  numberOfDogs,
  visitFrequency,
  dogBreeds,
  gardenAccess,
  additionalNotes,
}: EmailTemplateProps) {
  return (
    <div>
      <h1 style={{ color: '#0284c7', fontSize: '24px', marginBottom: '20px' }}>
        New Enquiry Details
      </h1>
      
      <div style={{ fontSize: '16px', lineHeight: '1.5', color: '#333' }}>
        <p style={{ marginBottom: '10px' }}>
          <strong style={{ color: '#0284c7' }}>Name:</strong> {name}
        </p>
        <p style={{ marginBottom: '10px' }}>
          <strong style={{ color: '#0284c7' }}>Email:</strong> {email}
        </p>
        <p style={{ marginBottom: '10px' }}>
          <strong style={{ color: '#0284c7' }}>Phone:</strong> {phone || 'Not provided'}
        </p>
        <p style={{ marginBottom: '10px' }}>
          <strong style={{ color: '#0284c7' }}>Number of Dogs:</strong> {numberOfDogs}
        </p>
        <p style={{ marginBottom: '10px' }}>
          <strong style={{ color: '#0284c7' }}>Visit Frequency:</strong> {visitFrequency} times per month
        </p>
        <p style={{ marginBottom: '10px' }}>
          <strong style={{ color: '#0284c7' }}>Dog Breeds:</strong> {dogBreeds}
        </p>
        <p style={{ marginBottom: '10px' }}>
          <strong style={{ color: '#0284c7' }}>Garden Access:</strong> {gardenAccess}
        </p>
        {additionalNotes && (
          <p style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#0284c7' }}>Additional Notes:</strong> {additionalNotes}
          </p>
        )}
      </div>
      
      <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        <p>This enquiry was submitted through the Pooopa Scooopa website.</p>
      </div>
    </div>
  );
}