import FloatingButton from '@/components/floating-button';
import Layout from '@/components/layout';
import { Stream } from '@prisma/client';
import type { NextPage } from 'next';
import Link from 'next/link';
import useSWR from 'swr';

interface StreamsResponse {
  ok: boolean;
  streams: Stream[];
}

const Live: NextPage = () => {
  const { data } = useSWR<StreamsResponse>('/api/streams');
  return (
    <Layout title='라이브' hasTabBar>
      <div className='divide-y'>
        {data?.streams.map((stream) => (
          <Link href={`/streams/${stream.id}`} key={stream.id}>
            <div className=' mb-6 px-4'>
              <div className='aspect-video w-full rounded-md bg-slate-300'></div>
              <h1 className='mt-2 text-2xl font-bold text-gray-900'>
                {stream.name}
              </h1>
            </div>
          </Link>
        ))}
        <FloatingButton
          href='/streams/create'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
              />
            </svg>
          }
        />
      </div>
    </Layout>
  );
};

export default Live;
