import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        const aiResponse = `AgriFlow AI: Glad to have "${message}". We are working on smart agriculture solutions to help farmers optimize their operations and increase yields.`;

        return NextResponse.json({ reply: aiResponse });
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}