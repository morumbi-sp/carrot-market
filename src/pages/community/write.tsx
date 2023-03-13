function Write() {
  return (
    <form className='mt-5 flex flex-col px-4'>
      <textarea
        className='placeholder:gray-300 rounded-md border-gray-300 focus:border-orange-400 focus:ring-orange-400'
        rows={4}
        placeholder='Ask a question!'
      ></textarea>
      <button className='mt-3 rounded-md bg-orange-500 py-2.5 text-sm font-medium text-white ring-orange-600 ring-offset-2 hover:bg-orange-600 focus:ring-2'>
        Post
      </button>
    </form>
  );
}

export default Write;
