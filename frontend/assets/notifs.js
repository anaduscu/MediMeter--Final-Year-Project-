import * as Notifications from 'expo-notifications';

export const Notifs = ({ title, body }) => {
  const scheduleNotification = async (title, body) => {
    try {
      console.log('Scheduling notification...');
      
      await Notifications.scheduleNotificationAsync({
        content: {
          title: title,
          body: body,
        },
        trigger: null,
      });
      
      console.log('Notification scheduled successfully');
    } catch (error) {
      console.error('Error scheduling notification:', error);
    }
  };

  // Call scheduleNotification when the component renders
  scheduleNotification(title, body);

  return null; // Since this component doesn't render anything
};
