import Button from '@/components/button';
import Input from '@/components/input';
import Layout from '@/components/layout';
import Textarea from '@/components/textarea';
import type { NextPage } from 'next';

const Create: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className=' space-y-3 px-4'>
        <Input type='text' title='Name' />
        <Input type='price' title='Price' />
        <Textarea label='Description' />
        <Button text='Go Live' />
      </div>
    </Layout>
  );
};

export default Create;
