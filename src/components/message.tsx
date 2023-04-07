import { cls, imageUrl } from '@/libs/client/utils';

interface MessageProps {
  message: string;
  image?: string;
  reversed?: boolean;
}

const Message = ({ message, image, reversed }: MessageProps) => {
  return (
    <div
      className={cls(
        'flex items-start space-x-2',
        reversed ? 'flex-row-reverse space-x-reverse' : ''
      )}
    >
      {imageUrl ? (
        <img
          src={imageUrl(image || '', 'thumbNail')}
          className='aspect-square w-8 rounded-full bg-slate-400'
        />
      ) : (
        <div className='aspect-square w-8 rounded-full bg-slate-400' />
      )}

      <span className='w-1/2 rounded-md border border-gray-300 p-2 text-sm text-myText-darkest'>
        {message}
      </span>
    </div>
  );
};

export default Message;
