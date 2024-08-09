import { NextResponse } from "next/server";

export function POST(req){
    console.log('POST request to /api/chat');
    return NextResponse.json({ message: 'Hello from server' });
}