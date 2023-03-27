import Item from '@/components/item';
import Layout from '@/components/layout';
import ProductList from '@/components/productList';
import { Fav, Product, Sale } from '@prisma/client';
import { NextPage } from 'next';
import useSWR from 'swr';

const Sold: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className='flex flex-col'>
        <ProductList kind='sales' />
      </div>
    </Layout>
  );
};

export default Sold;
