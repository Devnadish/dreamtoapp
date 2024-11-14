import  createMiddleware  from 'next-intl/middleware';
import { auth, clerkMiddleware } from '@clerk/nextjs/server'
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';



const handleI18nRouting = createMiddleware(routing);


export default clerkMiddleware((auth, request: NextRequest)=>{
    return handleI18nRouting(request);
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    '/', '/(ar|en)/:path*'
  ],
}