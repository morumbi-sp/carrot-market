import Layout from '@/components/layout';
import { Chat, Product } from '@prisma/client';
import { NextPage } from 'next';
import Link from 'next/link';
import useSWR from 'swr';

interface ChatWithProduct extends Chat {
  product: Product;
}

interface AllChatsResponse {
  ok: boolean;
  allChats: ChatWithProduct[];
}

const ChatAll: NextPage = () => {
  const { data } = useSWR<AllChatsResponse>(`/api/chats`);

  const chatsByUserAndProduct = data?.allChats.reduce((acc, chat) => {
    const key = `${chat.buyerId}-${chat.productId}`;
    if (!acc[key]) {
      acc[key] = [chat];
    } else {
      acc[key].push(chat);
    }
    return acc;
  }, {} as Record<string, ChatWithProduct[]>);

  const chatsArray = Object.values(chatsByUserAndProduct ?? {});

  console.log(chatsArray);

  return (
    <Layout title='채팅' hasTabBar>
      <div className='divide-y'>
        {chatsArray.map((chatRoom) => (
          <Link
            href={`/chats/${chatRoom[0].buyerId}/${chatRoom[0].productId}`}
            className='flex space-x-4 px-4 py-3'
            key={chatRoom[0].id}
          >
            <div className='aspect-square h-10 rounded-full bg-slate-300' />
            <div className='flex flex-col justify-center'>
              <span className='text-sm font-medium text-gray-900'>
                {chatRoom[0].product.name}
              </span>
              <span className='text-xs text-gray-600'>
                {chatRoom[chatRoom.length - 1].messageText}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default ChatAll;
