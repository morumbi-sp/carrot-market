import InputChat from '@/components/input-chat';
import Layout from '@/components/layout';
import Message from '@/components/message';
import { NextPage } from 'next';

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className='px-4'>
        <div className='space-y-4'>
          <Message message='Hi how much are you selling them for?' />
          <Message message='I want $20,000' reversed />
          <Message message='미쳤어' />
          <Message message='Hi how much are you selling them for?' />
          <Message message='I want $20,000' reversed />
          <Message message='미쳤어' />
          <Message message='Hi how much are you selling them for?' />
          <Message message='I want $20,000' reversed />
          <Message message='미쳤어' />
          <Message message='Hi how much are you selling them for?' />
          <Message message='I want $20,000' reversed />
          <Message message='미쳤어' />
          <Message message='Hi how much are you selling them for?' />
          <Message message='I want $20,000' reversed />
          <Message message='미쳤어' />
          <Message message='Hi how much are you selling them for?' />
          <Message message='I want $20,000' reversed />
          <Message message='미쳤어' />
          <Message message='Hi how much are you selling them for?' />
          <Message message='I want $20,000' reversed />
          <Message message='미쳤어' />
          <Message message='Hi how much are you selling them for?' />
          <Message message='I want $20,000' reversed />
          <Message message='미쳤어' />
        </div>
        <InputChat />
      </div>
    </Layout>
  );
};

export default ChatDetail;
