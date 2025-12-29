import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Ensure required environment variables are present; convert list ID to number
    if (!process.env.BREVO_API_KEY) console.error("BREVO_API_KEY is missing in .env.local");
    if (!process.env.BREVO_LIST_ID) console.error("BREVO_LIST_ID is missing in .env.local");
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

    // Forward Brevo error message to client and log full response for debugging
    if (!res.ok) {
      const errorData = await res.json();
      console.error('BREVO API ERROR:', JSON.stringify(errorData, null, 2));
      return NextResponse.json({ error: errorData.message || 'Failed to subscribe' }, { status: res.status });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}