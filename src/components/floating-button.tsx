import Link from 'next/link';
import React from 'react';

interface FloatingButtonProps {
  icon: React.ReactNode;
  href: string;
}

const FloatingButton = ({ icon, href }: FloatingButtonProps) => {
  return (
    <Link
      href={href}
      className='fixed bottom-24 right-5 flex aspect-square w-14 items-center justify-center rounded-full bg-myOrange-light text-white shadow-lg hover:bg-myOrange'
    >
      {icon}
    </Link>
  );
};

export default FloatingButton;
