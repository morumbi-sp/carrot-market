function Chat() {
  return (
    <div className='divide-y py-10'>
      {[1, 1, 1, 1, 1].map((_, i) => (
        <div className='flex space-x-4 px-4 py-3' key={i}>
          <div className='aspect-square h-10 rounded-full bg-slate-300' />
          <div className='flex flex-col justify-center'>
            <span className='text-sm font-medium text-gray-900'>
              Steve Jebs
            </span>
            <span className='text-xs text-gray-600'>
              See you tomorrow at 2 in the corner
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chat;
