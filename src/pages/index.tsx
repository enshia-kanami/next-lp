import Link from 'next/link';
import Head from 'next/head';
import type { NextPage } from 'next';

// const Home: NextPage = () => {
export default function Home() {
  return (
    <>
      <div className='container'>
        <Head>
          <title></title>
        </Head>
        <header className='top-0 fixed z-50 w-full bg-white drop-shadow-md ...'>
          <div className='sm:flex justify-between items-center pt-0 pb-0'>
            <Link href='/' className='font-normal text-xl pl-8 hidden sm:block'>
              <a>Hoge</a>
            </Link>
            <nav className='bg-white'>
              {/* <ul className="sm:flex sm:justify-center block"> */}
              <ul className='sm:flex sm:justify-between items-center'>
                <li className='relative group hover:bg-sky-100'>
                  <Link href='/' className='block py-6 px-4'>
                    <a>Home</a>
                  </Link>
                  <ul className='absolute invisible group-hover:visible bg-sky-50'>
                    <li className='px-3 py-3 z-40'>
                      <Link href='/'>
                        <a>Home1</a>
                      </Link>
                    </li>
                    <li className='px-3 py-3'>
                      <Link href='/'>
                        <a>Home2</a>
                      </Link>
                    </li>
                    <li className='px-3 py-3'>
                      <Link href='/'>
                        <a>Home3</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='relative group hover:bg-sky-100'>
                  <Link href='/' className='block py-6 px-4'>
                    <a>Company</a>
                  </Link>
                  <ul className='absolute invisible group-hover:visible bg-sky-50'>
                    <li className='px-3 py-3'>
                      <Link href='/'>
                        <a>Company1</a>
                      </Link>
                    </li>
                    <li className='px-3 py-3'>
                      <Link href='/'>
                        <a>Company2</a>
                      </Link>
                    </li>
                    <li className='px-3 py-3'>
                      <Link href='/'>
                        <a>Company3</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='relative group hover:bg-sky-100'>
                  <Link href='/src/pages/ServiseDetail' className='block py-6 px-4'>
                    <a>Servise</a>
                  </Link>
                  <ul className='absolute invisible group-hover:visible bg-sky-50'>
                    <li className='px-3 py-3'>
                      <Link href='/'>
                        <a>Servise1</a>
                      </Link>
                    </li>
                    <li className='px-3 py-3'>
                      <Link href='/'>
                        <a>Servise2</a>
                      </Link>
                    </li>
                    <li className='px-3 py-3'>
                      <Link href='/'>
                        <a>Servise3</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='relative group hover:bg-sky-100'>
                  <Link href='/src/pages/products/NewsDetail' className='block py-6 px-4'>
                    <a>News</a>
                  </Link>
                  <ul className='absolute invisible group-hover:visible bg-sky-50'>
                    <li className='px-3 py-3'>
                      <Link href='/'>
                        <a>News1</a>
                      </Link>
                    </li>
                    <li className='px-3 py-3'>
                      <Link href='/'>
                        <a>News2</a>
                      </Link>
                    </li>
                    <li className='px-3 py-3'>
                      <Link href='/'>
                        <a>News3</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='relative py-6'>{/* <Search/> */}</li>
              </ul>
            </nav>
            {/* <Hamburger/> */}
          </div>
        </header>
        <footer className='bottom-0 w-full'>
          <div className='mt-14 text-center'>
            <div>
              <ul className='mb-5 flex justify-center'>
                <li className='first:pl-0'>
                  <Link href='#'>
                    <a>Home</a>
                  </Link>
                </li>
                <li className='pl-3'>
                  <Link href='#'>
                    <a>About</a>
                  </Link>
                </li>
                <li className='pl-3'>
                  <Link href='#'>
                    <a>News</a>
                  </Link>
                </li>
                <li className='pl-3'>
                  <Link href='#'>
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <p className='py-2.5'>&copy; next.js-lp</p>;
          </div>
        </footer>
      </div>
    </>
  );
}

// export default Home;
