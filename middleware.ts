import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    // return NextResponse.redirect(new URL('/register', req.nextUrl))
    if (req.nextUrl.pathname === '/login') {
        return NextResponse.redirect(new URL('/register', req.nextUrl)) 
    }
}

// export const config = {
//     matcher: '/login'
// }