import type { Metadata } from 'next';
import { Anton, Inter } from 'next/font/google';
import './globals.css';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Big T BBQ | Texas BBQ. Al Quoz.',
  description:
    'Big T BBQ demo site. 100% wood-smoked. From scratch. Weekend drops in Al Quoz.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
