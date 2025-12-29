import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // DEBUG: Print credentials to terminal (Check if they are undefined!)
    if (!process.env.BREVO_API_KEY) console.error("❌ ERROR: BREVO_API_KEY is missing in .env.local");
    if (!process.env.BREVO_LIST_ID) console.error("❌ ERROR: BREVO_LIST_ID is missing in .env.local");

    // Convert List ID to number (Brevo requires an Integer, not a String)
    const listId = Number(process.env.BREVO_LIST_ID);

    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY as string,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        listIds: [listId], 
        updateEnabled: true, 
      }),
    });

    // If Brevo rejects it, print the EXACT reason why
    if (!res.ok) {
      const errorData = await res.json();
      console.error('🛑 BREVO API ERROR:', JSON.stringify(errorData, null, 2)); // <--- CHECK YOUR TERMINAL FOR THIS
      return NextResponse.json(
        { error: errorData.message || 'Failed to subscribe' }, 
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}