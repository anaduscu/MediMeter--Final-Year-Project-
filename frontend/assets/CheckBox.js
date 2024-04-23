import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../frontend/styles.js';
import { setUserEmail } from '../../frontend/Storage.js';
import * as Notifications from 'expo-notifications';
import {sendEmail} from '../../frontend/assets/email.js';
import Notifs from '../../frontend/assets/notifs.js'; // Correct way to import a default export

const CheckBox = ({ name, grams, frequency, dietaryRequirements, handleTakeMedication, medicationId, expectedCheck }) => {
  const [isChecked, setIsChecked] = useState(false); 
  const [numChecked, setNumChecked] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
    handleTakeMedication(medicationId);
    setNumChecked(prevNumChecked => prevNumChecked + 1);
  };

  const checkEquality = () => {
    console.log('Checking equality...');
    console.log('Number of checked boxes:', numChecked);
    console.log('Expected count:', expectedCheck);
    if (numChecked !== expectedCheck) {
        console.log('N?o');
        return <Notifs title={"HELLO"} body={"idk"}></Notifs>
        // sendEmail({ email: 'ana.duscu17@gmail.com', s: 'Number of checked boxes does not match the expected count!', b: 'Please check the number of checked boxes in the app.' });
    }
  };

  useEffect(() => {
    // Reset checkbox state at a specific time (e.g., midnight)
    const resetAtMidnight = setTimeout(() => {
      checkEquality();
      console.log('Resetting checkboxes...');
      setIsChecked(false);
      setNumChecked(0);
    }, calculateTimeUntilMidnight());

    // Clear timeout on component unmount
    return () => {
      if (timerId) clearInterval(timerId);
      clearTimeout(resetAtMidnight);
    };
  }, []);

  const calculateTimeUntilMidnight = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(22, 28, 0, 0); // Set to midnight
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
