interface InputChatProps {
  [key: string]: any;
}

const InputChat = ({ ...rest }: InputChatProps) => {
  return (
    <div className='fixed inset-x-4 bottom-0   bg-white py-2'>
      <div className='relative m-auto flex max-w-md'>
        <input
          className='w-full rounded-full border-gray-300 focus:border-myOrange focus:ring-myOrange-dark '
          type='text'
        />
        <button className='absolute inset-y-0 right-0 my-1.5 mr-1.5 flex items-center rounded-full bg-myOrange px-3 text-sm text-white ring-myOrange-dark ring-offset-2 hover:bg-myOrange-dark focus:ring-2'>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default InputChat;
