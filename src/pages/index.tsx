import Head from 'next/head';
import News from '@/components/layouts/News/News';

function Home() {
  return (
    <>
      <Head>
        <title>Next.js LP</title>
      </Head>
      <div className='container'>
        <News />
      </div>
    </>
  );
}

export default Home;
