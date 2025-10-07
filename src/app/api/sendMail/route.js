import nodemailer from 'nodemailer';

export async function POST(req) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.COMPANY_EMAIL, // e.g. info@vihisolutions.com
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Vihi IT Solutions Website" <${process.env.COMPANY_EMAIL}>`,
    to: process.env.COMPANY_EMAIL,
    subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
    text: `
      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Project Type: ${data.projectType}
      Company Website: ${data.companyWebsite}
      Contact Number: ${data.contactNumber}

      Message:
      ${data.message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
}
