import Link from 'next/link';

export default function CompanyInfo() {
  return (
    <>
      <div className='m-auto w-3/4 sm:w-full'>
        <h3 className='mt-14 mb-4 mr-6 text-3xl font-bold'>Company Info</h3>
        <p>texttexttexttexttexttexttexttext</p>
        <Link href='/src/pages/CompanyDetail' className='text-sky-400 pt-4'>
          <a>詳細を見る</a>
        </Link>
      </div>
    </>
  );
}