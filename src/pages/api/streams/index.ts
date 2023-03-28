import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/libs/server/withHandler';
import client from '@/libs/server/client';
import { withApiSession } from '@/libs/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  if (req.method === 'GET') {
    const streams = await client.stream.findMany({});
    res.json({
      ok: true,
      streams,
    });
  }
  if (req.method === 'POST') {
    const {
      body: { name, price, description },
      session: { user },
    } = req;

    const stream = await client.stream.create({
      data: {
        name,
        price,
        description,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    res.json({
      ok: true,
      stream,
    });
  }
};

export default withApiSession(
  WithHandler({ methods: ['POST', 'GET'], handler })
);
