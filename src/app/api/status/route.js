import { NextResponse } from 'next/server';

let data = [
    {title:'Title', state:'State'}
];

export async function GET() {
    return NextResponse.json(data);
}

export async function POST(request) {
    const newData = await request.json();
    data = newData;
    return NextResponse.json({ message: 'Status updated' });
}