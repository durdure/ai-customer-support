import { NextResponse } from "next/server";

export default function POST(req){
    return NextResponse.json({ reply: "Hello, how can I help you today?" });
}