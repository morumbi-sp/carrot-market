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
  const terms = product?.name.split(' ').map((word) => ({
    name: {
      contains: word,
    },
  }));
  const relatedProducts = await client.product.findMany({
    where: {
      OR: terms,
      NOT: {
        id: product?.id,
      },
    },
  });
  res.json({
    ok: true,
    product,
    relatedProducts,
  });
};

export default withApiSession(WithHandler({ methods: ['GET'], handler }));
