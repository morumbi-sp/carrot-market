import { NextPage } from 'next';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Challenge: NextPage = () => {
  const [formData, setFormData] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = (data: any) => {
    const convertedData = JSON.stringify(data);
    setFormData(convertedData);
  };

  return (
    <div className='0 mx-auto my-20 w-[440px] rounded-3xl border-2 border-r-8 border-b-8 border-gray-800 bg-[#FFE4E6] px-8 pt-8'>
      <h1 className='text-center text-[23px] font-bold text-gray-800'>
        Job Application Form
      </h1>
      <form
        className='flex h-full flex-col justify-between space-y-5 py-9 text-[13px] font-bold text-gray-800'
        onSubmit={handleSubmit(onValid)}
      >
        <fieldset className='space-y-3'>
          <legend>
            What department do you want to work for?
            {errors.department && (
              <span className='ml-1 text-red-500'>
                {errors.department.message}
              </span>
            )}
          </legend>
          <div className='flex flex-col space-y-1.5 text-[11px]'>
            <div className='space-x-1'>
              <input
                {...register('department', { required: '*required' })}
                type='radio'
                id='departmentChoice1'
                value='sales'
                className='checked:bg-black hover:ring-0   hover:ring-offset-0 checked:hover:bg-black checked:focus:bg-black checked:focus:ring-0 checked:focus:ring-offset-0'
              />
              <label htmlFor='departmentChoice1'>Sales</label>
            </div>
            <div className='space-x-1'>
              <input
                {...register('department')}
                type='radio'
                id='departmentChoice2'
                value='marketing'
                className='checked:bg-black hover:ring-0  hover:ring-offset-0 checked:hover:bg-black checked:focus:bg-black checked:focus:ring-0 checked:focus:ring-offset-0'
              />
              <label htmlFor='departmentChoice2'>Marketing</label>
            </div>
            <div className='space-x-1'>
              <input
                {...register('department')}
                type='radio'
                id='departmentChoice3'
                value='accounting'
                className='checked:bg-black hover:ring-0  hover:ring-offset-0 checked:hover:bg-black checked:focus:bg-black checked:focus:ring-0 checked:focus:ring-offset-0'
              />
              <label htmlFor='departmentChoice3'>Accounting</label>
            </div>
            <div className='space-x-1'>
              <input
                {...register('department')}
                type='radio'
                id='departmentChoice4'
                value='customerService'
                className='checked:bg-black hover:ring-0  hover:ring-offset-0 checked:hover:bg-black checked:focus:bg-black checked:focus:ring-0 checked:focus:ring-offset-0'
              />
              <label htmlFor='departmentChoice4'>Customer Service</label>
            </div>
          </div>
        </fieldset>

        <fieldset className='space-y-3'>
          <legend>
            Why do you want to join this company?{' '}
            {errors.why && (
              <span className='ml-1 text-red-500'>{errors.why.message}</span>
            )}
          </legend>
          <div className='flex flex-col space-y-1.5 text-[11px]'>
            <div className='space-x-1'>
              <input
                {...register('why', { required: '*required' })}
                type='radio'
                id='whyChoice1'
                value='money'
                className='checked:bg-black hover:ring-0  hover:ring-offset-0 checked:hover:bg-black checked:focus:bg-black checked:focus:ring-0 checked:focus:ring-offset-0'
              />
              <label htmlFor='whyChoice1'>I want money!</label>
            </div>
            <div className='space-x-1'>
              <input
                {...register('why')}
                type='radio'
                id='whyChoice2'
                value='love'
                className='checked:bg-black hover:ring-0  hover:ring-offset-0 checked:hover:bg-black checked:focus:bg-black checked:focus:ring-0 checked:focus:ring-offset-0'
              />
              <label htmlFor='whyChoice2'>I love this company</label>
            </div>
            <div className='space-x-1'>
              <input
                {...register('why')}
                type='radio'
                id='whyChoice3'
                value='learn'
                className='checked:bg-black hover:ring-0  hover:ring-offset-0 checked:hover:bg-black checked:focus:bg-black checked:focus:ring-0 checked:focus:ring-offset-0'
              />
              <label htmlFor='whyChoice3'>I want to learn</label>
            </div>
            <div className='space-x-1'>
              <input
                {...register('why')}
                type='radio'
                id='whyChoice4'
                value='unknown'
                className='checked:bg-black hover:ring-0  hover:ring-offset-0 checked:hover:bg-black checked:focus:bg-black checked:focus:ring-0 checked:focus:ring-offset-0'
              />
              <label htmlFor='whyChoice4'>I don't know why</label>
            </div>
          </div>
        </fieldset>

        <fieldset className='space-y-1'>
          <legend>Salary</legend>
          <select
            className='w-full rounded-md border-[2.5px] border-black  py-0 text-[12px]'
            {...register('salary')}
            id='selectSalary'
          >
            <option>$50K</option>
            <option>$100K</option>
            <option>$150K</option>
            <option>$200K</option>
          </select>
        </fieldset>

        <div className='flex flex-col space-y-1'>
          <label htmlFor='introduction'>Introduce yourself</label>
          <input
            className='w-full rounded-md border-[2.5px] border-black  py-0 text-[12px]'
            {...register('introduction', {
              required: 'Please write down your introduction.',
            })}
            type='text'
            id='introduction'
          />
          {errors.introduction && (
            <span className=' text-red-500'>{errors.introduction.message}</span>
          )}
        </div>

        <div className='flex flex-col space-y-1'>
          <label htmlFor='dreams'>Tell us what your dreams are</label>
          <textarea
            className='w-full rounded-md border-[2.5px] border-black  py-1 text-[12px]'
            {...register('dreams', {
              required: 'Please tell us what your dreams are.',
              minLength: {
                value: 10,
                message: 'Please write more than 10 characters.',
              },
            })}
            rows={3}
            id='dreams'
          />
          {errors.dreams && (
            <span className=' text-red-500'>{errors.dreams.message}</span>
          )}
        </div>

        <div className='flex flex-col space-y-1'>
          <label htmlFor='email'>Email</label>
          <input
            className='w-full rounded-md border-[2.5px] border-black  py-0 text-[12px]'
            {...register('email', {
              required: 'Please write down your email.',
              validate: (value) =>
                value.includes('@naver') || 'Only @naver is allowed.',
            })}
            type='text'
            id='email'
          />
          {errors.email && (
            <span className=' text-red-500'>{errors.email.message}</span>
          )}
        </div>

        <div>
          <button
            className='mt-4 w-full rounded-md border-[2.5px] border-r-[4px] border-b-[4px] border-black bg-[#FBD44C] py-3'
            type='submit'
          >
            Give me this job
          </button>
        </div>
        {formData && <div className='break-words'>{formData}</div>}
      </form>
    </div>
  );
};

export default Challenge;
