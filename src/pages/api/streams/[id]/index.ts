import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/libs/server/withHandler';
import client from '@/libs/server/client';
import { withApiSession } from '@/libs/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const {
    query: { id },
  } = req;
  const stream = await client.stream.findUnique({
    where: {
      id: Number(id?.toString()),
    },
  });

  res.json({
    ok: true,
    stream,
  });
};

export default withApiSession(WithHandler({ methods: ['GET'], handler }));
