import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/libs/server/withHandler';
import client from '@/libs/server/client';
import { withApiSession } from '@/libs/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const { id } = req.query;
  const product = await client.product.findUnique({
    where: {
      id: Number(id?.toString()),
    },
    include: {
      user: {
        select: {
          name: true,
          id: true,
          avatar: true,
        },
      },
    },
  });
  res.json({
    ok: true,
    product,
  });
};

export default withApiSession(WithHandler({ methods: ['GET'], handler }));
