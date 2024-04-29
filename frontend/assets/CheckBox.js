import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../frontend/styles.js';
import { setUserEmail } from '../../frontend/Storage.js';
import * as Notifications from 'expo-notifications';
import {sendEmail} from '../../frontend/assets/email.js';
import { sendSMS } from '../../frontend/assets/SMS.js';
import Notifs from '../../frontend/assets/notifs.js';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CheckBox = ({ name, grams, frequency, dietaryRequirements, handleTakeMedication, medicationId, medicationName, expectedCheck }) => {

    const [isChecked, setIsChecked] = useState(false); 
    const [numChecked, setNumChecked] = useState(0);
    const [timerId, setTimerId] = useState(null);
    
    // Determine the body of the notification based on the pillbox used
    const determineBody = (pill) => {
        if (pill === "Yes") {
            return 'It looks like you have missed a dose. Please double check your pillbox and take it. Remember to log it in the app!';
        } else {
            return 'It looks like you have missed a dose. Please take it and remember to log it in the app!';
        }
    };

  // Handle checkbox change event
  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
    handleTakeMedication(medicationId, medicationName );
    setNumChecked(prevNumChecked => prevNumChecked + 1);
  };

  const checkEquality = async () => {
    const e = await AsyncStorage.getItem('caregiverEmail');
    const p = await AsyncStorage.getItem('caregiverPhone');
    const pill = await AsyncStorage.getItem('pillboxUsed');
    const userName = await AsyncStorage.getItem('userName');
    const bringsMedication = await AsyncStorage.getItem('bringsMedication');
    if (numChecked !== expectedCheck) {
        if (bringsMedication === "Someone else") {
            // Comented out to avoid using free trial credits on Twilio and SendGrid
            // sendEmail({ email: e, s:'MediMeter: ' + userName + ' Missed a Dose', b: 'It looks like ' + userName + ' has missed a dose of their medication today. \nPlease consider checking in on them.'});
            // sendSMS('It looks like ' + userName + ' has missed a dose of their medication today. \nPlease consider checking in on them.', p);
            Notifs({title:'Missed Dose', body:determineBody(pill)});
        }
    }
  };

  useEffect(() => {
    // Reset checkbox state at a specific time (9PM)
    const reset = setTimeout(() => {
      checkEquality(); // Check if the number of pills taken is equal to the expected number before resetting
      console.log('Resetting checkboxes...');
      setIsChecked(false);
      setNumChecked(0);
    }, calculateTimeUntil());

    // Clear timeout on component 
    return () => {
      if (timerId) clearInterval(timerId);
      clearTimeout(reset);
    };
  }, []);

  const calculateTimeUntil= () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(21, 0, 0, 0); // Set to 9 PM
    return midnight - now; // Time until 9PM in milliseconds
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
