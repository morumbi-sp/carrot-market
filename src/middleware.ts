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

  if (!req.cookies.has('carrotsession') && !req.url.includes('/enter')) {
    const url = req.nextUrl.clone();
    console.log(url);
    url.pathname = '/enter';
    console.log(url);
    return NextResponse.redirect(url);
  }
}
export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};
