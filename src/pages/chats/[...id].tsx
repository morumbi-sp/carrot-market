import InputChat from '@/components/input-chat';
import Item from '@/components/item';
import Layout from '@/components/layout';
import Message from '@/components/message';
import { Chat, Product, User } from '@prisma/client';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { ItemDetailResponse } from '../products/[id]';
import Image from 'next/image';
import { imageUrl } from '@/libs/client/utils';
import Link from 'next/link';
import useMutation from '@/libs/client/useMutation';
import { useForm } from 'react-hook-form';
import useUser from '@/libs/client/useUser';
import { useEffect, useState } from 'react';

interface MessageForm {
  messageText: string;
}

interface ChatWithUser extends Chat {
  user: User;
}

interface ChatsResponse {
  ok: boolean;
  chats: ChatWithUser[];
}

const ChatDetail: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<MessageForm>();

  const { data, error } = useSWR<ItemDetailResponse>(
    router.query.id ? `/api/products/${router.query.id[1]}` : null
  );
  const [postChat, { data: mutationData, loading }] = useMutation(
    router.query.id
      ? `/api/chats/${router.query.id[0]}/${router.query.id[1]}`
      : ''
  );
  const { data: chatsData, mutate } = useSWR<ChatsResponse>(
    router.query.id
      ? `/api/chats/${router.query.id[0]}/${router.query.id[1]}`
      : null
  );

  const [shouldFetchChats, setShouldFetchChats] = useState(false);

  const onValid = async ({ messageText }: MessageForm) => {
    if (loading) return;
    reset();
    postChat({ messageText });
  };
  useEffect(() => {
    if (mutationData) {
      setShouldFetchChats(true);
    }
  }, [mutationData]);

  useEffect(() => {
    if (shouldFetchChats) {
      mutate();
      setShouldFetchChats(false);
    }
  }, [mutate, shouldFetchChats]);

  return (
    <Layout canGoBack>
      <div className='px-4'>
        <div className='mb-4 flex justify-between border-b pb-2'>
          {data?.product ? (
            <div className='flex w-full items-center space-x-4 '>
              {data.product.image ? (
                <Image
                  width={80}
                  height={80}
                  src={imageUrl(data.product.image, 'avatar')}
                  className='h-20 w-20'
                  alt='product'
                  priority
                />
              ) : (
                <div className='h-20 w-20 rounded-md bg-gray-400 ' />
              )}

              <div className='space-y-1'>
                <div className='flex flex-col'>
                  <span className='text-sm font-medium'>
                    {data.product.name}
                  </span>
                </div>
                <div>
                  <span className=' font-medium'>${data.product.price}</span>
                </div>
              </div>
            </div>
          ) : (
            'loading...'
          )}

          <div className='flex w-full justify-end space-x-4 py-3'>
            {data?.product?.user?.avatar ? (
              <Image
                width={60}
                height={60}
                src={imageUrl(data?.product.user.avatar, 'avatar')}
                className='h-[60px] w-[60px] rounded-full bg-slate-300'
                alt='avatar'
              />
            ) : (
              <div className='aspect-square h-12 rounded-full bg-slate-300' />
            )}

            <div className='flex flex-col justify-center'>
              <span className='text-sm font-medium text-gray-900'>
                {data?.product?.user?.name}
              </span>
              <Link
                href={`user/profile/${data?.product?.user?.id}`}
                className='text-xs text-gray-600'
              >
                View profile →
              </Link>
            </div>
          </div>
        </div>
        <div className='space-y-4'>
          {chatsData?.chats?.map((chat) => (
            <Message
              key={chat.id}
              message={chat.messageText}
              reversed={user?.id === chat.userId}
              image={chat.user.avatar!}
            />
          ))}
        </div>
        <InputChat
          register={register('messageText', { required: true })}
          onSubmit={handleSubmit(onValid)}
        />
      </div>
    </Layout>
  );
};

export default ChatDetail;
