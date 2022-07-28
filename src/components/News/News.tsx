import Link from 'next/link';

export default function News() {
  return (
    <>
      <div className='m-auto w-3/4'>
        <h3 className='mx-6 mt-14 mb-6 text-3xl font-bold'>Company News Room</h3>
        <ul>
          <li className='ml-6'>
            <h4>
              <Link href='#' className='text-xl font-medium'>
                <a>title1</a>
              </Link>
            </h4>
            <p className='py-2'>text</p>
            <p className='text-sky-400'>date1</p>
            <h4>
              <Link href='#' className='text-xl font-medium'>
                <a>titile</a>
              </Link>
            </h4>
            <p className='py-2'>name1</p>
            <p className='text-sky-400'>name</p>
          </li>
        </ul>
      </div>
    </>
  );
}
