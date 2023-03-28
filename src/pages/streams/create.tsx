import Button from '@/components/button';
import Input from '@/components/input';
import Layout from '@/components/layout';
import Textarea from '@/components/textarea';
import useMutation from '@/libs/client/useMutation';
import { Message, Stream } from '@prisma/client';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface StreamForm {
  name: string;
  price: string;
  description: string;
}

interface StreamResponse {
  ok: boolean;
  stream: Stream;
}

const Create: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<StreamForm>();
  const [goLive, { loading, data }] =
    useMutation<StreamResponse>(`/api/streams`);
  const onValid = ({ name, price, description }: StreamForm) => {
    if (loading) return;
    goLive({ name, price, description });
  };

  useEffect(() => {
    if (data?.ok) {
      router.push(`/streams/${data.stream.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack title='Go Live'>
      <form className=' space-y-3 px-4' onSubmit={handleSubmit(onValid)}>
        <Input
          register={register('name', { required: true })}
          type='text'
          title='Name'
        />
        <Input
          register={register('price', { required: true, valueAsNumber: true })}
          type='price'
          title='Price'
        />
        <Textarea
          register={register('description', { required: true, minLength: 3 })}
          label='Description'
        />
        <Button text='Go Live' />
      </form>
    </Layout>
  );
};

export default Create;
