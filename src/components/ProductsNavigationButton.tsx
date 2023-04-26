'use client';

import { useRouter } from 'next/navigation';

const ProductsNavigationButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push('/products');
      }}
    >
      상품 목록
    </button>
  );
};
export default ProductsNavigationButton;
