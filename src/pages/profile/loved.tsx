import Item from '@/components/item';
import Layout from '@/components/layout';
import { NextPage } from 'next';

const Loved: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className='flex flex-col'>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, idx) => (
          <Item
            title='Z-Flip'
            subtitle='White'
            price={105}
            key={idx}
            id={idx}
            comments={7}
            hearts={2}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Loved;
