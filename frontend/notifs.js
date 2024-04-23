import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Notifications from 'expo-notifications';

const Notifs = () => {
  useEffect(() => {
    // Schedule a notification for 21:15
    scheduleNotification();
  }, []);

  const scheduleNotification = async () => {
    const trigger = new Date();
    trigger.setHours(13); // 9 PM
    trigger.setMinutes(47);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Test Notification',
        body: "This is a test notification!",
      },
      trigger,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Testing notifications...</Text>
    </View>
  );
};

export default Notifs;
