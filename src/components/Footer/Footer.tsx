import Link from 'next/link';
import Copyright from './Copyright';

export default function Footer(): JSX.Element {
  return (
    <>
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
          <Copyright />
        </div>
      </footer>
    </>
  );
}
