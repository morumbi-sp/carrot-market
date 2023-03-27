import Item from '@/components/item';
import Layout from '@/components/layout';
import ProductList from '@/components/productList';
import { Fav, Product } from '@prisma/client';
import { NextPage } from 'next';
import useSWR from 'swr';

const Loved: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className='flex flex-col'>
        <ProductList kind='favs' />
      </div>
    </Layout>
  );
};

export default Loved;
