import type { NextPage } from 'next';
import React, { KeyboardEventHandler, useEffect, useState } from 'react';

const Form: NextPage = () => {
  return (
    <>
      <form className='flex flex-col space-y-3 py-20'>
        <input type='text' placeholder='Username' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='password' />
        <button className='bg-myOrange py-2 text-white'>Submit</button>
      </form>
    </>
  );
};

export default Form;
