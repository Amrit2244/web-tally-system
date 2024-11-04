import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const response = NextResponse.json({ message: 'Logout successful' }, { status: 200 });
  response.cookies.set('token', '', { httpOnly: true, secure: true, path: '/', maxAge: 0 });  // Clear token
  return response;
}
