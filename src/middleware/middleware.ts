import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/utils/jwt';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  try {
    if (!token || !verifyToken(token)) {
      return NextResponse.redirect(new URL('/login', req.url));  // Redirect to login if token is invalid
    }
  } catch (error) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/protected-route/:path*'],  // Only apply to specific routes
};
