import Button from '@/components/button';
import Layout from '@/components/layout';
import useMutation from '@/libs/client/useMutation';
import { Product, User } from '@prisma/client';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import products from '../api/products';
import { cls } from '@/libs/client/utils';

interface ProductWithUser extends Product {
  user: User;
}

interface ItemDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
  isLiked: boolean;
}

const Items: NextPage = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<ItemDetailResponse>(
    router.query.id ? `/api/products/${router.query.id}` : null
  );
  const [toggleFav] = useMutation(`/api/products/${router.query.id}/fav`);
  const onFavClick = () => {
    if (!data) return;
    mutate({ ...data, isLiked: !data.isLiked }, false);
    toggleFav({});
  };

  return (
    <Layout canGoBack>
      <div className=' px-4'>
        <div>
          <div className='h-96 bg-slate-300' />
          <div className='flex space-x-4 border-b py-3'>
            <div className='aspect-square h-12 rounded-full bg-slate-300' />
            <div className='flex flex-col justify-center'>
              <span className='text-sm font-medium text-gray-900'>
                {data?.product?.user?.name}
              </span>
              <Link
                href={`user/profile/${data?.product?.user?.id}`}
                className='text-xs text-gray-600'
              >
                View profile →
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className='mt-5'>
            <h1 className='text-3xl font-bold text-gray-900'>
              {data?.product?.name}
            </h1>
            <h2 className='mt-2 text-3xl text-gray-900'>
              ${data?.product?.price}
            </h2>
            <p className='my-6 text-gray-700'>{data?.product?.description}</p>
          </div>
          <div className='flex items-center justify-between space-x-4'>
            <Button text='Talk to seller' />
            <button
              onClick={onFavClick}
              className={cls(
                'rounded-md p-3  transition-all  hover:shadow-sm',
                data?.isLiked
                  ? 'text-red-500 hover:bg-red-100 hover:text-red-600'
                  : 'text-gray-400 hover:bg-gray-100 hover:text-gray-500 '
              )}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill={data?.isLiked ? 'currentColor' : 'none'}
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='mt-8'>
          <h1 className='text-2xl font-bold text-gray-900'>Similar items</h1>
          <div className='mt-5 grid grid-cols-2 gap-4'>
            {data?.relatedProducts.map((product) => (
              <div key={product.id}>
                <div className='h-56 bg-slate-300' />
                <div className='mt-4 flex flex-col'>
                  <span className='text-gray-700'>{product.name}</span>
                  <span className='text-sm font-medium text-gray-900'>
                    ${product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Items;
