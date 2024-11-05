// src/app/api/auth/me/route.ts
import { NextResponse, NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as {
            userId: string;
            username: string;
            isAdmin: boolean;
        };

        return NextResponse.json({ username: decodedToken.username, isAdmin: decodedToken.isAdmin });
    } catch (error) {
        return NextResponse.json({ message: 'Invalid token' }, { status: 403 });
    }
}
