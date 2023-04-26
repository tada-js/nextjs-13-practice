'use client';

import { useEffect } from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

const ProductsError = ({ error, reset }: Props) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>문제가 발생했습니다!</h2>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  );
};
export default ProductsError;
