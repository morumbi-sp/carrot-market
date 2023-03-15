interface InputProps {
  type: 'text' | 'phone' | 'price';
  title: string;
  [key: string]: any;
}

const inputColor =
  'border-gray-300 shadow-sm focus:border-myOrange focus:ring-myOrange';

const Input = ({ type, title, ...rest }: InputProps) => {
  return (
    <div className='flex flex-col space-y-2 '>
      <label
        className='text-sm font-medium text-myText-darkest'
        htmlFor={`input${title}`}
      >
        {title}
      </label>
      {type === 'text' ? (
        <input
          className={`rounded-md ${inputColor}`}
          type='text'
          id={`input${title}`}
          {...rest}
        />
      ) : null}
      {type === 'phone' ? (
        <div className='flex'>
          <span className='flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-myText-medium shadow-sm'>
            +82
          </span>
          <input
            className={`w-full rounded-r-md ${inputColor}`}
            type='text'
            id={`input${title}`}
            {...rest}
          />
        </div>
      ) : null}
      {type === 'price' ? (
        <div className='relative flex items-center'>
          <span className='absolute select-none px-3 text-myText-lightest'>
            $
          </span>
          <input
            className={`w-full rounded-md px-7 placeholder:text-myText-lightest ${inputColor}`}
            type='text'
            id={`input${title}`}
            placeholder='0.00'
            {...rest}
          />
          <span className='absolute right-0 select-none px-3 text-myText-lightest'>
            USD
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default Input;
