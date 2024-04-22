import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../../frontend/styles.js';
import { setUserEmail } from '../../frontend/Storage.js';

const CheckBox = ({ name, grams, frequency, dietaryRequirements, handleTakeMedication , medicationId}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
    handleTakeMedication(medicationId);
    sendDataToDatabase(name);
  };

  const sendDataToDatabase = (medicineName) => {
    // Implement your logic to send data to the database here
    console.log(`Sending data related to ${medicineName} to the database...`);
  };

  return (
    <View style={styles.medicationItem}>
      <TouchableOpacity onPress={handleCheckBoxChange}>
        <View style={[styles.checkbox, { backgroundColor: isChecked ? 'blue' : '#FFF' }]} />
      </TouchableOpacity>
      <Text style={styles.medicationName}>
        {name}{grams} (1 pill: {dietaryRequirements})
      </Text>
    </View>
  );
};

export default CheckBox;
