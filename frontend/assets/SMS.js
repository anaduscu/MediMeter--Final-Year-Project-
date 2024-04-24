import { View, Button, Alert } from 'react-native';
import { encode as base64Encode } from 'base-64';

export const sendSMS = async (body, to) => {
    const accountSid = 'AC7f72d26a0c2769c63369cf4623995e64';
    const authToken = '5b3760ad7252ccf25c3856426d5d923f';

    const bodyParams = new URLSearchParams({
        Body: body,
        From: '+447888864484',
        To: to,
      });    
      
      try {
      const response = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${base64Encode(`${accountSid}:${authToken}`)}`,
          },
          body: bodyParams.toString(),

        }
      );
  
      const responseData = await response.json();
      console.log('Twilio API Response:', responseData);
  
      if (response.ok) {
        Alert.alert('SMS Sent', 'Test SMS message sent successfully!');
      } else {
        Alert.alert('Error', 'Failed to send SMS message.');
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
      Alert.alert('Error', 'Failed to send SMS message.');
    }
  };
  
//   const handlePress = async () => {
//     await sendSMS();
//   };



