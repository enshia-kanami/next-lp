import { useRouter } from 'next/router';

type Props = {
  title: string;
  text: string;
  date: string;
};

export default function NewsContent({ title, text, date }: Props) {
  const router = useRouter();
  return (
    <>
      <ul>
        <li className='ml-6'>
          <h4>
            <p className='font-semibold text-xl pt-6' onClick={() => router.push('/NewsDetail')}>
              {title}
            </p>
          </h4>
          <p className='py-2'>{text}</p>
          <p className='text-sky-400 border-gray-100 border-b-2 pb-3'>{date}</p>
        </li>
      </ul>
    </>
  );
}
