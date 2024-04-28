import React from 'react';
import * as Notifications from 'expo-notifications';
import logo from '../../frontend/assets/logo.png';

const Notifs = ({ title, body }) => {
  const sendNotification = async () => {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: title ,
          body: body ,
        },
        trigger: null,
        ios: {
          sound: 'default',
          badge: true,
          displayInForeground: true,
          sticky: false,
          channelId: 'default',
          icon: logo,
        },
      });
      console.log('Notification sent successfully');
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  sendNotification();

  return null; // Since this component doesn't render anything
};

export default Notifs;
