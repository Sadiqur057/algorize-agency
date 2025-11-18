import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import  { NavbarDemo } from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SaaS Landing Page - Premium Websites for Startups',
  description:
    'Build stunning, high-converting websites that drive results. Our platform combines beautiful design with powerful functionality to help your business grow.',
  keywords:
    'SaaS, landing page, website builder, startups, business growth, web development',
  authors: [{ name: 'SaaS Platform Team' }],
  creator: 'SaaS Platform',
  publisher: 'SaaS Platform',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'SaaS Landing Page - Premium Websites for Startups',
    description:
      'Build stunning, high-converting websites that drive results. Our platform combines beautiful design with powerful functionality to help your business grow.',
    siteName: 'SaaS Platform',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SaaS Platform - Premium Websites for Startups',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Landing Page - Premium Websites for Startups',
    description:
      'Build stunning, high-converting websites that drive results. Our platform combines beautiful design with powerful functionality to help your business grow.',
    images: ['/og-image.jpg'],
    creator: '@saasplatform',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f97316',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <NavbarDemo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
