import Layout from '@/components/layout';
import { avatarUrl, cls } from '@/libs/client/utils';
import { Review, User } from '@prisma/client';
import { NextPage } from 'next';
import Link from 'next/link';
import useSWR from 'swr';

interface ReviewWithUser extends Review {
  createdBy: User;
}

interface ReviewsResponse {
  ok: boolean;
  reviews: ReviewWithUser[];
}

interface UserResponse {
  ok: boolean;
  profile: User;
}

const Profile: NextPage = () => {
  const { data: userData } = useSWR<UserResponse>('/api/users/me');
  const { data: reviewData } = useSWR<ReviewsResponse>('/api/reviews');
  console.log(userData);
  return (
    <Layout title='나의 캐롯' hasTabBar>
      <div className=' px-4'>
        <div className='flex items-center space-x-3'>
          {userData?.profile.avatar ? (
            <img
              src={avatarUrl(userData.profile.avatar)}
              className='aspect-square w-16 rounded-full bg-slate-500'
            />
          ) : (
            <div className='aspect-square w-16 rounded-full bg-slate-500' />
          )}

          <div className='flex flex-col '>
            <span className='font-medium text-gray-800'>
              {userData?.profile?.name}
            </span>
            <Link href='profile/edit' className=' text-sm text-gray-800'>
              Edit profile &rarr;
            </Link>
          </div>
        </div>
        <div className='flex justify-around py-10'>
          <div className='flex flex-col items-center'>
            <Link
              href='/profile/sold'
              className='flex aspect-square w-14 items-center justify-center rounded-full bg-orange-400 text-white'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                ></path>
              </svg>
            </Link>
            <span className='mt-2 text-sm text-gray-800'>판매내역</span>
          </div>
          <div className='flex flex-col items-center'>
            <Link
              href='/profile/bought'
              className='flex aspect-square w-14 items-center justify-center rounded-full bg-orange-400 text-white'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                ></path>
              </svg>
            </Link>
            <span className='mt-2 text-sm text-gray-800'>구매내역</span>
          </div>
          <div className='flex flex-col items-center'>
            <Link
              href='/profile/loved'
              className='flex aspect-square w-14 items-center justify-center rounded-full bg-orange-400 text-white'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                ></path>
              </svg>
            </Link>
            <span className='mt-2 text-sm text-gray-800'>관심목록</span>
          </div>
        </div>
        {reviewData?.reviews.map((review) => (
          <div key={review.id}>
            <div className='flex space-x-3'>
              <div className='h-12 w-12 rounded-full bg-slate-500' />
              <div className='flex flex-col justify-center'>
                <span className='text-sm font-bold'>
                  {review?.createdBy.name}
                </span>
                <div className='flex'>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={cls(
                        'h-5 w-5',
                        review?.score >= star
                          ? 'text-yellow-400'
                          : 'text-gray-400'
                      )}
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className='mt-6'>
              <p className='text-sm text-gray-700'>{review.reviewText}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Profile;
