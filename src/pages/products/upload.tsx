import Input from '@/components/input';
import Textarea from '@/components/textarea';
import Button from '@/components/button';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import Layout from '@/components/layout';
import useMutation from '@/libs/client/useMutation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Product } from '@prisma/client';
import Id from '../api/posts/[id]';

interface UploadProductForm {
  name: string;
  price: number;
  description: string;
  photo?: FileList;
}

interface UploadProductMutation {
  ok: boolean;
  product: Product;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<UploadProductForm>();
  const [uploadProduct, { loading, data }] =
    useMutation<UploadProductMutation>('/api/products');
  const onValid = async (dataUp: UploadProductForm) => {
    if (loading) return;
    if (photo && photo.length) {
      const { uploadURL } = await (await fetch(`/api/files`)).json();
      const form = new FormData();
      form.append('file', photo[0], data?.product.id.toString());
      const {
        result: { id },
      } = await (await fetch(uploadURL, { method: 'POST', body: form })).json();
      uploadProduct({ ...dataUp, imageId: id });
    } else {
      uploadProduct(dataUp);
    }
  };
  useEffect(() => {
    if (data?.ok) {
      router.push(`/products/${data?.product.id}`);
    }
  }, [data, router]);

  const photo = watch('photo');
  const [previewPhoto, setPreviewPhoto] = useState('');
  useEffect(() => {
    if (photo && photo.length) {
      const file = photo[0];
      setPreviewPhoto(URL.createObjectURL(file));
    }
  }, [photo]);

  return (
    <Layout canGoBack title='Upload Product'>
      <form className='space-y-5 px-4 py-16' onSubmit={handleSubmit(onValid)}>
        <div>
          {previewPhoto ? (
            <label
              className='flex h-56 items-center justify-center overflow-hidden rounded-md '
              htmlFor='addPic'
            >
              <img src={previewPhoto} className='max-w-full' />
            </label>
          ) : (
            <label
              className='flex h-56 items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-400'
              htmlFor='addPic'
            >
              <svg
                className='h-12 w-12'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 48 48'
                aria-hidden='true'
              >
                <path
                  d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </label>
          )}
          <input
            {...register('photo')}
            className='hidden'
            type='file'
            accept='image/*'
            id='addPic'
          />
        </div>
        <Input
          register={register('name', { required: true })}
          title='Name'
          type='text'
        />
        <Input
          register={register('price', { required: true })}
          title='Price'
          type='price'
        />
        <Textarea
          register={register('description', { required: true })}
          label='Description'
        />
        <Button text={loading ? 'Now loading...' : 'Upload item'} />
      </form>
    </Layout>
  );
};

export default Upload;
