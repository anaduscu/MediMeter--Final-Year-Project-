import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../frontend/styles.js';
import { setUserEmail } from '../../frontend/Storage.js';
import {sendEmail} from '../../frontend/assets/email.js';
import { sendSMS } from '../../frontend/assets/SMS.js';
import {Notifs} from '../../frontend/assets/notifs.js'; 
import AsyncStorage from '@react-native-async-storage/async-storage';


const CheckBox = ({ name, grams, frequency, dietaryRequirements, handleTakeMedication, medicationId, medicationName, expectedCheck }) => {

    const [isChecked, setIsChecked] = useState(false); 
    const [numChecked, setNumChecked] = useState(0);
    const [timerId, setTimerId] = useState(null);
    
    const determineBody = (pill) => {
    if (pill === "Yes") {
        return 'It looks like you have missed a dose. Please double check the pillbox and take the missed dose. Remember to log it in the app!';
    } else {
        return 'It looks like you have missed a dose. Please take the missed dose. Remember to log it in the app!';
    }
    };

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
    handleTakeMedication(medicationId, medicationName );
    setNumChecked(prevNumChecked => prevNumChecked + 1);
  };

  const checkEquality = async () => {
    console.log('Checking equality...');
    console.log('Number of checked boxes:', numChecked);
    console.log('Expected count:', expectedCheck);
        // global variables set at registration
    const e = await AsyncStorage.getItem('caregiverEmail');
    const p = await AsyncStorage.getItem('caregiverPhone');
    const pill = await AsyncStorage.getItem('pillboxUsed');
    const userName = await AsyncStorage.getItem('userName');
    const bringsMedication = await AsyncStorage.getItem('bringsMedication');
    if (numChecked !== expectedCheck) {
        console.log('Testing');
        if (bringsMedication === "Someone else") {
            // sendEmail({ email: e, s:'MediMeter: ' + userName + ' Missed a Dose', b: 'It looks like ' + userName + ' has missed a dose of their medication today. \nPlease consider checking in on them.'});
            // sendSMS('It looks like ' + userName + ' has missed a dose of their medication today. \nPlease consider checking in on them.', p);
            Notifs('Missed Dose', determineBody(pill));

        }
    }
  };

  useEffect(() => {
    // Reset checkbox state at a specific time ( 9PM)
    const resetAtMidnight = setTimeout(() => {
      checkEquality();
      console.log('Resetting checkboxes...');
      setIsChecked(false);
      setNumChecked(0);
    }, calculateTimeUntilMidnight());

    // Clear timeout on component 
    return () => {
      if (timerId) clearInterval(timerId);
      clearTimeout(resetAtMidnight);
    };
  }, []);

  const calculateTimeUntilMidnight = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(14, 40, 30, 0); // Set to 9 PM
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
