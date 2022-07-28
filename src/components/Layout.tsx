import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout() {
  return (
    <>
      <div className='container'>
        <Header />
        <main className='mt-[72px]'></main>
        <Footer />
      </div>
    </>
  );
}
