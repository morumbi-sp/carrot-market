import Link from 'next/link';

interface ButtonProps {
  large?: boolean;
  text: string;
  [key: string]: any;
}

const Button = ({ large = false, text, ...rest }: ButtonProps) => {
  return (
    <button
      className='w-full rounded-md bg-myOrange py-2.5 text-sm font-medium text-white shadow-md hover:bg-myOrange-dark focus:ring-2 focus:ring-myOrange-dark focus:ring-offset-2'
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
