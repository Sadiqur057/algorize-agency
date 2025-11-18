import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a 15-min call | Algorize Tech',
  description:
    'Schedule a 15-minute consultation call with Algorize Tech. Get started with your project today.',
  openGraph: {
    title: 'Book a 15-min call | Algorize Tech',
    description:
      'Schedule a 15-minute consultation call with Algorize Tech. Get started with your project today.',
    url: 'https://algorize.tech/30-min',
    siteName: 'Algorize Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a 15-min call | Algorize Tech',
    description:
      'Schedule a 15-minute consultation call with Algorize Tech. Get started with your project today.',
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-bg-primary">{children}</div>;
}
