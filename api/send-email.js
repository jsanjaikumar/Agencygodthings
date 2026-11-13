import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers if needed
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const {
      objective,
      demographic,
      competitors,
      timeline,
      platforms,
      techStack,
      budget,
      contactEmail
    } = req.body || {};

    if (!contactEmail) {
      return res.status(400).json({
        success: false,
        message: 'Client contact email is required.'
      });
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO || emailUser;

    if (!emailUser || !emailPass) {
      console.error('Server configuration error: EMAIL_USER and EMAIL_PASS environment variables are required.');
      return res.status(500).json({
        success: false,
        message: 'Email service credentials not configured. Please set EMAIL_USER and EMAIL_PASS in your Vercel / environment settings.'
      });
    }

    // Configure Nodemailer transporter (supports Gmail or custom SMTP)
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    const formattedTime = new Date().toUTCString();

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0d0e; color: #f4f4f5; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #18181b; border: 1px solid #27272a; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
          .header { background: #09090b; padding: 24px 32px; border-bottom: 2px solid #eab308; }
          .header h1 { margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 2px; color: #ffffff; }
          .header p { margin: 4px 0 0 0; font-size: 12px; color: #eab308; font-family: monospace; }
          .content { padding: 32px; }
          .section-title { font-size: 13px; font-weight: bold; text-transform: uppercase; color: #eab308; letter-spacing: 1.5px; margin-top: 24px; margin-bottom: 12px; border-bottom: 1px solid #27272a; padding-bottom: 6px; }
          .section-title:first-of-type { margin-top: 0; }
          .field { margin-bottom: 14px; }
          .label { font-size: 11px; text-transform: uppercase; color: #a1a1aa; font-family: monospace; margin-bottom: 4px; }
          .value { font-size: 14px; color: #ffffff; background: #27272a40; padding: 8px 12px; border-radius: 4px; border: 1px solid #27272a; line-height: 1.5; }
          .highlight { color: #facc15; font-weight: bold; }
          .footer { background: #09090b; padding: 18px 32px; border-top: 1px solid #27272a; font-size: 11px; color: #71717a; text-align: center; }
          a { color: #facc15; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Project Dossier</h1>
            <p>SYSTEM INITIATION PROTOCOL // INCOMING TRANSMISSION</p>
          </div>
          <div class="content">
            <div class="section-title">01. Strategic Intent</div>
            <div class="field">
              <div class="label">Primary Objective</div>
              <div class="value">${objective || 'Not specified'}</div>
            </div>
            <div class="field">
              <div class="label">Target Demographic</div>
              <div class="value">${demographic || 'Not specified'}</div>
            </div>
            <div class="field">
              <div class="label">Competitive Landscape / Constraints</div>
              <div class="value" style="white-space: pre-wrap;">${competitors || 'None provided'}</div>
            </div>

            <div class="section-title">02. Project Parameters</div>
            <div class="field">
              <div class="label">Timeline Expectation</div>
              <div class="value">${timeline || 'Not specified'}</div>
            </div>
            <div class="field">
              <div class="label">Target Platforms</div>
              <div class="value">${platforms || 'Not specified'}</div>
            </div>
            <div class="field">
              <div class="label">Technology Stack Preference</div>
              <div class="value">${techStack || 'Not specified'}</div>
            </div>

            <div class="section-title">03. Budget & Client Uplink</div>
            <div class="field">
              <div class="label">Capital Allocation Range</div>
              <div class="value highlight">${budget || 'Not specified'}</div>
            </div>
            <div class="field">
              <div class="label">Official Work Email</div>
              <div class="value"><a href="mailto:${contactEmail}">${contactEmail}</a></div>
            </div>
          </div>
          <div class="footer">
            Received at: ${formattedTime} &bull; Transmitted via Aether Digital Agency Platform
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"Aether Digital Uplink" <${emailUser}>`,
      to: emailTo,
      replyTo: contactEmail,
      subject: `🚨 New Project Dossier: ${contactEmail} [${budget || 'Initiation'}]`,
      html: htmlContent,
      text: `
NEW PROJECT DOSSIER RECEIVED
===========================
Client Email: ${contactEmail}
Budget Range: ${budget}

01. STRATEGIC INTENT
- Primary Objective: ${objective}
- Target Demographic: ${demographic}
- Competitors/Constraints: ${competitors}

02. PROJECT PARAMETERS
- Timeline: ${timeline}
- Target Platforms: ${platforms}
- Tech Stack: ${techStack}

Timestamp: ${formattedTime}
      `
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Project dossier transmitted and email delivered successfully.'
    });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to dispatch email.'
    });
  }
}
