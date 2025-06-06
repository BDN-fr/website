import { NextResponse } from 'next/server';

let data = [
    {title:'Custom state', state:'Undefined'}
];

export async function GET() {
    return NextResponse.json(data);
}

export async function POST(request) {
    const password = request.headers.get('password');

    if (!password === process.env.PASSWORD) {
        return new NextResponse(JSON.stringify({ error: "unauthorized" }), {
            status: 401,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    const newData = await request.json();
    data = newData;
    return NextResponse.json({ message: 'Status updated' });
}