import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Notifications from 'expo-notifications';
import logo from '../../frontend/assets/logo.png';

const Notifs = (title, body) => {
  useEffect(() => {
    // Schedule a notification for 21:15
    scheduleNotification();
  }, []);

  const scheduleNotification = async () => {
    // const trigger = new Date();
    // trigger.setHours(19); // 9 PM
    // trigger.setMinutes(24);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Low Stock',
        body: 'You are running low on Paracetamol. Consider getting more withing the next few days.',
      },
      trigger: null,
      ios: {
        // Customise iOS notification settings
        sound: 'default', // You can change this to a custom sound if needed
        badge: true, // Show app badge
        displayInForeground: true, // Show notification even when app is in foreground
        sticky: false, // Make the notification sticky or non-sticky
        channelId: 'default', // Set the notification channel ID
        icon: logo, // Set the notification icon
      },
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Testing notifications...</Text>
    </View>
  );
};

export default Notifs;


