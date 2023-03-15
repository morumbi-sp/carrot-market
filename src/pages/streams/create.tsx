import Button from '@/components/button';
import Input from '@/components/input';
import Layout from '@/components/layout';
import type { NextPage } from 'next';

const Create: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className=' space-y-3 px-4'>
        <Input type='text' title='Name' />
        <Input type='price' title='Price' />
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
        <Button text='Go Live' />
      </div>
    </Layout>
  );
};

export default Create;
