import Image from 'next/image';
import styles from './page.module.css';
import nextImage from '/public/next.svg';
import vercelImage from '/public/vercel.svg';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Image src={nextImage} alt="Next.js_로고" width={100} height={50} />
        <Image src={vercelImage} alt="Next.js_로고" width={100} height={50} />
      </main>
    </>
  );
}
