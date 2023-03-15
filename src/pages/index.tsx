import FloatingButton from '@/components/floating-button';
import Item from '@/components/item';
import Layout from '@/components/layout';
import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Layout title='Home' hasTabBar>
      <div className=' flex flex-col'>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, idx) => (
          <Item
            title='New iPhone 14'
            subtitle='Black'
            price={95}
            key={idx}
            id={idx}
            comments={1}
            hearts={2}
          />
        ))}
        <FloatingButton
          href='/'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
          }
        />
      </div>
    </Layout>
  );
};

export default Home;
