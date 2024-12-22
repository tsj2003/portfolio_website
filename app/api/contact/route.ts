import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const { error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, message }]);

    if (error) throw error;

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}