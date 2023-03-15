interface TextareaProps {
  label?: string;
  id?: string;
  [key: string]: any;
}

const Textarea = ({ label, id, ...rest }: TextareaProps) => {
  return (
    <div className='flex flex-col space-y-1'>
      {label ? (
        <label className='text-sm font-medium text-myText-darkest' htmlFor={id}>
          {label}
        </label>
      ) : null}
      <textarea
        className='rounded-md border-gray-300 focus:border-myOrange focus:ring-myOrange'
        id={id}
        rows={4}
      ></textarea>
    </div>
  );
};

export default Textarea;
