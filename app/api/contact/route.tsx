// import { type NextRequest, NextResponse } from "next/server"
// import nodemailer from "nodemailer"

// export async function POST(request: NextRequest) {
//   try {
//     const { name, email, subject, message, projectType, budget, timeline } = await request.json()

//     console.log("[v0] Contact form submission received:", { name, email, subject })

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "chatgptt.work@gmail.com",
//         // pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     })

//     await transporter.verify()
//     console.log("[v0] SMTP connection verified successfully")

//     const mailOptions = {
//       from: "chatgptt.work@gmail.com",
//       to: "ranveerwork007@gmail.com",
//       subject: `New Contact Form Submission: ${projectType}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
//             New Contact Form Submission
//           </h2>
          
//           <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
//             <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Subject:</strong> ${projectType}</p>
//           </div>

//           ${
//             projectType
//               ? `
//           <div style="background: #e9ecef; padding: 20px; border-radius: 8px; margin: 20px 0;">
//             <h3 style="color: #28a745; margin-top: 0;">Project Details</h3>
//             <p><strong>Project Type:</strong> ${projectType}</p>
//             ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ""}
//             ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}
//           </div>
//           `
//               : ""
//           }

//           <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
//             <h3 style="color: #856404; margin-top: 0;">Message</h3>
//             <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
//           </div>

//           <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
//             <p style="color: #6c757d; font-size: 14px;">
//               This email was sent from your portfolio website contact form.
//             </p>
//           </div>
//         </div>
//       `,
//       replyTo: email,
//     }

//     const info = await transporter.sendMail(mailOptions)
//     console.log("[v0] Email sent successfully:", info.messageId)

//     return NextResponse.json({
//       success: true,
//       message: "Message sent successfully!",
//     })
//   } catch (error) {
//     console.error("[v0] Contact form error:", error)

//     let errorMessage = "Failed to send message. Please try again or contact directly via email."

//     if (error instanceof Error) {
//       if (error.message.includes("Invalid login")) {
//         errorMessage = "Email configuration error. Please contact directly via email."
//         console.error("[v0] Gmail authentication failed - check GMAIL_APP_PASSWORD")
//       } else if (error.message.includes("ECONNREFUSED")) {
//         errorMessage = "Email server connection failed. Please contact directly via email."
//       }
//     }

//     return NextResponse.json(
//       {
//         success: false,
//         message: errorMessage,
//       },
//       { status: 500 },
//     )
//   }
// }
