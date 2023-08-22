import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  let pathname = request.nextUrl.pathname;
  let onboardingsuccess =
    request.cookies.get("onboardingsuccess")?.value || null;
  let session = await getToken({
    req: request,
    secret: process.env.JWT_SECRET,
  });

  if ((pathname === "/login" || pathname == "/register") && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/login", "/register"],
};
