'use client';

import { useEffect } from 'react';

export default function TypeformEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div data-tf-live="01JBEMQE3ZM29PMVRWV442W7XK"></div>
  );
} 