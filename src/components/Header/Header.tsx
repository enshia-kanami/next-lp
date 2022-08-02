import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className='top-0 fixed z-50 w-full bg-white drop-shadow-md ...'>
        <div className='sm:flex justify-between items-center pb-0 pt-0 p-6'>
          <Link href='/' className='font-normal text-xl pl-8 hidden sm:block'>
            <a>Hoge</a>
          </Link>
          <nav className='bg-white'>
            <ul className='sm:flex sm:justify-between items-center'>
              <li className='relative group hover:bg-sky-100'>
                <Link href='/' className='block py-6 px-4'>
                  <a className='px-3'>Home</a>
                </Link>
                <ul className='absolute invisible group-hover:visible bg-sky-50'>
                  <li className='px-3 py-3'>
                    <Link href='/'>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className='px-3 py-3'>
                    <Link href='/'>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className='px-3 py-3'>
                    <Link href='/'>
                      <a>Home</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='relative group hover:bg-sky-100'>
                <Link href='/' className='block py-6 px-4'>
                  <a className='px-3'>Company</a>
                </Link>
                <ul className='absolute invisible group-hover:visible bg-sky-50'>
                  <li className='px-3 py-3'>
                    <Link href='/'>
                      <a>Company</a>
                    </Link>
                  </li>
                  <li className='px-3 py-3'>
                    <Link href='/'>
                      <a>Company</a>
                    </Link>
                  </li>
                  <li className='px-3 py-3'>
                    <Link href='/'>
                      <a>Company</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='relative group hover:bg-sky-100'>
                <Link href='/src/pages/ServiseDetail' className='block py-6 px-4'>
                  <a className='px-3'>Servise</a>
                </Link>
                <ul className='absolute invisible group-hover:visible bg-sky-50'>
                  <li className='px-3 py-3'>
                    <Link href='/'>
                      <a>Servise</a>
                    </Link>
                  </li>
                  <li className='px-3 py-3'>
                    <Link href='/'>
                      <a>Servise</a>
                    </Link>
                  </li>
                  <li className='px-3 py-3'>
                    <Link href='/'>
                      <a>Servise</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='relative group hover:bg-sky-100'>
                <Link href='/src/pages/products/NewsDetail' className='block py-6 px-4'>
                  <a className='px-3'>News</a>
                </Link>
                <ul className='absolute invisible group-hover:visible bg-sky-50'>
                  <li className='px-3 py-3'>
                    <Link href='/'>
                      <a>News</a>
                    </Link>
                  </li>
                  <li className='px-3 py-3'>
                    <Link href='/'>
                      <a>News</a>
                    </Link>
                  </li>
                  <li className='px-3 py-3'>
                    <Link href='/'>
                      <a>News</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='relative py-6'></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
