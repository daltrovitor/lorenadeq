import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";

  // Rewrite requests for teste.dominio.com (or teste.localhost:3000 for development) to the /teste route
  if (host.startsWith("teste.")) {
    if (url.pathname === "/") {
      url.pathname = "/teste";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.png (favicon/icon files)
     * - all files with extensions in public folder (e.g., webp, jpeg, jpg, png, svg)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|.*\\..*).*)",
  ],
};
