import { NextResponse } from 'next/server';
import { getMessages } from '@/lib/messages';

export async function GET() {
  try {
    const messages = getMessages();
    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
