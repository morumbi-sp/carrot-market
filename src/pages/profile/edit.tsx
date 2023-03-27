import Button from '@/components/button';
import Input from '@/components/input';
import Layout from '@/components/layout';
import useUser from '@/libs/client/useUser';
import { User } from '@prisma/client';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface UpdateProfileForm {
  email?: string;
  phone?: string;
  formErrors?: string;
}

const EditProfile: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (user?.email) setValue('email', user.email);
    if (user?.phone) setValue('phone', user.phone);
  }, [setValue, user]);
  const onValid = (dataUp: UpdateProfileForm) => {
    if (dataUp.email === '' && dataUp.phone === '') {
      setError('formErrors', {
        message: 'Email or Phone number are required.',
      });
    } else {
      console.log(dataUp);
    }
  };
  return (
    <Layout canGoBack>
      <form className='space-y-4 px-4' onSubmit={handleSubmit(onValid)}>
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
        <Input register={register('email')} type='text' title='Email address' />
        <Input register={register('phone')} type='phone' title='Phone number' />
        <div>
          {errors.formErrors ? (
            <div className='my-4 flex flex-col items-center justify-center space-y-2'>
              <span className='block text-center font-medium text-red-500'>
                {errors.formErrors.message}
              </span>
              <button
                className=' w-10 rounded-md bg-red-400 py-1 text-center text-xs font-medium text-white'
                onClick={() => clearErrors()}
              >
                OK
              </button>
            </div>
          ) : null}
          <Button text='Update profile' />
        </div>
      </form>
    </Layout>
  );
};

export default EditProfile;
