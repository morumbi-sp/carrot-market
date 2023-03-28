import type { NextPage } from 'next';
import React from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

const Form: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: 'onBlur' });

  const onValid = (data: LoginForm) => {
    console.log('I am valid!!!');
  };

  // const onInvalid = (errors: FieldErrors) => {
  //   console.log(errors);
  // };

  return (
    <>
      <form
        className='flex flex-col space-y-3 py-20'
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register('username', {
            required: 'username is required',
            minLength: {
              value: 5,
              message: 'username need to be more than 5 letters',
            },
          })}
          type='text'
          placeholder='Username'
        />
        <input
          {...register('email', {
            required: 'email is required',
            validate: {
              notGmail: (value) =>
                !value.includes('@gmail.com') || 'Gmail is not allowed',
            },
          })}
          type='email'
          placeholder='Email'
          className={errors.email && 'border-red-500 ring-1 ring-red-500'}
        />
        {errors.email?.message}
        <input
          {...register('password', { required: 'password is required' })}
          type='password'
          placeholder='password'
        />
        <button className='bg-myOrange py-2 text-white'>Submit</button>
      </form>
    </>
  );
};

export default Form;
