import InputChat from '@/components/input-chat';
import Layout from '@/components/layout';
import Message from '@/components/message';
import type { NextPage } from 'next';

const LiveDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className=' px-4'>
        <div>
          <div className='aspect-video w-full rounded-md bg-slate-300'></div>
          <h1 className='mt-4 text-2xl font-bold text-gray-900'>Galaxy S50</h1>
          <h3 className='mt-2 text-xl text-gray-700'>$140</h3>
          <p className='my-6 text-gray-700'>
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
        </div>
        <div className='mt-3 h-[45vh] space-y-4 overflow-y-scroll '>
          <Message message='Hi how much are you selling them for?' />
          <Message message='I want $20,000' reversed />
          <Message message='Hi how much are you selling them for?' />
          <Message message='I want $20,000' reversed />
          <Message message='Hi how much are you selling them for?' />
          <Message message='I want $20,000' reversed />
          <Message message='Hi how much are you selling them for?' />
          <Message message='I want $20,000' reversed />
          <Message message='Hi how much are you selling them for?' />
          <Message message='I want $20,000' reversed />
          <Message message='Hi how much are you selling them for?' />
          <Message message='I want $20,000' reversed />
          <Message message='Hi how much are you selling them for?' />
          <Message message='I want $20,000' reversed />
        </div>
        <InputChat />
      </div>
    </Layout>
  );
};

export default LiveDetail;
