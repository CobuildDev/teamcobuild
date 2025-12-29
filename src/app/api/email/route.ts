import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, data } = body;

    // 1. Validation: Ensure we have a type and data object
    if (!type || !data) {
      return NextResponse.json({ error: 'Missing type or data' }, { status: 400 });
    }

    // 2. Dynamic Subject & Body Generation
    let emailSubject = '';
    let emailHtml = '';

    switch (type) {
      case 'proposal':
        emailSubject = `🚀 New Proposal: ${data.title}`;
        emailHtml = `
          <h3>New Project Proposal</h3>
          <p><strong>From:</strong> ${data.name} (${data.email})</p>
          <p><strong>Title:</strong> ${data.title}</p>
          <p><strong>Category:</strong> ${data.category}</p>
          <p><strong>Involvement:</strong> ${data.involvement}</p>
          <hr />
          <h4>The Problem</h4>
          <p>${data.problem}</p>
          <h4>The Solution</h4>
          <p>${data.solution}</p>
        `;
        break;

      case 'contact':
        emailSubject = `📬 Contact Inquiry: ${data.subject}`;
        emailHtml = `
          <h3>New Contact Message</h3>
          <p><strong>From:</strong> ${data.name} (${data.email})</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <hr />
          <h4>Message</h4>
          <p>${data.message}</p>
        `;
        break;

      case 'job':
        emailSubject = `💼 Job Application: ${data.role} - ${data.name}`;
        emailHtml = `
          <h3>New Job Application</h3>
          <p><strong>Applicant:</strong> ${data.name} (${data.email})</p>
          <p><strong>Role:</strong> ${data.role}</p>
          <p><strong>Link (CV/Portfolio):</strong> <a href="${data.link}">${data.link}</a></p>
          <hr />
          <h4>Cover Letter / Pitch</h4>
          <p>${data.coverLetter}</p>
        `;
        break;

      case 'pricing':
        emailSubject = `💰 Pricing Request: ${data.package}`;
        emailHtml = `
          <h3>Project Discussion Request</h3>
          <p><strong>Client:</strong> ${data.name} (${data.email})</p>
          <p><strong>Interested Package:</strong> ${data.package}</p>
          <p><strong>Budget Range:</strong> ${data.budget || 'Not specified'}</p>
          <hr />
          <h4>Project Details</h4>
          <p>${data.details}</p>
        `;
        break;

      default:
        return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
    }

    // 3. Send the Email
    const { error } = await resend.emails.send({
      from: 'CoBuild Forms <onboarding@resend.dev>',
      to: ['cobuildofficial@hotmail.com'], // Sent to your Outlook
      replyTo: data.email, // Hitting "Reply" in Outlook will email the user directly
      subject: emailSubject,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}