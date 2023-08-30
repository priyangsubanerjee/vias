import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  let pathname = request.nextUrl.pathname;
  let session = await getToken({
    req: request,
    secret: process.env.SECRET_SALT,
  });

  if (pathname === "/login" || pathname == "/register") {
    if (session) {
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      return NextResponse.next();
    }
  } else {
    if (session) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/login", "/register", "/cart/:path*"],
};
