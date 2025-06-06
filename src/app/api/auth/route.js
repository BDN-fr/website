import { NextResponse } from 'next/server';

export async function POST(request) {
    const { password } = await request.json();

    if (password === process.env.PASSWORD) {
        return NextResponse.json({ authenticated: true });
    } else {
        return NextResponse.json({ authenticated: false });
    }
}