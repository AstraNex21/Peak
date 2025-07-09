// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key, Service ID, and Template ID
// 6. Replace the values below

export const EMAIL_CONFIG = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
};

// Example template variables for EmailJS:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{phone}} - Sender's phone
// {{service}} - Selected service
// {{message}} - Message content
// {{to_name}} - Recipient name (Peak Elevator Group)

// Sample EmailJS template:
/*
Subject: New Contact Form Submission - {{service}}

Hello {{to_name}},

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interest: {{service}}

Message:
{{message}}

Please respond to this inquiry promptly.

Best regards,
Peak Elevator Group Website
*/