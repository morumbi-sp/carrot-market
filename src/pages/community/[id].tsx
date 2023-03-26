import Button from '@/components/button';
import Layout from '@/components/layout';
import Textarea from '@/components/textarea';
import useMutation from '@/libs/client/useMutation';
import { cls } from '@/libs/client/utils';
import { Answer, Post, User } from '@prisma/client';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';

interface AnswerWithUser extends Answer {
  user: User;
}

interface PostWithUser extends Post {
  user: User;
  _count: {
    answers: number;
    wonderings: number;
  };
  answers: AnswerWithUser[];
}

interface PostResponse {
  ok: boolean;
  post: PostWithUser;
  isWondering: boolean;
}

interface AnswerForm {
  answerText: string;
}

const CommunityDetails: NextPage = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<PostResponse>(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );

  const { register, handleSubmit } = useForm<AnswerForm>();
  const [postAnswer, { loading, data: answerData }] = useMutation(
    `/api/posts/${router.query.id}/answer`
  );

  const [postWonder, { loading: loadingWonder, data: wonderData }] =
    useMutation(`/api/posts/${router.query.id}/wonder`);

  const onValid = (dataUp: AnswerForm) => {
    if (loading) return;
    postAnswer(dataUp);
  };

  const onClickWonderHandler = () => {
    if (loadingWonder) return;
    if (!data) return;
    mutate(
      {
        ...data,
        post: {
          ...data?.post,
          _count: {
            ...data?.post._count,
            wonderings: data.isWondering
              ? data?.post._count.wonderings - 1
              : data?.post._count.wonderings + 1,
          },
        },
        isWondering: !data.isWondering,
      },
      false
    );
    postWonder({});
  };

  return (
    <Layout canGoBack>
      <div className='px-4'>
        <span className=' inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium  text-myText-darkest'>
          동네질문
        </span>
        <div className='flex space-x-4 py-3'>
          <div className='aspect-square h-10 rounded-full bg-slate-300' />
          <div className='flex flex-col justify-center'>
            <span className='text-sm font-medium text-myText-darkest'>
              {data?.post.user.name}
            </span>
            <Link
              href={`/users/profiles/${data?.post.user.id}`}
              className='text-xs text-gray-600'
            >
              View profile →
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start border-t border-b'>
        <span className='py-3 px-4  text-myText-dark'>
          <span className='text-myOrange'>Q. </span>
          {data?.post.question}
        </span>
      </div>
      <div className='flex space-x-2 border-b-2 py-2.5'>
        <button
          className={cls(
            'flex w-28 items-center space-x-2 pl-4  text-sm text-myText-darkest transition-colors',
            data?.isWondering ? 'text-teal-400' : ''
          )}
          onClick={onClickWonderHandler}
        >
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='h-4 w-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <div className='space-x-1'>
            <span>궁금해요</span>
            <span>{data?.post._count.wonderings}</span>
          </div>
        </button>
        <div className=' flex items-center space-x-2 text-sm text-myText-darkest'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='h-4 w-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z'
              />
            </svg>
          </div>
          <div>
            <span>답변</span>
            <span>{data?.post._count.answers}</span>
          </div>
        </div>
      </div>

      {data?.post.answers.map((answer) => (
        <div className='mb-1 flex space-x-4 px-4 py-4' key={answer.id}>
          <div className='aspect-square h-8 rounded-full bg-slate-300' />
          <div className='flex flex-col justify-center'>
            <span className=' text-sm font-medium text-myText-darkest'>
              {answer.user.name}
            </span>
            <span className=' text-xs text-myText-medium'>
              {answer.createdAt.toString()}
            </span>
            <span className='mt-3'>{answer.answerText}</span>
          </div>
        </div>
      ))}
      <form className=' space-y-3' onSubmit={handleSubmit(onValid)}>
        <Textarea
          register={register('answerText', { required: true, minLength: 5 })}
        />
        <Button text='Reply' />
      </form>
    </Layout>
  );
};

export default CommunityDetails;
