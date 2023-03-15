import Item from '@/components/item';
import Layout from '@/components/layout';
import { NextPage } from 'next';

const Bought: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className='flex flex-col'>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, idx) => (
          <Item
            title='Galaxy S50'
            subtitle='White'
            price={105}
            key={idx}
            id={idx}
            comments={3}
            hearts={2}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Bought;
