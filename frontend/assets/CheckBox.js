import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../frontend/styles.js';
import { setUserEmail } from '../../frontend/Storage.js';
import * as Notifications from 'expo-notifications';

const CheckBox = ({ name, grams, frequency, dietaryRequirements, handleTakeMedication, medicationId, expectedCheck }) => {
  const [isChecked, setIsChecked] = useState(false); 
  const [numChecked, setNumChecked] = useState(0);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
    handleTakeMedication(medicationId);
    setNumChecked(prevNumChecked => prevNumChecked + 1);
  };

  const checkEquality = () => {
    if (numChecked !== expectedCheck) {
      scheduleNotification();
    }
  };

  useEffect(() => {
    // Check equality on component mount and setup interval for continuous monitoring
    console.log('Checking equality...');
    console.log('Expected:', expectedCheck);
    console.log('Actual:', numChecked);
    checkEquality();
    const intervalId = setInterval(checkEquality, 5000); // Check every 10 seconds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const scheduleNotification = async () => {
    const trigger = new Date();
    // Set your trigger time here according to your requirements
    trigger.setHours(15); // 9 AM
    trigger.setMinutes(40);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Reminder',
        body: 'Number of checked boxes does not match the expected count!',
      },
      trigger,
    });
  };

  useEffect(() => {
    // Reset checkbox state at a specific time (e.g., midnight)
    const resetAtMidnight = setTimeout(() => {
      setIsChecked(false);
      setNumChecked(0);
    }, calculateTimeUntilMidnight());

    // Clear timeout on component unmount
    return () => clearTimeout(resetAtMidnight);
  }, []);

  const calculateTimeUntilMidnight = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(15, 40, 0, 0); // Set to midnight
    return midnight - now; // Time until midnight in milliseconds
  };

  return (
    <View style={styles.medicationItem}>
      <TouchableOpacity onPress={!isChecked ? handleCheckBoxChange : null}>
        <View style={[styles.checkbox, { backgroundColor: isChecked ? '#24C697' : '#FFF' }]} />
        <Text style={{ marginTop: -25, marginLeft: 5 }}>{isChecked ? '✅' : '⬜'}</Text>
      </TouchableOpacity>
      <Text style={styles.medicationName}>
        {name} {grams} (1 pill: {dietaryRequirements})
      </Text>
    </View>
  );
};

export default CheckBox;
