import WithHandler, { ResponseType } from '@/libs/server/withHandler';
import { withApiSession } from '@/libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';
import client from '@/libs/server/client';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const {
    session: { user },
  } = req;
  console.log(user);
  const reviews = await client.review.findMany({
    where: {
      createdForId: user?.id,
    },
    include: {
      createdBy: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  });
  res.json({
    ok: true,
    reviews,
  });
};

export default withApiSession(WithHandler({ methods: ['GET'], handler }));
