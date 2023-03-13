import type { NextPage } from 'next';

const Live: NextPage = () => {
  return (
    <div className='space-y-4 divide-y py-10'>
      {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
        <div className='px-4 pt-4' key={i}>
          <div className='aspect-video w-full rounded-md bg-slate-300'></div>
          <h1 className='mt-2 text-2xl font-bold text-gray-900'>Galaxy S50</h1>
        </div>
      ))}
      <button className='fixed bottom-24 right-5 flex aspect-square w-14 items-center justify-center rounded-full border-transparent bg-orange-400 text-white shadow-xl hover:bg-orange-500'>
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
      </button>
    </div>
  );
};

export default Live;
