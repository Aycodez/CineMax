// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import {  NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    // console.log("token: ", req.nextauth.token);

    if (req.nextUrl.pathname.startsWith("/admin") && req?.nextauth?.token?.user?.role !== "admin")
      return NextResponse.redirect(new URL("/", req.url));

    if (req.nextUrl.pathname.startsWith("/dashboard") && req?.nextauth?.token?.user?.role !== "user")
      return NextResponse.redirect(new URL("/", req.url));
    if (req.nextUrl.pathname.startsWith("/api/users") && req?.nextauth?.token?.user?.role !== "admin")
      return NextResponse.redirect(new URL("/dashboard", req.url));
    if (req.nextUrl.pathname.startsWith("/api/profile") && req?.nextauth?.token?.user?.role !== "user")
      return NextResponse.redirect(new URL("/login", req.url));
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (!token) {
          return false;
        }
      },
    },
  
  }
);

export const config = {
  // matcher: ["/admin/:path*", "/dashboard/:path*"],
  matcher: ["/admin/:path*", "/dashboard/:path*", 
    "/api/users:path*", "/api/profile:path*"],
};
