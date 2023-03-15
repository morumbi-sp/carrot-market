import { spawn } from 'child_process';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { cls } from '../libs/utils';

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

const linkBasicCSS = 'text flex flex-col items-center justify-center space-y-2';

const Layout = ({ title, canGoBack, hasTabBar, children }: LayoutProps) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.back();
  };
  return (
    <div>
      <div className='fixed top-0 flex h-14 w-full max-w-lg items-center justify-center border-b bg-white text-lg font-medium text-myText-dark'>
        {canGoBack ? (
          <span
            className='mr-auto ml-4 cursor-pointer'
            onClick={onClickHandler}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5L8.25 12l7.5-7.5'
              />
            </svg>
          </span>
        ) : null}
        {title ? <span className='inset-x-0 text-center'>{title}</span> : ''}
      </div>
      <div className={cls('pt-16', hasTabBar ? 'pb-16' : '')}>{children}</div>
      {hasTabBar ? (
        <nav className='fixed bottom-0 flex w-full max-w-lg items-center justify-around border-t bg-white px-2 pb-6 pt-3 text-myText-dark'>
          <Link
            className={cls(
              linkBasicCSS,
              router.pathname === '/'
                ? 'text-orange-500'
                : 'transition-colors hover:text-gray-500'
            )}
            href='/'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
              />
            </svg>
            <span className='text-sm font-medium'>홈</span>
          </Link>
          <Link
            className={cls(
              linkBasicCSS,
              router.pathname === '/community'
                ? 'text-myOrange'
                : 'transition-colors hover:text-myText-light'
            )}
            href='/community'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z'
              />
            </svg>
            <span className='text-sm font-medium '>동네생활</span>
          </Link>
          <Link
            className={cls(
              linkBasicCSS,
              router.pathname === '/chats'
                ? 'text-myOrange'
                : 'transition-colors hover:text-gray-500'
            )}
            href='/chats'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z'
              />
            </svg>
            <span className='text-sm font-medium'>채팅</span>
          </Link>
          <Link
            className={cls(
              linkBasicCSS,
              router.pathname === '/streams'
                ? 'text-myOrange'
                : 'transition-colors hover:text-myText-light'
            )}
            href='/streams'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
              />
            </svg>
            <span className='text-sm font-medium '>라이브</span>
          </Link>
          <Link
            className={cls(
              'text flex flex-col items-center justify-center space-y-2',
              router.pathname === '/profile'
                ? 'text-myOrange'
                : 'transition-colors hover:text-myText-light'
            )}
            href='/profile'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
            <span className='text-sm font-medium'>나의 캐롯</span>
          </Link>
        </nav>
      ) : null}
    </div>
  );
};

export default Layout;
