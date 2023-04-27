## 프로젝트 실행

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

<br><br>

## 프로젝트 목표

- Next.js 13버전 학습

<br><br>

## 배포 및 개발 환경

- <a href="https://nextjs-13-practice.vercel.app/" target="_blank">https://nextjs-13-practice.vercel.app/</a>
- 개발 환경

  ```json
  "next": "13.3.1",
  "react": "18.2.0",
  "react-dom": "18.2.0",
  "typescript": "5.0.4"

  API : https://nextjs-13-practice.vercel.app/api/products
  ```

<br><br>

## 알게된 점

### 기본적인 동작 원리

- 서버 컴포넌트와 클라이언트 컴포넌트
  - 페이지 단위로 렌더링 하던 12버전과 달리, 컴포넌트 단위로 렌더링 하는 13버전의 차이
- 정적 HTML 페이지에서 하이드레이션이 발생하고 컴포넌트가 렌더링 되는 것

  1. 클라이언트 컴포넌트를 포함한 프리렌더링 된 HTML 정적 페이지 전달
  2. 클라이언트 컴포넌트 실행에 필요한 코드(`.js`)를 브라우저에 전달
  3. 하이드레이션 발생
  4. 컴포넌트 렌더링 -> 클릭 이벤트 등 수행 가능

### 세부 기능

- `metadata`를 통한 페이지별 SEO 최적화

  ```tsx
  // products/layout.tsx
  import { Metadata } from 'next';

  export const metadata: Metadata = {
    title: '멋진 쇼핑몰 | 전체 상품',
    description: '멋진 상품을 확인해 보세요.',
    icons: {
      icon: '/favicon.ico',
    },
  };
  ```

- api 라우트

  ```ts
  export async function GET(request: Request) {
    const products = await getProducts();
    return NextResponse.json({ products });
  }
  ```

- Redirect, Rewrite

  ```js
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    ...
    async redirects() {
      return [
        {
          source: '',
          destination: '',
          permanent: true,
        },
      ];
    },
    async rewrites() {
      return [
        {
          source: '',
          destination: '',
        },
        {
          source: '',
          destination: '',
        },
      ];
    },
  };

  module.exports = nextConfig;
  ```

- `next/image`를 통한 이미지 최적화, `next.config.js` 설정을 통해 외부 이미지 불러오기
  ```js
  const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
    },
  };
  ```
- `error UI`, `loading UI`

  ```tsx
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
  ```
