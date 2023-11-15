import { NextResponse } from "next/server"

export function middleware(request) {
    //   if (request.nextUrl.pathname != "/login") {
    return NextResponse.redirect(new URL("/login", request.url))
    // }

}

// only paths that are declared in config will redirect

export const config = {
    matcher: ["/about/aboutCollage/:path*", "/studentList/:path*"]
}