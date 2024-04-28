// Import necessary modules
import React from 'react';
import { View, Button, Alert } from 'react-native';

// Function to send email
export const sendEmail = async ({email, s, b}) => {
  const apiKey = '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';
  const senderEmail = 'aduscu301017@gmail.com';
  const recipientEmail = email;
  const subject = s;
  const body = b;

  // try {
  //   const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': `Bearer ${apiKey}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       personalizations: [{ to: [{ email: recipientEmail }] }],
  //       from: { email: senderEmail },
  //       subject: subject,
  //       content: [{ type: 'text/plain', value: body }],
  //     }),
  //   });

  //   if (response.ok) {
  //     console.log('Email sent successfully!');
  //     Alert.alert('Email Sent', 'Test email sent successfully!');
  //   } else {
  //     console.error('Failed to send email:', response.statusText);
  //     Alert.alert('Error', 'Failed to send email. Please try again.');
  //   }
  // } catch (error) {
  //   console.error('Error sending email:', error.message);
  //   Alert.alert('Error', 'Failed to send email. Please check your network connection.');
  // }
  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: recipientEmail }] }],
        from: { email: senderEmail },
        subject: subject,
        content: [{ type: 'text/plain', value: body }],
      }),
    });
  
    console.log('Response:', response); // Log the response object
  
    if (response.ok) {
      console.log('Email sent successfully!');
      console.log('Email Sent', 'Test email sent successfully!');
    } else {
      console.error('Failed to send email:', response.statusText);
      console.log('Error', 'Failed to send email. Please try again.');
    }
  } catch (error) {
    console.error('Error sending email:', error.message);
    console.log('Error', 'Failed to send email. Please check your network connection.');
  }
  
} 



// export default EmailScreen;
