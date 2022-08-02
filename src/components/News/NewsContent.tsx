import Link from 'next/link';

type Props = {
  title: string;
  text: string;
  date: string;
};

export default function NewsContent({ title, text, date }: Props) {
  return (
    <>
      <ul>
        <li className='ml-6'>
          <h4>
            <Link href='/src/pages/NewsDetail' className='text-xl font-medium'>
              <a>{title}</a>
            </Link>
          </h4>
          <p className='py-2'>{text}</p>
          <p className='text-sky-400'>{date}</p>
        </li>
      </ul>
    </>
  );
}
