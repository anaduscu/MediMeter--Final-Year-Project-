import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from '../../frontend/styles.js';

const Schedule = () => {
  const [medications, setMedications] = useState([]);

  const getMedications = async () => {
    try {
        // Fetch CSRF token
        const csrfResponse = await fetch('http://192.168.0.210:8000/MediMeter/csrf_token/');
        const csrfData = await csrfResponse.json();
        const csrfToken = csrfData.csrf_token;

        // Make the request with the CSRF token
        // Registration request
        const response = await fetch('http://192.168.0.210:8000/MediMeter/medication/get_medication/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({
            //HARD CODED CHANGE!!!! MAKE GLOBAL VARIABLE FOR CURRENT USER!!!!!
             email: "ana@gmail.com",
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get medications');
      } else {
        const data = await response.json();
        setMedications(data.medications);
      }
    }
    catch (error) {
      console.log('Error getting medications:', error);
    }
  }

  useEffect(() => {
    getMedications();
  }, []);

        
  return (
    
    <View style={styles.container}>
      <Text style={styles.heading}>Medications Schedule</Text>
      {medications.map((medication, index) => (
        <View key={index} style={styles.medicationItem}>
          <Text style={styles.medicationName}>{medication.name}</Text>
          <Text style={styles.dosageInstructions}>{medication.dosage_instructions}</Text>
          <Text style={styles.frequency}>{medication.frequency}</Text>
        </View>
      ))}
    </View>
  );
}

export default Schedule;
