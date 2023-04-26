import Link from 'next/link';
import styles from './layout.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '멋진 쇼핑몰 | 전체 상품',
  description: '멋진 상품을 확인해 보세요.',
  icons: {
    icon: '/favicon.ico',
  },
};

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/popular">인기 상품</Link>
        <Link href="/products/best">베스트 상품</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
};
export default ProductsLayout;
