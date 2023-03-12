function Upload() {
  return (
    <div className='px-4 py-16'>
      <div>
        <label
          className='flex h-48 items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-400'
          htmlFor='addPic'
        >
          <svg
            className='h-12 w-12'
            stroke='currentColor'
            fill='none'
            viewBox='0 0 48 48'
            aria-hidden='true'
          >
            <path
              d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </label>
        <input className='hidden' type='file' id='addPic' />
      </div>
      <div className='mt-5'>
        <label
          className='block text-sm font-medium text-gray-700'
          htmlFor='priceInput'
        >
          Price
        </label>
        <div className='relative mt-1 flex items-center rounded-md shadow-sm'>
          <div className='absolute left-0 flex select-none items-center justify-center pl-3'>
            <span className='text-sm text-gray-500'>$</span>
          </div>
          <input
            className='w-full rounded-md border-gray-300 px-3 py-2 pl-7 shadow-sm 
            placeholder:text-gray-400
            focus:border-orange-400 focus:ring-orange-400'
            type='text'
            id='priceInput'
            placeholder='0.00'
          />
          <span className='absolute right-0 select-none px-3 text-gray-500'>
            USD
          </span>
        </div>
      </div>
      <div>
        <label
          className='mt-5 block text-sm font-medium text-gray-700'
          htmlFor='descriptionInput'
        >
          Description
        </label>
        <textarea
          className='mt-2 w-full rounded-md border-gray-300  placeholder:text-gray-400
          focus:border-orange-400 focus:ring-orange-400'
          id='descriptionInput'
          rows={4}
        ></textarea>
      </div>
      <button className='mt-5 w-full rounded-md border   bg-orange-500 py-2 text-sm font-medium text-white ring-orange-600 ring-offset-2 hover:bg-orange-600 focus:ring-2'>
        Upload product
      </button>
    </div>
  );
}

export default Upload;
