import './globals.css';
import type { Metadata } from 'next';
import { Inter, Barrio } from 'next/font/google';
import Providers from './components/Providers';

const inter = Inter({ subsets: ['latin'] });
const barrio = Barrio({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-barrio'
});

export const metadata: Metadata = {
  title: 'Pooopa Scooopa - Professional Dog Waste Removal Services',
  description: 'Professional dog waste removal services in South Wales. Regular cleaning, one-time services, and eco-friendly solutions for your garden.',
  icons: {
    icon: './favicon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${barrio.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}