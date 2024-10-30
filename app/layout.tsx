import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Moo_Lah_Lah } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const mooLahLah = Moo_Lah_Lah({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-moolah',
});

export const metadata: Metadata = {
  title: 'Pooopa Scooopa - Professional Dog Waste Removal Service',
  description: 'Professional dog waste removal service in South Wales',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${mooLahLah.variable}`}>
        {children}
      </body>
    </html>
  );
}