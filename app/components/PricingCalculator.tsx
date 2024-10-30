'use client';
import React, { useState } from 'react';

export default function PricingCalculator() {
  const [dogs, setDogs] = useState(1);
  const [frequency, setFrequency] = useState('monthly');
  const [visitsPerPeriod, setVisitsPerPeriod] = useState(1);
  const basePrice = 25;

  const calculateMonthlyPrice = () => {
    const visitsPerMonth = frequency === 'weekly' 
      ? visitsPerPeriod * 4  // Convert weekly visits to monthly
      : visitsPerPeriod;     // Already monthly visits
    return dogs * basePrice * visitsPerMonth;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100">
      <h3 className="text-xl font-bold mb-6 text-primary-600">Calculate Your Price</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-primary-600 mb-2">Number of Dogs</label>
          <input 
            type="number" 
            min="1"
            value={dogs}
            onChange={(e) => setDogs(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full p-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-300"
          />
        </div>
        <div>
          <label className="block text-primary-600 mb-2">Visit Frequency</label>
          <select 
            value={frequency}
            onChange={(e) => {
              setFrequency(e.target.value);
              setVisitsPerPeriod(1);
            }}
            className="w-full p-2 border border-primary-200 rounded-md mb-2 focus:ring-2 focus:ring-primary-300 focus:border-primary-300"
          >
            <option value="monthly">Monthly Visits</option>
            <option value="weekly">Weekly Visits</option>
          </select>

          <select 
            value={visitsPerPeriod}
            onChange={(e) => setVisitsPerPeriod(parseInt(e.target.value))}
            className="w-full p-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-300"
          >
            {frequency === 'weekly' ? (
              <>
                <option value={1}>1 visit per week</option>
                <option value={2}>2 visits per week</option>
              </>
            ) : (
              <>
                <option value={1}>1 visit per month</option>
                <option value={2}>2 visits per month</option>
              </>
            )}
          </select>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg text-primary-600">Monthly Price:</p>
          <p className="text-3xl font-bold text-accent-500">
            £{calculateMonthlyPrice()}
            <span className="text-sm font-normal">/month</span>
          </p>
          <p className="text-sm text-primary-500 mt-2">
            (£{basePrice} per dog per visit)
          </p>
          <p className="text-sm text-primary-500 mt-1">
            {frequency === 'weekly' 
              ? `${visitsPerPeriod} visit${visitsPerPeriod > 1 ? 's' : ''} per week (${visitsPerPeriod * 4} visits per month)`
              : `${visitsPerPeriod} visit${visitsPerPeriod > 1 ? 's' : ''} per month`}
          </p>
        </div>
      </div>
    </div>
  );
}