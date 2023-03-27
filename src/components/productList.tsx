import { Product, Sale } from '@prisma/client';
import useSWR from 'swr';
import Item from './item';
import Layout from './layout';

interface ProductWithCount extends Product {
  _count: { favs: number };
}

interface RecordWithProduct extends Sale {
  product: ProductWithCount;
}

interface ProductListResponse {
  [key: string]: RecordWithProduct[];
}

interface ProductListProps {
  kind: 'favs' | 'sales' | 'purchases';
}

const ProductList = ({ kind }: ProductListProps) => {
  const { data } = useSWR<ProductListResponse>(`/api/users/me/${kind}`);
  return data ? (
    <>
      {data[kind]?.map((record) => (
        <Item
          title={record.product.name}
          subtitle='Silver'
          price={record.product.price}
          key={record.id}
          id={record.productId}
          comments={2}
          hearts={record.product._count.favs}
        />
      ))}
    </>
  ) : null;
};

export default ProductList;
