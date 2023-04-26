import Image from 'next/image';
import styles from './page.module.css';
import nextImage from '/public/next.svg';
import vercelImage from '/public/vercel.svg';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Link href="https://beta.nextjs.org/docs" target="_blank">
          <Image src={nextImage} alt="Next.js_로고" width={100} height={50} />
        </Link>
        <Link href="https://vercel.com/" target="_blank">
          <Image src={vercelImage} alt="Next.js_로고" width={100} height={50} />
        </Link>
      </main>
    </>
  );
}
