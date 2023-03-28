import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/libs/server/withHandler';
import client from '@/libs/server/client';
import { withApiSession } from '@/libs/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  if (req.method === 'POST') {
    const {
      query: { id },
      session: { user },
      body: { messageText },
    } = req;
    const message = await client.message.create({
      data: {
        messageText,
        user: {
          connect: {
            id: user?.id,
          },
        },
        stream: {
          connect: {
            id: Number(id?.toString()),
          },
        },
      },
    });

    res.json({
      ok: true,
      message,
    });
  }

  if (req.method === 'GET') {
    const {
      query: { id },
    } = req;
    const messages = await client.message.findMany({
      where: {
        streamId: Number(id?.toString()),
      },
    });
    res.json({
      ok: true,
      messages,
    });
  }
};

export default withApiSession(
  WithHandler({ methods: ['POST', 'GET'], handler })
);
