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
  const favs = await client.fav.findMany({
    where: { userId: user?.id },
    include: {
      product: {
        select: {
          name: true,
          price: true,
          id: true,
          _count: {
            select: {
              favs: true,
            },
          },
        },
      },
    },
  });
  res.json({
    ok: true,
    favs,
  });
};

export default withApiSession(WithHandler({ methods: ['GET'], handler }));
