import Button from '@/components/button';
import Layout from '@/components/layout';
import { NextPage } from 'next';

const Write: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className='mt-5 flex flex-col space-y-3 px-4'>
        <textarea
          className='placeholder:gray-300 rounded-md border-gray-300 focus:border-orange-400 focus:ring-orange-400'
          rows={4}
          placeholder='Ask a question!'
        ></textarea>
        <Button text='Post' />
      </form>
    </Layout>
  );
};

export default Write;
