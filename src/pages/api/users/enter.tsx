import client from '@/libs/server/client';
import WithHandler, { ResponseType } from '@/libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';
import sgMail from '@sendgrid/mail';

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const { phone, email } = req.body;
  const user = phone ? { phone } : email ? { email } : null;
  const payload = Math.floor(100000 + Math.random() * 900000) + '';
  if (!user) return res.status(400).json({ ok: false });
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: 'Anonymous',
            ...user,
          },
        },
      },
    },
  });

  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MESSAGE_SID,
    //   to: process.env.MY_PHONE_NUMBER!,
    //   body: `Your login token is ${payload}`,
    // });
    // console.log(message);
  } else if (email) {
    // const email = await sgMail.send({
    //   to: 'zun0323@gmail.com',
    //   from: 'zun0323@naver.com',
    //   subject: 'Sending with SendGrid is Fun',
    //   text: `Your login Token is ${payload}`,
    //   html: `<strong>Your login Token is ${payload}</strong>`,
    // });
    // console.log(email);
  }
  return res.json({
    ok: true,
  });
};

export default WithHandler({ method: 'POST', handler, isPrivate: false });
