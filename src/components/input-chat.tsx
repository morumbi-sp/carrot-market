import { UseFormRegisterReturn } from 'react-hook-form';

interface InputChatProps {
  [key: string]: any;
  register: UseFormRegisterReturn;
  onSubmit: () => void;
}

const InputChat = ({ register, onSubmit, ...rest }: InputChatProps) => {
  return (
    <div className='fixed inset-x-4 bottom-0   bg-white py-2'>
      <form className='relative m-auto flex max-w-md' onSubmit={onSubmit}>
        <input
          className='w-full rounded-full border-gray-300 focus:border-myOrange focus:ring-myOrange-dark '
          type='text'
          {...register}
        />
        <button className='absolute inset-y-0 right-0 my-1.5 mr-1.5 flex items-center rounded-full bg-myOrange px-3 text-sm text-white ring-myOrange-dark ring-offset-2 hover:bg-myOrange-dark focus:ring-2'>
          &rarr;
        </button>
      </form>
    </div>
  );
};

export default InputChat;
