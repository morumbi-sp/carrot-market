import Item from '@/components/item';
import Layout from '@/components/layout';
import { Fav, Product } from '@prisma/client';
import { NextPage } from 'next';
import useSWR from 'swr';

interface ProductWithCount extends Product {
  _count: { favs: number };
}

interface FavsWithProduct extends Fav {
  product: ProductWithCount;
}

interface FavsResponse {
  ok: boolean;
  favs: FavsWithProduct[];
}

const Loved: NextPage = () => {
  const { data } = useSWR<FavsResponse>('/api/users/me/fav');
  return (
    <Layout canGoBack>
      <div className='flex flex-col'>
        {data?.favs.map((fav) => (
          <Item
            title={fav.product.name}
            subtitle='White'
            price={fav.product.price}
            key={fav.id}
            id={fav.productId}
            comments={7}
            hearts={fav.product._count.favs}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Loved;
