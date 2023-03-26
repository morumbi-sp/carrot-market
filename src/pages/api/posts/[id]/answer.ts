import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/libs/server/withHandler';
import client from '@/libs/server/client';
import { withApiSession } from '@/libs/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const {
    body: { answerText },
    session: { user },
    query: { id },
  } = req;
  const answer = await client.answer.create({
    data: {
      answerText,
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

  res.json({
    ok: true,
    answer,
  });
};

export default withApiSession(WithHandler({ methods: ['POST'], handler }));
