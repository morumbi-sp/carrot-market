import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/libs/server/withHandler';
import client from '@/libs/server/client';
import { withApiSession } from '@/libs/server/withSession';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  if (req.method === 'GET') {
    const profile = await client.user.findUnique({
      where: { id: req.session.user?.id },
    });
    res.json({
      ok: true,
      profile,
    });
  }

  if (req.method === 'POST') {
    const {
      body: { name, email, phone },
      session: { user },
    } = req;
    if (email) {
      const alreadyExists = Boolean(
        await client.user.findFirst({
          where: {
            email,
            id: { not: user?.id },
          },
          select: {
            id: true,
          },
        })
      );
      if (alreadyExists) {
        return res.json({
          ok: false,
          error: 'Email is already taken input another.',
        });
      }
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          email,
        },
      });
    }
    if (phone) {
      const alreadyExists = Boolean(
        await client.user.findFirst({
          where: {
            phone,
            id: { not: user?.id },
          },
          select: {
            id: true,
          },
        })
      );
      if (alreadyExists) {
        return res.json({
          ok: false,
          error: 'Phone number is already taken input another.',
        });
      }
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          phone,
        },
      });
    }
    if (name) {
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          name,
        },
      });
    }
    res.json({
      ok: true,
    });
  }
};

export default withApiSession(
  WithHandler({ methods: ['GET', 'POST'], handler })
);
