import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../../frontend/styles.js';

const CheckBox = ({ name, grams, frequency, dietaryRequirements }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked);
        // Send data related to the name of the medicine to the database
        sendDataToDatabase(name);
    };

    const sendDataToDatabase = (medicineName) => {
        // Implement your logic to send data to the database here
        console.log(`Sending data related to ${medicineName} to the database...`);
    };

    return (
        <View style={styles.medicationItem}>
            <TouchableOpacity onPress={handleCheckBoxChange}>
                <View style={[styles.checkbox, { backgroundColor: isChecked ? 'green' : '#FFF' }]} />
            </TouchableOpacity>
            <Text style={styles.medicationName}>
                {name} {grams} grams ({frequency} times a day) {dietaryRequirements}
            </Text>
        </View>
    );
};

export default CheckBox;
