import Layout from '@/components/layout';
import { NextPage } from 'next';

const Items: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className=' px-4'>
        <div>
          <div className='h-96 bg-slate-300' />
          <div className='flex space-x-4 border-b py-3'>
            <div className='aspect-square h-12 rounded-full bg-slate-300' />
            <div className='flex flex-col justify-center'>
              <span className='text-sm font-medium text-gray-900'>
                Steve Jebs
              </span>
              <span className='text-xs text-gray-600'>View profile →</span>
            </div>
          </div>
        </div>
        <div>
          <div className='mt-5'>
            <h1 className='text-3xl font-bold text-gray-900'>Galaxy S50</h1>
            <h2 className='mt-2 text-3xl text-gray-900'>$140</h2>
            <p className='my-6 text-gray-700'>
              My money's in that office, right? If she start giving me some
              bullshit about it ain't there, and we got to go someplace else and
              get it, I'm gonna shoot you in the head then and there. Then I'm
              gonna shoot that bitch in the kneecaps, find out where my goddamn
              money is. She gonna tell me too. Hey, look at me when I'm talking
              to you, motherfucker. You listen: we go in there, and that ni**a
              Winston or anybody else is in there, you the first motherfucker to
              get shot. You understand?
            </p>
          </div>
          <div className='flex items-center justify-between space-x-4'>
            <button className='w-full rounded-md bg-orange-500 py-3 text-center text-white shadow-sm ring-orange-400 ring-offset-2 transition-all hover:bg-orange-600 hover:shadow-md focus:ring-2'>
              Talk to seller
            </button>
            <div className='rounded-md p-3 text-gray-400 transition-all hover:bg-gray-200 hover:text-gray-500 hover:shadow-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <h1 className='text-2xl font-bold text-gray-900'>Similar items</h1>
          <div className='mt-5 grid grid-cols-2 gap-4'>
            {[1, 1, 1, 1, 1, 1].map((_, i) => (
              <div key={i}>
                <div className='h-56 bg-slate-300' />
                <div className='mt-4 flex flex-col'>
                  <span className='text-gray-700'>Galaxy S60</span>
                  <span className='text-sm font-medium text-gray-900'>$6</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Items;
