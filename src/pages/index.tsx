import Head from 'next/head';
import type { NextPage } from 'next';
import Top from '@/components/Home/Top';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <>
      <Layout title='Next.js Home' description='ホームページホーム'>
        <Top />
      </Layout>
    </>
  );
}
