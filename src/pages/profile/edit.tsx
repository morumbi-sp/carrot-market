import { NextPage } from 'next';

const EditProfile: NextPage = () => {
  return (
    <div className='space-y-4 px-4 py-10'>
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
      <div className='flex flex-col '>
        <label
          className='text-sm font-medium text-gray-800'
          htmlFor='inputEmail'
        >
          Email address
        </label>
        <input
          className='mt-2 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500'
          type='email'
          id='inputEmail'
        />
      </div>
      <div className='flex flex-col'>
        <label
          className='text-sm font-medium text-gray-800'
          htmlFor='inputPhone'
        >
          Phone number
        </label>
        <div className='mt-2 flex'>
          <span className='flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-600 shadow-sm'>
            +82
          </span>
          <input
            className='w-full rounded-r-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500'
            type='text'
            id='inputPhone'
          />
        </div>
      </div>
      <div>
        <button className='w-full rounded-md bg-orange-500 py-2 text-sm font-medium  text-white ring-orange-600 ring-offset-2 hover:bg-orange-600 focus:ring-2'>
          Update profile
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
