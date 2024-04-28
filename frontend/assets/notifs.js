import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

export const Notifs = (title, body) => {
  useEffect(() => {
    // Schedule a notification for 21:15
    scheduleNotification();
  }, []);

  const scheduleNotification = async () => {
    const trigger = new Date();
    trigger.setHours(14); // 9 PM
    trigger.setMinutes(41);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
      },
      trigger,
    });
  };
};

  // Call sendNotification when you need to trigger the notification
  // Example: sendNotification('New Notification', 'This is a test notification');

