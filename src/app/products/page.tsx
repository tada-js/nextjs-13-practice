import { getProducts } from '@/service/products';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';

const ProductsPage = async () => {
  // throw new Error();

  const products = await getProducts();
  return (
    <>
      <h2>상품 소개</h2>
      <Image
        src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="쇼핑몰이미지"
        width={400}
        height={200}
      />
      <ul className={styles.ul}>
        {products.map(({ id, name }, index) => {
          return (
            <li key={index} className={styles.li}>
              <Link href={`products/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default ProductsPage;
