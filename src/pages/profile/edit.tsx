import Button from '@/components/button';
import Input from '@/components/input';
import Layout from '@/components/layout';
import { NextPage } from 'next';

const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className='space-y-4 px-4 '>
        <div className='flex items-center space-x-4'>
          <div className='aspect-square w-14 rounded-full bg-slate-500' />
          <div>
            <label
              className='cursor-pointer rounded-md border border-gray-300 px-3 py-2.5 text-sm font-medium hover:bg-orange-400 hover:text-white'
              htmlFor='changePic'
            >
              Change
            </label>
            <input
              className='hidden'
              type='file'
              id='changePic'
              accept='image/*'
            />
          </div>
        </div>
        <Input type='text' title='Email address' />
        <Input type='phone' title='Phone number' />
        <div>
          <Button text='Update profile' />
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
