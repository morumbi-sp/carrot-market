import InputChat from '@/components/input-chat';
import Layout from '@/components/layout';
import MessageComponent from '@/components/message';
import useMutation from '@/libs/client/useMutation';
import useUser from '@/libs/client/useUser';
import { Message, Stream, User } from '@prisma/client';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';

interface StreamResponse {
  ok: boolean;
  stream: Stream;
}

interface MessageForm {
  messageText: string;
}

interface MessageResponse {
  ok: boolean;
  message: Message;
}

interface MessageWithUser extends Message {
  user: User;
}

interface MessagesDataResponse {
  ok: boolean;
  messages: MessageWithUser[];
}

const LiveDetail: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<MessageForm>();
  const { data: streamData } = useSWR<StreamResponse>(
    router.query.id ? `/api/streams/${router.query.id}` : null
  );
  const { data: messageData, mutate } = useSWR<MessagesDataResponse>(
    router.query.id ? `/api/streams/${router.query.id}/messages` : null
  );

  const [sendMessage, { data: sendMessageData, loading }] =
    useMutation<MessageResponse>(`/api/streams/${router.query.id}/messages`);

  const onValid = ({ messageText }: MessageForm) => {
    if (loading) return;
    reset();
    sendMessage({ messageText });
  };

  useEffect(() => {
    mutate();
  }, [sendMessageData, mutate]);

  return (
    <Layout canGoBack>
      <div className=' px-4'>
        <div>
          <div className='aspect-video w-full rounded-md bg-slate-300'></div>
          <h1 className='mt-4 text-2xl font-bold text-gray-900'>
            {streamData?.stream.name}
          </h1>
          <h3 className='mt-2 text-xl text-gray-700'>
            ${streamData?.stream.price}
          </h3>
          <p className='my-6 text-gray-700'>{streamData?.stream.description}</p>
        </div>
        <div className='mt-3 h-[45vh] space-y-4 overflow-y-scroll '>
          <h1 className='text-xl font-bold text-gray-900'>Live Chat</h1>
          {messageData?.messages.map((message) => (
            <MessageComponent
              key={message.id}
              message={message.messageText}
              reversed={user?.id === message.userId}
            />
          ))}
        </div>

        <InputChat
          onSubmit={handleSubmit(onValid)}
          register={register('messageText', { required: true })}
        />
      </div>
    </Layout>
  );
};

export default LiveDetail;
