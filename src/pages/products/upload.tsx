import Input from '@/components/input';
import Textarea from '@/components/textarea';
import Button from '@/components/button';
import { NextPage } from 'next';

const Upload: NextPage = () => {
  return (
    <div className='space-y-5 px-4 py-16'>
      <div>
        <label
          className='flex h-48 items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-400'
          htmlFor='addPic'
        >
          <svg
            className='h-12 w-12'
            stroke='currentColor'
            fill='none'
            viewBox='0 0 48 48'
            aria-hidden='true'
          >
            <path
              d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </label>
        <input className='hidden' type='file' id='addPic' />
      </div>
      <Input title='Name' type='text' />
      <Input title='Price' type='price' />
      <Textarea label='Description' />
      <Button text='Upload product' />
    </div>
  );
};

export default Upload;
