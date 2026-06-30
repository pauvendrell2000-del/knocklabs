import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Flip to false when the site is ready to go live
const MAINTENANCE_MODE = true;

const locales = ["es", "en"];

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "es",
});

export default function middleware(request: NextRequest) {
  if (MAINTENANCE_MODE) {
    const segments = request.nextUrl.pathname.split("/").filter(Boolean);

    // If visiting a sub-page under a locale (e.g. /es/about), redirect to /locale
    if (segments.length > 1 && locales.includes(segments[0])) {
      return NextResponse.redirect(new URL(`/${segments[0]}`, request.url));
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
