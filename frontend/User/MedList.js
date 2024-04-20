import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../frontend/assets/logo.png';
import styles from '../../frontend/styles.js';

const MedList = () => {

    const navigation = useNavigation();
  const [medications, setMedications] = useState([]);

  const getMedications = async () => {
    try {
      // Fetch CSRF token
      const csrfResponse = await fetch('http://192.168.0.210:8000/MediMeter/csrf_token/');
      const csrfData = await csrfResponse.json();
      const csrfToken = csrfData.csrf_token;

      // Make the request with the CSRF token
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
    // Poll for new medications every 20 seconds
    const intervalId = setInterval(getMedications, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
    }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.heading}>{"Your Medications"}</Text>
      <View style={styles.table}>
        {medications.map((medication, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.tableCell}>{medication.name}</Text>
            <Text style={styles.tableCell}>{medication.grams}</Text>
            <Text style={styles.tableCell}>{medication.frequency}</Text>
            <Text style={styles.tableCell}>{medication.dietaryRequirements}</Text>
          </View>
        ))}
      </View>
      
      <View>
        <Text>{"Click the + sign to add more medications to your list"}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddMedication')}> 
          <Text>{"+"}</Text>
        </TouchableOpacity>
        </View>

    </View>
  );
};


export default MedList;
