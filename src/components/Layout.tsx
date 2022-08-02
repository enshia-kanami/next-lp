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
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={description || 'ホームページ概要'} />
      </Head>
      <Header />
      <div className='container mx-auto'>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
