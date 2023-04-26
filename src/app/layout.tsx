import Link from 'next/link';
import './globals.css';
import styles from './layout.module.css';
import { Inter } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { Nanum_Gothic } from 'next/font/google';

const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({
  weight: '700',
  subsets: ['latin'],
});

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '멋쟁이 쇼핑몰',
  description: '멋진 쇼핑몰을 소개하는 곳입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <header className={styles.header}>
          <h1 className={gothic.className}>
            <Link href="/">멋쟁이 쇼핑몰</Link>
          </h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
