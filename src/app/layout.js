import { Poppins, Inter, Roboto } from 'next/font/google';
import ThemeRegistry from '../theme/ThemeRegistry';
import './globals.css';

// Load Poppins
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose what you need
  variable: '--font-poppins',
});

// Load Poppins
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose what you need
  variable: '--font-inter',
});

// Load Poppins
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose what you need
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Vihi IT Solution',
  description: 'Next.js + MUI + Poppins',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
