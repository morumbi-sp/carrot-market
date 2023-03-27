import Item from '@/components/item';
import Layout from '@/components/layout';
import ProductList from '@/components/productList';
import { Fav, Product, Purchase } from '@prisma/client';
import { NextPage } from 'next';
import useSWR from 'swr';

const Bought: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className='flex flex-col'>
        <ProductList kind='purchases' />
      </div>
    </Layout>
  );
};

export default Bought;
