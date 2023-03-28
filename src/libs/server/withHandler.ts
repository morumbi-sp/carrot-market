import { NextApiHandler } from 'next';

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

type method = 'POST' | 'GET' | 'DELETE';

interface ConfigType {
  methods: method[];
  handler: NextApiHandler;
  isPrivate?: boolean;
}

const WithHandler = ({
  methods,
  handler,
  isPrivate = true,
}: ConfigType): NextApiHandler => {
  return async (req, res): Promise<any> => {
    if (req.method && !methods.includes(req.method as any)) {
      res.status(405).end();
    }
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: 'Please login' });
    }
    try {
      await handler(req, res);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
};

export default WithHandler;
