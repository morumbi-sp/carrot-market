import Layout from '@/components/layout';
import type { NextPage } from 'next';

const Create: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className=' px-4'>
        <div className='flex flex-col space-y-1'>
          <label
            className=' text-sm font-medium text-gray-800'
            htmlFor='inputName'
          >
            Name
          </label>
          <input
            className='rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500 '
            type='text'
            id='inputName'
          />
        </div>
        <div className='flex flex-col space-y-1'>
          <label
            className='text-sm font-medium text-gray-800'
            htmlFor='inputPrice'
          >
            Price
          </label>
          <div className='relative flex items-center'>
            <span className='absolute select-none px-3 text-gray-400'>$</span>
            <input
              className='placeholder:tex-gray-400 w-full rounded-md border-gray-300 px-7 focus:border-orange-500 focus:ring-orange-500'
              type='text'
              id='inputPrice'
              placeholder='0.00'
            />
            <span className='absolute right-0 select-none px-3 text-gray-400'>
              USD
            </span>
          </div>
        </div>
        <form className='flex flex-col space-y-1'>
          <label
            className='text-sm font-medium text-gray-800'
            htmlFor='description'
          >
            Description
          </label>
          <textarea
            className='rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500 '
            id='description'
            rows={4}
          ></textarea>
        </form>
        <button className='w-full rounded-md bg-orange-500 py-2 text-sm font-medium text-white ring-orange-600 ring-offset-2 hover:bg-orange-600 focus:ring-2'>
          Go live
        </button>
      </div>
    </Layout>
  );
};

export default Create;
