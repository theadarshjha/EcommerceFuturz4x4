// app/layout.tsx
import { Metadata } from 'next';
import './globals.css';
import Footer from '@/Components/Landing page/header&footer/footer';
import { CartProvider } from '@/Components/contexts/CartContext';
import Header from '@/Components/Landing page/header&footer/header';


export const metadata: Metadata = {
  title: 'FUTURZ 4x4',
  description: ' futurz ecommercce app ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body >
        <CartProvider>
          <Header/>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
