import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EnquiryPayload {
  fullName: string;
  organisation?: string;
  email: string;
  phone?: string;
  subject: string;
  enquiryType: string;
  message: string;
}

function buildHtml(data: EnquiryPayload): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
           <td style="padding:8px 12px;font-weight:600;color:#1a1a3e;white-space:nowrap;vertical-align:top;">${label}</td>
           <td style="padding:8px 12px;color:#3c3c3c;">${value}</td>
         </tr>`
      : '';

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f1f1f0;font-family:Poppins,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f1f0;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:6px;overflow:hidden;border:1px solid #e5e5e5;">

        <!-- Header -->
        <tr>
          <td style="background:#1a1a3e;padding:28px 32px;">
            <p style="margin:0;font-family:Montserrat,Arial,sans-serif;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:0.02em;">
              Sona T. Sesay — New Enquiry
            </p>
            <p style="margin:6px 0 0;font-size:12px;color:#b0b8d8;letter-spacing:0.12em;text-transform:uppercase;">
              Official Correspondence
            </p>
          </td>
        </tr>

        <!-- Badge -->
        <tr>
          <td style="padding:20px 32px 0;">
            <span style="display:inline-block;background:#f0f4ff;border:1px solid #c7d2fe;border-radius:100px;padding:5px 14px;font-size:11px;font-weight:700;color:#1a1a3e;letter-spacing:0.1em;text-transform:uppercase;">
              ${data.enquiryType}
            </span>
          </td>
        </tr>

        <!-- Details table -->
        <tr>
          <td style="padding:20px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
              ${row('Full Name', data.fullName)}
              ${row('Organisation', data.organisation || '')}
              ${row('Email', `<a href="mailto:${data.email}" style="color:#1a1a3e;">${data.email}</a>`)}
              ${row('Phone', data.phone || '')}
              ${row('Subject', data.subject)}
            </table>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="padding:0 32px;"><hr style="border:none;border-top:1px solid #e5e5e5;" /></td></tr>

        <!-- Message -->
        <tr>
          <td style="padding:20px 32px 32px;">
            <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#9ca3af;">Message</p>
            <p style="margin:0;font-size:14px;color:#3c3c3c;line-height:1.8;white-space:pre-wrap;">${data.message}</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f1f1f0;padding:16px 32px;border-top:1px solid #e5e5e5;">
            <p style="margin:0;font-size:11px;color:#9ca3af;">
              This message was submitted via the official enquiry form on
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color:#1a1a3e;">sonasesay.com</a>.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildAutoReplyHtml(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f1f1f0;font-family:Poppins,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f1f0;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:6px;overflow:hidden;border:1px solid #e5e5e5;">
        <tr>
          <td style="background:#1a1a3e;padding:28px 32px;">
            <p style="margin:0;font-family:Montserrat,Arial,sans-serif;font-size:20px;font-weight:700;color:#ffffff;">
              Thank You, ${name}
            </p>
            <p style="margin:6px 0 0;font-size:12px;color:#b0b8d8;letter-spacing:0.12em;text-transform:uppercase;">
              Office of Sona T. Sesay
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 16px;font-size:14px;color:#3c3c3c;line-height:1.8;">
              Thank you for reaching out to the Office of <strong>Sona T. Sesay</strong>, Deputy Minister of Education, Republic of Liberia.
            </p>
            <p style="margin:0 0 16px;font-size:14px;color:#3c3c3c;line-height:1.8;">
              Your enquiry has been received and will be reviewed carefully. A member of the office team will respond within <strong>2–3 business days</strong>.
            </p>
            <p style="margin:0;font-size:14px;color:#6b7280;line-height:1.8;">
              Please retain this email as confirmation that your message has been delivered.
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:#f1f1f0;padding:16px 32px;border-top:1px solid #e5e5e5;">
            <p style="margin:0;font-size:11px;color:#9ca3af;">
              Ministry of Education · Republic of Liberia ·
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color:#1a1a3e;">sonasesay.com</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body: EnquiryPayload = await req.json();

    const { fullName, email, subject, enquiryType, message } = body;
    if (!fullName || !email || !subject || !enquiryType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;
    if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
      console.error('Nodemailer: EMAIL_USER, EMAIL_PASS, or EMAIL_TO is not set in .env');
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${fullName}" <${EMAIL_USER}>`,
      replyTo: email,
      to: EMAIL_TO,
      subject: `[Enquiry – ${enquiryType}] ${subject}`,
      html: buildHtml(body),
    });

    await transporter.sendMail({
      from: `"Office of Sona T. Sesay" <${EMAIL_USER}>`,
      to: email,
      subject: `We received your enquiry — ${subject}`,
      html: buildAutoReplyHtml(fullName),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
