import Head from 'next/head';
import Header from './Header/Header';
import Footer from './Footer/Footer';

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({ children, title, description }: Props) {
  const pageTitle = title || 'ホームページタイトル';
  return (
    <div className='wrap'>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={description || 'ホームページ概要'} />
      </Head>
      <div className='container'>
        <Header />
        <div className='mx-auto'>
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
