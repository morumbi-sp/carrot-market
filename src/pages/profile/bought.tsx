import Item from '@/components/item';
import Layout from '@/components/layout';
import { Fav, Product, Purchase } from '@prisma/client';
import { NextPage } from 'next';
import useSWR from 'swr';

interface ProductWithCount extends Product {
  _count: { favs: number };
}

interface PurchaseWithProduct extends Purchase {
  product: ProductWithCount;
}

interface PurchaseResponse {
  ok: boolean;
  purchases: PurchaseWithProduct[];
}

const Bought: NextPage = () => {
  const { data } = useSWR<PurchaseResponse>('/api/users/me/purchase');
  return (
    <Layout canGoBack>
      <div className='flex flex-col'>
        {data?.purchases.map((purchase) => (
          <Item
            title={purchase.product.name}
            subtitle='White'
            price={purchase.product.price}
            key={purchase.id}
            id={purchase.productId}
            comments={3}
            hearts={purchase.product._count.favs}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Bought;
