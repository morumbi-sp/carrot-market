import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/libs/server/withHandler';
import client from '@/libs/server/client';
import { withApiSession } from '@/libs/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  if (req.method === 'POST') {
    const {
      session: { user },
      query: { id },
      body: { messageText },
    } = req;

    const seller = await client.product.findUnique({
      where: {
        id: Number(id![1]),
      },
    });

    const createChat = await client.chat.create({
      data: {
        messageText,
        buyerId: Number(id![0]),
        sellerId: seller?.userId ?? 0,
        user: {
          connect: {
            id: user?.id,
          },
        },
        product: {
          connect: {
            id: Number(id![1]),
          },
        },
      },
    });
    res.json({
      ok: true,
      createChat,
    });
  }
  if (req.method === 'GET') {
    const {
      query: { id },
    } = req;
    const chats = await client.chat.findMany({
      where: {
        buyerId: Number(id![0]),
        productId: Number(id![1]),
      },
      include: {
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
    });
    res.json({
      ok: true,
      chats,
    });
  }
};

export default withApiSession(
  WithHandler({ methods: ['POST', 'GET'], handler })
);
