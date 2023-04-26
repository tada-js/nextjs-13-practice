import ProductsNavigationButton from '@/components/ProductsNavigationButton';
import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export const revalidate = 3;

interface Props {
  params: {
    slug: string;
  };
}

export const generateMetadata = ({ params }: Props) => {
  return {
    title: `멋진 쇼핑몰 | 상품 ${params.slug}`,
  };
};

const ProductPage = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug);

  if (!product) {
    redirect('/products');
    // notFound();
  }

  return (
    <>
      <h2>멋진! {product.name} </h2>
      <Image
        src={`/images/${product.image}`}
        alt="쇼핑몰이미지"
        width={400}
        height={300}
      />
      <p>
        {product.name}입니다. 가격은 ₩{product.price}원!
      </p>
      <ProductsNavigationButton />
    </>
  );
};
export default ProductPage;

export const generateStaticParams = async () => {
  // 모든 상품 페이지를 SSG로 미리 생성
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
};
