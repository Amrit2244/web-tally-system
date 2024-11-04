// src/app/api/auth/user/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/utils/jwt'; // Import verifyToken from your jwt utility
import { cookies } from 'next/headers'; // Ensure you import cookies from next/headers

export async function GET() {
    const cookieStore =  await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
        return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (typeof decoded === 'string') {
        return NextResponse.json({ error: decoded }, { status: 401 });
    }

    return NextResponse.json({ username: decoded.username });
}
