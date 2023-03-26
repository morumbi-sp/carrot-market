import FloatingButton from '@/components/floating-button';
import Layout from '@/components/layout';
import { Post } from '@prisma/client';
import { NextPage } from 'next';
import Link from 'next/link';
import useSWR from 'swr';

interface PostWithUser extends Post {
  user: { name: string; id: number };
  _count: {
    answers: number;
    wonderings: number;
  };
}

interface PostResponse {
  ok: boolean;
  posts: PostWithUser[];
}

const Community: NextPage = () => {
  const { data } = useSWR<PostResponse>('/api/posts');
  console.log(data);
  return (
    <Layout title='동네생활' hasTabBar>
      <div>
        {data?.posts.map((post) => (
          <Link href={`/community/${post.id}`} key={post.id}>
            <div className='mb-4'>
              <div className=' flex flex-col items-start px-4'>
                <span className=' flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800'>
                  동네질문
                </span>
                <span className='mt-2 text-gray-700'>
                  <span className='text-orange-500'>Q. </span>
                  {post.question}
                </span>
              </div>
              <div className='mt-5 flex justify-between px-4 text-xs font-medium text-gray-500'>
                <span>{post.user.name}</span>
                <span>{post.createdAt.toString()}</span>
              </div>
              <div className='mt-3 flex space-x-4 border-b-2 border-t py-2.5'>
                <div className='flex items-center space-x-2 pl-4 text-sm text-gray-800'>
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
                    <span>{post._count.wonderings}</span>
                  </div>
                </div>
                <div className=' flex items-center space-x-2 text-sm text-gray-800'>
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
                    <span>{post._count.answers}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
        <FloatingButton
          href='/community/write'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
              />
            </svg>
          }
        />
      </div>
    </Layout>
  );
};

export default Community;
