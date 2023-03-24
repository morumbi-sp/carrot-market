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
    session: { user },
  } = req;

  const alreadyExists = await client.fav.findFirst({
    where: {
      productId: Number(id?.toString()),
      userId: user?.id,
    },
  });

  if (alreadyExists) {
    //delete
    await client.fav.delete({
      where: {
        id: alreadyExists.id,
      },
    });
  } else {
    //create
    await client.fav.create({
      data: {
        user: {
          connect: {
            id: user?.id,
          },
        },
        product: {
          connect: {
            id: Number(id?.toString()),
          },
        },
      },
    });
  }

  res.json({
    ok: true,
  });
};

export default withApiSession(WithHandler({ methods: ['POST'], handler }));
