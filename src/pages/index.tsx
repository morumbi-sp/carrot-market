import FloatingButton from '@/components/floating-button';
import Item from '@/components/item';
import Layout from '@/components/layout';
import { Product } from '@prisma/client';
import { NextPage } from 'next';
import Head from 'next/head';
import useSWR from 'swr';

interface ProductWithFavsCount extends Product {
  _count: { favs: number };
}

export interface ProductResponse {
  ok: boolean;
  products: ProductWithFavsCount[];
}

const Home: NextPage = () => {
  const { data } = useSWR<ProductResponse>('/api/products');

  console.log(data?.products);
  return (
    <Layout title='Home' hasTabBar>
      <Head>
        <title>Home</title>
      </Head>
      <div className=' flex flex-col'>
        {data?.products.map((product) => (
          <Item
            title={product.name}
            subtitle='Black'
            price={product.price}
            key={product.id}
            id={product.id}
            comments={1}
            hearts={product._count.favs}
          />
        ))}
        <FloatingButton
          href='/products/upload'
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
                strokeLinecap='round'
                strokeLinejoin='round'
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
