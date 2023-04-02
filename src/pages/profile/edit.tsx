import Button from '@/components/button';
import Input from '@/components/input';
import Layout from '@/components/layout';
import useMutation from '@/libs/client/useMutation';
import useUser from '@/libs/client/useUser';
import { imageUrl } from '@/libs/client/utils';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface UpdateProfileForm {
  email?: string;
  phone?: string;
  name?: string;
  avatar?: FileList;
  formErrors?: string;
}

interface EditProfileResponse {
  ok: boolean;
  error?: string;
}

const EditProfile: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<UpdateProfileForm>();

  const [editProfile, { data, loading }] =
    useMutation<EditProfileResponse>('/api/users/me');

  useEffect(() => {
    if (user?.name) setValue('name', user.name);
    if (user?.email) setValue('email', user.email);
    if (user?.phone) setValue('phone', user.phone);
    if (user?.avatar) setAvatarPreview(imageUrl(user.avatar, 'avatar'));
  }, [setValue, user]);

  useEffect(() => {
    if (data && !data.ok) {
      setError('formErrors', { message: data?.error });
    }
  }, [data, setError]);

  const onValid = async ({ name, email, phone, avatar }: UpdateProfileForm) => {
    if (loading) return;
    if (email === '' && phone === '') {
      return setError('formErrors', {
        message: 'Email or Phone number are required.',
      });
    }
    if (avatar && avatar.length) {
      const { uploadURL } = await (await fetch(`/api/files`)).json();
      const form = new FormData();
      form.append('file', avatar[0], user?.id.toString());
      const {
        result: { id },
      } = await (
        await fetch(uploadURL, {
          method: 'POST',
          body: form,
        })
      ).json();
      editProfile({ name, email, phone, avatarId: id });
    } else {
      editProfile({ name, email, phone });
    }
  };

  const avatar = watch('avatar');

  const [avatarPreview, setAvatarPreview] = useState('');

  useEffect(() => {
    if (avatar && avatar.length) {
      const file = avatar[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avatar]);

  return (
    <Layout canGoBack>
      <form className='space-y-4 px-4' onSubmit={handleSubmit(onValid)}>
        <div className='flex items-center space-x-4'>
          {avatarPreview ? (
            <Image
              width={56}
              height={56}
              alt='avatar'
              src={avatarPreview}
              className='aspect-square w-14 rounded-full bg-slate-500'
            />
          ) : (
            <div className='aspect-square w-14 rounded-full bg-slate-500' />
          )}

          <div>
            <label
              className='cursor-pointer rounded-md border border-gray-300 px-3 py-2.5 text-sm font-medium hover:bg-orange-400 hover:text-white'
              htmlFor='changePic'
            >
              Change
            </label>
            <input
              {...register('avatar')}
              className='hidden'
              type='file'
              id='changePic'
              accept='image/*'
            />
          </div>
        </div>
        <Input register={register('name')} type='text' title='Name' />
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
          <Button text={loading ? 'loading...' : 'Update profile'} />
        </div>
      </form>
    </Layout>
  );
};

export default EditProfile;
