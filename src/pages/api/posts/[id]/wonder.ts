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
    query: { id },
  } = req;

  const alreadyExists = await client.wondering.findFirst({
    where: {
      userId: user?.id,
      postId: Number(id?.toString()),
    },
    select: {
      id: true,
    },
  });

  if (alreadyExists) {
    await client.wondering.delete({
      where: {
        id: alreadyExists.id,
      },
    });
  } else {
    const wondering = await client.wondering.create({
      data: {
        user: {
          connect: {
            id: user?.id,
          },
        },
        post: {
          connect: {
            id: Number(id?.toString()),
          },
        },
      },
    });
    return res.json({
      ok: true,
    });
  }
};

export default withApiSession(WithHandler({ methods: ['POST'], handler }));
