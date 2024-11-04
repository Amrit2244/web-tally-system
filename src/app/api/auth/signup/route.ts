import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/config/db';
import User from '@/models/user';

export async function POST(request: Request) {
    await connectDB();

    const { firstName, lastName, username, password } = await request.json();

    try {
        // Check if username is taken
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return NextResponse.json({ message: 'Username is already taken' }, { status: 400 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            firstName,
            lastName,
            username,
            password: hashedPassword,
            isAdmin: false, // Set to false by default
        });

        await newUser.save();
        return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error registering user:', error);
        return NextResponse.json({ message: 'Error registering user' }, { status: 500 });
    }
}
