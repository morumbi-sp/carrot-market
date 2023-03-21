import { withIronSessionApiRoute } from 'iron-session/next';

const cookieOptions = {
  cookieName: 'carrotsession',
  password: process.env.COOKIE_PASSWORD!,
};

export const withApiSession = (fn: any) => {
  return withIronSessionApiRoute(fn, cookieOptions);
};
