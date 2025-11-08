const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { name, email, subject, message, projectType, budget, timeline } = data;

    // Validate required fields
    if (!name || !email || !message || !projectType) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          message: 'Missing required fields' 
        })
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          message: 'Invalid email address' 
        })
      };
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'chatgptt.work@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.verify();

    const mailOptions = {
      from: 'chatgptt.work@gmail.com',
      to: 'ranveerwork007@gmail.com',
      subject: `New Contact Form Submission: ${subject || projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || projectType}</p>
          </div>
          ${
            projectType
              ? `
          <div style="background: #e9ecef; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #28a745; margin-top: 0;">Project Details</h3>
            <p><strong>Project Type:</strong> ${projectType}</p>
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ""}
            ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}
          </div>
          `
              : ""
          }
          <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #856404; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
            <p style="color: #6c757d; font-size: 14px;">
              This email was sent from your portfolio website contact form.
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully!',
        messageId: info.messageId
      }),
    };
  } catch (error) {
    let errorMessage = 'Failed to send message. Please try again or contact directly via email.';
    let statusCode = 500;
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid login') || error.message.includes('authentication')) {
        errorMessage = 'Email configuration error. Please contact directly via email.';
        statusCode = 503;
      } else if (error.message.includes('ECONNREFUSED') || error.message.includes('ETIMEDOUT')) {
        errorMessage = 'Email server connection failed. Please contact directly via email.';
        statusCode = 503;
      }
    }
    
    return {
      statusCode,
      headers,
      body: JSON.stringify({ 
        success: false, 
        message: errorMessage
      }),
    };
  }
};
