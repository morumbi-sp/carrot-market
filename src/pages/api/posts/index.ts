import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/libs/server/withHandler';
import client from '@/libs/server/client';
import { withApiSession } from '@/libs/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  if (req.method === 'GET') {
    const {
      query: { latitude, longitude },
    } = req;
    const latitudeNumber = Number(latitude?.toString());
    const longitudeNumber = Number(longitude?.toString());
    const posts = await client.post.findMany({
      // where: {
      //   latitude: {
      //     gte: latitudeNumber - 0.01,
      //     lte: latitudeNumber + 0.01,
      //   },
      //   longitude: {
      //     gte: longitudeNumber - 0.01,
      //     lte: longitudeNumber + 0.01,
      //   },
      // },
      include: {
        user: {
          select: {
            name: true,
            id: true,
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
    res.json({
      ok: true,
      posts,
    });
  }

  if (req.method === 'POST') {
    const {
      body: { question },
      session: { user },
    } = req;

    const post = await client.post.create({
      data: {
        question,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    res.json({
      ok: true,
      post,
    });
  }
};

export default withApiSession(
  WithHandler({ methods: ['POST', 'GET'], handler })
);
