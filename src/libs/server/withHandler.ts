import { NextApiHandler } from 'next';

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

interface ConfigType {
  method: 'POST' | 'GET';
  handler: NextApiHandler;
  isPrivate?: boolean;
}

const WithHandler = ({
  method,
  handler,
  isPrivate = true,
}: ConfigType): NextApiHandler => {
  return async (req, res): Promise<any> => {
    if (req.method !== method) {
      res.status(405).end();
    }
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: 'Please login' });
    }
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
};

export default WithHandler;
