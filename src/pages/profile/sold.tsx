import Item from '@/components/item';
import Layout from '@/components/layout';
import { Fav, Product, Sale } from '@prisma/client';
import { NextPage } from 'next';
import useSWR from 'swr';

interface ProductWithCount extends Product {
  _count: { favs: number };
}

interface SalesWithProduct extends Sale {
  product: ProductWithCount;
}

interface SalesResponse {
  ok: boolean;
  sales: SalesWithProduct[];
}

const Sold: NextPage = () => {
  const { data } = useSWR<SalesResponse>('/api/users/me/sale');
  return (
    <Layout canGoBack>
      <div className='flex flex-col'>
        {data?.sales.map((sale) => (
          <Item
            title={sale.product.name}
            subtitle='Silver'
            price={sale.product.price}
            key={sale.id}
            id={sale.productId}
            comments={2}
            hearts={sale.product._count.favs}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Sold;
