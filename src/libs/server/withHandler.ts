import { NextApiHandler } from 'next';

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

const WithHandler = (
  method: 'POST' | 'GET',
  fn: NextApiHandler
): NextApiHandler => {
  return async (req, res): Promise<any> => {
    if (req.method !== method) {
      res.status(405).end();
    }
    try {
      await fn(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
};

export default WithHandler;
