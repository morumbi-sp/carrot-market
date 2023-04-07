import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/libs/server/withHandler';
import client from '@/libs/server/client';
import { withApiSession } from '@/libs/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const {
    session: { user },
  } = req;
  const allChats = await client.chat.findMany({
    where: {
      OR: [{ buyerId: user?.id }, { sellerId: user?.id }],
    },
    include: {
      product: {
        select: {
          name: true,
        },
      },
    },
  });
  res.json({
    ok: true,
    allChats,
  });
};

export default withApiSession(WithHandler({ methods: ['GET'], handler }));
