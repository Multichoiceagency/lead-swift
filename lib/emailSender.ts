// lib/emailSender.ts
export async function sendEmail(to: string, subject: string, content: any) {
    // Implement your email sending logic here
    // You might want to use a service like SendGrid or Nodemailer
    console.log(`Sending email to ${to} with subject "${subject}"`);
    console.log('Content:', content);
    // In a real implementation, you would use an email service here
  }
  