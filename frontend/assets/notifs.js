import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

const Notifs = ({ title, body }) => {
  useEffect(() => {
    // Schedule a notification
    scheduleNotification(title, body);
    
  }, [title, body]);

  const scheduleNotification = async (title, body) => {
    const trigger = new Date();
    trigger.setHours(22); // 9 PM
    trigger.setMinutes(22);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
      },
      trigger, // We don't need a trigger for this test
    });
  };

};

export default Notifs;
