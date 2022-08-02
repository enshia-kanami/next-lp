import { useRouter } from 'next/router';

export default function CompanyInfo() {
  const router = useRouter();
  return (
    <>
      <div className='m-auto w-3/4 sm:w-full'>
        <h3 className='mt-14 mb-4 mr-6 text-3xl font-bold'>Company Info</h3>
        <p>texttexttexttexttexttexttexttext</p>
        <p className='text-sky-400 cursor-pointer' onClick={() => router.push('/CompanyDetail')}>
          詳細を見る
        </p>
      </div>
    </>
  );
}
