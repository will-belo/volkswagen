import { cookies } from "next/headers";
import { userIsLoggedInMiddleware, adminIsLoggedInMiddleware, redirectIfLoggedMiddleware } from '@/middlewares';
import { redirect } from "next/dist/server/api-utils";

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        {
          source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
          missing: [
            { type: 'header', key: 'next-router-prefetch' },
            { type: 'header', key: 'purpose', value: 'prefetch' },
          ],
        },
     
        {
          source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
          has: [
            { type: 'header', key: 'next-router-prefetch' },
            { type: 'header', key: 'purpose', value: 'prefetch' },
          ],
        },
     
        {
          source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
          has: [{ type: 'header', key: 'x-present' }],
          missing: [{ type: 'header', key: 'x-missing', value: 'prefetch' }],
        },
    ],
}

export async function middleware(req) {
    const cookiesStore = cookies()

    let token = cookiesStore.get('singlePassToken')

    if(!token){ token = '' }

    const url = req.nextUrl.clone()
    
    if (req.nextUrl.pathname.startsWith('/dashboard')){
      return userIsLoggedInMiddleware(token, url)
    }

    if (req.nextUrl.pathname.startsWith('/admin')){
      return adminIsLoggedInMiddleware(token, url)
    }

    /*if (req.nextUrl.pathname.startsWith('/auth')){
      return redirectIfLoggedMiddleware(token, url)
    }*/
}
