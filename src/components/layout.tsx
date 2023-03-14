import { spawn } from 'child_process';
import React from 'react';
import { cls } from '../../libs/utils';

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

const Layout = ({ title, canGoBack, hasTabBar, children }: LayoutProps) => {
  return (
    <div>
      <div className='fixed top-0 w-full border-b bg-white py-4 text-center text-lg font-medium text-gray-700'>
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls('pt-16', hasTabBar ? 'pb-16' : '')}>{children}</div>
      {hasTabBar ? (
        <nav className='fixed bottom-0 flex w-full items-center justify-between border-t bg-white pb-10 pt-3 text-gray-700'>
          <span>Icon</span>
          <span>Icon</span>
          <span>Icon</span>
          <span>Icon</span>
          <span>Icon</span>
        </nav>
      ) : null}
    </div>
  );
};

export default Layout;
