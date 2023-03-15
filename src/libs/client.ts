import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

client.user.create({
  data: {
    email: 'zun0323@daum.net',
    name: 'zun0323',
  },
});
