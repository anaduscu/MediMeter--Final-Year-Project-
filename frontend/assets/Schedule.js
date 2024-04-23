import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View , Image, TouchableOpacity} from 'react-native';
import CheckBox from '../../frontend/assets/CheckBox.js';
import styles from '../../frontend/styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Schedule = () => {
  const [medications, setMedications] = useState([]);

  const getMedications = async () => {
    const userEmailString = await AsyncStorage.getItem('userEmail');
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
          email: userEmailString,
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

  const handleTakeMedication = async (medicationId) => {
    try {
        const csrfResponse = await fetch('http://192.168.0.210:8000/MediMeter/csrf_token/');
        const csrfData = await csrfResponse.json();
        const csrfToken = csrfData.csrf_token;
    
        const response = await fetch(`http://192.168.0.210:8000/MediMeter/medication/decrease_stock/${medicationId}/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
          },
        });
    
        if (!response.ok) {
          throw new Error('Failed to decrease stock');
        } else {
          // Handle successful deletion, e.g., update medication list
          getMedications();
        }
      } catch (error) {
        console.log('Error decreasing stock:', error);
      }
    }

  useEffect(() => {
    getMedications();
    // Poll for new medications every 20 seconds
    const intervalId = setInterval(getMedications,10000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
    }, []);

    const morning = [];
    const afternoon = [];
    const evening = [];
    const checkboxes = [];

    medications.forEach(medication => {
    if (medication.frequency === 'Once a day') {
        morning.push(medication);
        checkboxes.push(medication);
    } else if (medication.frequency === 'Twice a day') {
        morning.push(medication);
        checkboxes.push(medication);
        afternoon.push(medication);
        checkboxes.push(medication);
    } else if (medication.frequency === 'Three times a day') {
        morning.push(medication);
        checkboxes.push(medication);
        afternoon.push(medication);
        checkboxes.push(medication);
        evening.push(medication);
        checkboxes.push(medication);
    }
    });

    const numCheckBoxes = morning.length + afternoon.length + evening.length;

    const checkboxStates = Array(numCheckBoxes).fill(false);
    
    console.log('Number of checkboxes:', numCheckBoxes);
    console.log('Checkboxes:', checkboxes);
    console.log('Checkbox states:', checkboxStates);
    // console.log('Morning:', morning);

    if (medications.length === 0) {
        return (
          <View style={styles.items}>
            <Text style={[styles.emptyInventory, {height:250}]}>{"Your schedule is empty because there are no medications in your inventory. You can add some by selecting the middle option below, which will take you to your list of medications:"}</Text>
          </View>
          
        );
    } else {
            return (
                <ScrollView>
                    <View style={styles.items}>
                        <View style={styles.todimg}>
                            <Text style={styles.timeofday}>Morning</Text>
                            <Image source={require('../../frontend/assets/sun.png')} style={styles.sun}/>
                        </View>
                        {morning.map((medication, index) => (
                            <View key={index}>
                                <CheckBox 
                                    name={medication.name} 
                                    grams={medication.dosage_instructions} 
                                    frequency={medication.frequency} 
                                    dietaryRequirements={medication.dietary_restrictions} 
                                    handleTakeMedication={handleTakeMedication} // Pass the function reference
                                    medicationId={medication.id}  // Pass the medication ID
                                    current={index}
                                    checkboxStates={checkboxStates}
                                />
                            </View>
                        ))}
                    </View>
                    <View style={styles.items}>
                        <View style={styles.todimg}>
                            <Text style={styles.timeofday}>Afternoon</Text>
                            <Image source={require('../../frontend/assets/suncloud.png')} style={styles.suncloud}/>
                        </View>
                        {afternoon.map((medication, index) => (
                            <View key={index}>
                                <CheckBox 
                                    name={medication.name} 
                                    grams={medication.dosage_instructions} 
                                    frequency={medication.frequency} 
                                    dietaryRequirements={medication.dietary_restrictions} 
                                    handleTakeMedication={handleTakeMedication} // Pass the function reference
                                    medicationId={medication.id}  // Pass the medication ID
                                />
                            </View>
                        ))}
                    </View>
                    <View style={styles.items}>
                        <View style={styles.todimg}>
                            <Text style={styles.timeofday}>Evening</Text>
                            <Image source={require('../../frontend/assets/moon.png')} style={styles.moon}/>
                        </View>
                        {evening.map((medication, index) => (
                            <View key={index}>
                                <CheckBox 
                                    name={medication.name} 
                                    grams={medication.dosage_instructions} 
                                    frequency={medication.frequency} 
                                    dietaryRequirements={medication.dietary_restrictions} 
                                    handleTakeMedication={handleTakeMedication} // Pass the function reference
                                    medicationId={medication.id}  // Pass the medication ID
                                />
                            </View>
                        ))}
                    </View>
                </ScrollView>
            );
        }
}

export default Schedule;
