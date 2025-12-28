import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, title, category, problem, solution, involvement } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'CoBuild Proposal <onboarding@resend.dev>', // Use this exact default email for testing
      to: ['cobuildofficial@hotmail.com'], // REPLACE THIS with your personal email
      subject: `New Proposal: ${title}`,
      html: `
        <h3>New Project Proposal</h3>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Involvement:</strong> ${involvement}</p>
        <hr />
        <h4>The Problem</h4>
        <p>${problem}</p>
        <h4>The Solution</h4>
        <p>${solution}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}