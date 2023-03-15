import Item from '@/components/item';
import Layout from '@/components/layout';
import { NextPage } from 'next';

const Sold: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className='flex flex-col'>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, idx) => (
          <Item
            title='Pixel 5'
            subtitle='Silver'
            price={120}
            key={idx}
            id={idx}
            comments={2}
            hearts={5}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Sold;
