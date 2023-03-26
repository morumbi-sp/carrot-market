import Button from '@/components/button';
import Layout from '@/components/layout';
import Textarea from '@/components/textarea';
import useMutation from '@/libs/client/useMutation';
import { Post } from '@prisma/client';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface WriteForm {
  question: string;
}

interface WriteResponse {
  ok: boolean;
  post: Post;
}

const Write: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<WriteForm>();
  const [post, { loading, data }] = useMutation<WriteResponse>('/api/posts');
  const onValid = (dataUp: WriteForm) => {
    if (loading) return;
    post(dataUp);
  };
  useEffect(() => {
    if (data && data.ok) {
      router.push('/community');
    }
  }, [data, router]);
  return (
    <Layout canGoBack>
      <form
        className='mt-5 flex flex-col space-y-3 px-4'
        onSubmit={handleSubmit(onValid)}
      >
        <Textarea
          register={register('question', { required: true, minLength: 5 })}
          placeholder='Ask a question!'
        />
        <Button text={loading ? 'loading...' : 'Submit'} />
      </form>
    </Layout>
  );
};

export default Write;
