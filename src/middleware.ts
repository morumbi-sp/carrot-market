import { NextRequest, userAgent } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const ua = userAgent(req);
  if (ua?.isBot) {
    return new Response("Plz don't be a bot. be human", {
      status: 403,
      statusText: 'Nope!!',
    });
  }
  // if (!req.cookies.has('carrotsession') && !req.url.includes('/enter')) {
  //   req.nextUrl.searchParams.set('from', req.nextUrl.pathname);
  //   req.nextUrl.pathname = '/enter';
  //   return NextResponse.redirect(req.nextUrl);
  // }

  // if (request.nextUrl.pathname.startsWith('/chats')) {
  //   console.log('here is chats!');
  // }
}
