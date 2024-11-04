import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '@/config/db';
import User from '@/models/user';

connectDB();

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json() as { username: string; password: string };
        
        const user = await User.findOne({ username });
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
        }

        const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

        // Optionally, if you want to save token to the database
        user.jwtToken = token;
        await user.save();

        // Set token in cookies
        const response = NextResponse.json({ message: 'Login successful' });
        response.cookies.set('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
