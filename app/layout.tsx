// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import { AuthProvider } from '../context/authContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your App Name',
  description: 'Description of your app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
