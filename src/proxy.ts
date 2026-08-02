import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { CUSTOMER_SESSION_COOKIE } from "@/lib/customer-auth";

function unauthorizedResponse() {
  return new NextResponse("Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Owner Area"',
    },
  });
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!request.cookies.get(CUSTOMER_SESSION_COOKIE)?.value) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    return NextResponse.next();
  }

  if (!request.nextUrl.pathname.startsWith("/owner")) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");

  if (!authHeader?.startsWith("Basic ")) {
    return unauthorizedResponse();
  }

  const credentials = Buffer.from(authHeader.slice(6), "base64").toString("utf8");
  const [username, password] = credentials.split(":");
  const expectedUsername = process.env.OWNER_USERNAME || "admin";
  const expectedPassword = process.env.OWNER_PASSWORD || "cerberus1";

  if (username !== expectedUsername || password !== expectedPassword) {
    return unauthorizedResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/owner/:path*", "/dashboard/:path*"],
};