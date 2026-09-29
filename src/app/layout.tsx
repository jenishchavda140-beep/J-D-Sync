import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'J&D Sync - Micro CRM for Freelancers',
  description: 'Manage clients, invoices, and payments in under 60 seconds',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
