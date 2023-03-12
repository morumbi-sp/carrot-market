function CommunityDetails() {
  return (
    <div className='py-2'>
      <div className='px-4'>
        <span className=' inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800'>
          동네질문
        </span>
        <div className='flex space-x-4 py-3'>
          <div className='aspect-square h-10 rounded-full bg-slate-300' />
          <div className='flex flex-col justify-center'>
            <span className='text-sm font-medium text-gray-900'>
              Steve Jebs
            </span>
            <span className='text-xs text-gray-600'>View profile →</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start border-t border-b'>
        <span className='py-3 px-4 text-gray-700'>
          <span className='text-orange-500'>Q. </span>What is the best mandu
          restaurant?
        </span>
      </div>
      <div className='flex space-x-4 border-b-2 py-2.5'>
        <div className='flex items-center space-x-2 pl-4 text-sm text-gray-800'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='h-4 w-4'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <div className='space-x-1'>
            <span>궁금해요</span>
            <span>1</span>
          </div>
        </div>
        <div className=' flex items-center space-x-2 text-sm text-gray-800'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='h-4 w-4'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z'
              />
            </svg>
          </div>
          <div>
            <span>답변</span>
            <span>1</span>
          </div>
        </div>
      </div>

      {[1, 1, 1].map((_, i) => (
        <div className='mb-1 flex space-x-4 px-4 py-4' key={i}>
          <div className='aspect-square h-8 rounded-full bg-slate-300' />
          <div className='flex flex-col justify-center'>
            <span className=' text-sm font-medium text-gray-900'>
              Steve Jebs
            </span>
            <span className=' text-xs text-gray-600'>2시간 전</span>
            <span className='mt-3'>
              The best mandu restaurant is the one next to my house.
            </span>
          </div>
        </div>
      ))}
      <div className='mt-5 flex flex-col px-4'>
        <textarea
          className='placeholder:gray-300 rounded-md border-gray-300 focus:border-orange-400 focus:ring-orange-400'
          rows={4}
          placeholder='Answer this question!'
        ></textarea>
        <button className='mt-3 rounded-md bg-orange-500 py-2.5 text-sm font-medium text-white ring-orange-600 ring-offset-2 hover:bg-orange-600 focus:ring-2'>
          Reply
        </button>
      </div>
    </div>
  );
}

export default CommunityDetails;
