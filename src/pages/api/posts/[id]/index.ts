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
  const post = await client.post.findUnique({
    where: {
      id: Number(id?.toString()),
    },
    include: {
      answers: {
        select: {
          createdAt: true,
          answerText: true,
          id: true,
          user: {
            select: {
              id: true,
              name: true,
              avatar: true,
            },
          },
        },
      },
      user: {
        select: {
          name: true,
          id: true,
          avatar: true,
        },
      },
      _count: {
        select: {
          answers: true,
          wonderings: true,
        },
      },
    },
  });

  const isWondering = Boolean(
    await client.wondering.findFirst({
      where: {
        userId: user?.id,
        postId: Number(id?.toString()),
      },
    })
  );

  res.json({
    ok: true,
    post,
    isWondering,
  });
};

export default withApiSession(WithHandler({ methods: ['GET'], handler }));
