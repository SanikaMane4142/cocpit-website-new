import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'Cocpit - Next-generation professional networking platform',
  description: 'Cocpit is an AI-powered ecosystem where professionals, businesses, recruiters, and innovators connect, grow, and scale together.',
  openGraph: {
    title: 'Cocpit - Next-generation professional networking platform',
    description: 'Cocpit is an AI-powered ecosystem where professionals, businesses, recruiters, and innovators connect, grow, and scale together.',
    url: 'https://cocpit.com',
    siteName: 'Cocpit',
    images: [
      {
        url: '/favicon.svg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 bg-radial-gradient">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
