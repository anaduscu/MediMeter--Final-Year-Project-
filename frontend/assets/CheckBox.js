import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../../frontend/styles.js';
import { setUserEmail } from '../../frontend/Storage.js';

const CheckBox = ({ name, grams, frequency, dietaryRequirements, handleTakeMedication, medicationId, checkboxes, checkboxStates }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
    handleTakeMedication(medicationId);
  };

  useEffect(() => {
    // Calculate milliseconds until midnight
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(0, 0, 0, 0);
    const timeUntilMidnight = midnight - now;

    // Set a timeout to reset checkbox state at midnight
    const resetAtMidnight = setTimeout(() => {
      setIsChecked(false);
    }, timeUntilMidnight);

    // Clear timeout on component unmount
    return () => clearTimeout(resetAtMidnight);
  }, []);

  return (
    <View style={styles.medicationItem}>
      <TouchableOpacity onPress={isChecked ? null : handleCheckBoxChange}>
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
