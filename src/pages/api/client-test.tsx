import client from '@/libs/client';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await client.user.create({
    data: {
      email: 'ryan0615@daum.net',
      name: 'Ryan',
      phone: 981442831,
    },
  });

  res.json({
    ok: true,
  });
};

export default handler;
