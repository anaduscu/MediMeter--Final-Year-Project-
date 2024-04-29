import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View , Image, TouchableOpacity, Alert} from 'react-native';
import CheckBox from '../../frontend/assets/CheckBox.js';
import styles from '../../frontend/styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notifs from '../../frontend/assets/notifs.js';
import Storage from '../../frontend/Storage.js';
import {sendEmail} from '../../frontend/assets/email.js';
import { sendSMS } from '../../frontend/assets/SMS.js';
import { useNavigation } from '@react-navigation/native';


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
        medications.forEach(medication => { // Check if the refill date is set to the default value and calculate the refill date if so
            if (medication.refill_date === '2025-01-01' || medication === null) {
                handleRefillDate(medication.id);
            }
        });
      }
      
    }
    catch (error) {
      console.log('Error getting medications:', error);
    }
  }


  const handleTakeMedication = async (medicationId, medicationName) => {
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
          const lowstock = await handleLowStock(medicationId);
          if (lowstock) { // If the stock is low, send notifications
            Notifs({title: 'Low Stock', body: 'You are running low on ' + medicationName + '. Please refill your stock.'});
            const bringsMedication = await AsyncStorage.getItem('bringsMedication');
            const userName = await AsyncStorage.getItem('userName');
            const e = await AsyncStorage.getItem('caregiverEmail');
            const p = await AsyncStorage.getItem('caregiverPhone');
            console.log(p);
            console.log(e);
            if (bringsMedication === "Someone else") {
                // Commented out to avoid using free trial credits on Twilio and SendGrid
                // sendEmail({ email: e, s:'MediMeter: Low Medication Stock', b: userName + " is running low on " + medicationName + ". \nYou may want to refill their stock."});
                // sendSMS (userName + " is running low on " + medicationName + ". \nYou may want to refill their stock.", p);
            }
        }

        }
      } catch (error) {
        console.log('Error decreasing stock:', error);
      }

    }

    const handleLowStock = async (medicationId) => {
        const userEmailString = await AsyncStorage.getItem('userEmail');
        try {
        // Fetch CSRF token
        const csrfResponse = await fetch('http://192.168.0.210:8000/MediMeter/csrf_token/');
        const csrfData = await csrfResponse.json();
        const csrfToken = csrfData.csrf_token;

        // Make the request with the CSRF token
        const response = await fetch(`http://192.168.0.210:8000/MediMeter/medication/get_stock/${medicationId}/`, {
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
          throw new Error('Failed to get stock');
        } else {
          const data = await response.json();
          if (data.current_stock <= 3) {
            return true;
          } else {
            return false;
          }
        }
      } catch (error) {
        console.log('Error getting stock:', error);
      }
    }

    const handleRefillDate = async (medicationId) => {    
        try {  
            // Fetch CSRF token
            const csrfResponse = await fetch('http://192.168.0.210:8000/MediMeter/csrf_token/');
            const csrfData = await csrfResponse.json();
            const csrfToken = csrfData.csrf_token;
        
            const response = await fetch(`http://192.168.0.210:8000/MediMeter/medication/set_refill_date/${medicationId}/`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
              },
            });
    
            if (!response.ok) {
              throw new Error('Failed to set refill date');
            } else {
              console.log('Refill date set', 'Refill date set successfully.');
            }
          } catch (error) {
            console.error('Error setting refill date:', error);
          }
    };
  

        

  useEffect(() => {
    getMedications();
    // Poll for new medications every 10 seconds
    const intervalId = setInterval(getMedications,10000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
    }, []);

    const morning = [];
    const afternoon = [];
    const evening = [];

    // Split medications into morning, afternoon, and evening
    medications.forEach(medication => {
    if (medication.frequency === 'Once a day') {
        morning.push(medication);
    } else if (medication.frequency === 'Twice a day') {
        morning.push(medication);
        afternoon.push(medication);
    } else if (medication.frequency === 'Three times a day') {
        morning.push(medication);
        afternoon.push(medication);
        evening.push(medication);
    }
    if (medication.refill_date === '2025-01-01' || medication === null) {
        handleRefillDate(medication.id);
        }    
    });

    const expectedCheck = morning.length + afternoon.length + evening.length;
    
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
                        {morning.map((medication, index) => ( // Map through the morning medications and render a CheckBox component for each
                            <View key={index}>
                                <CheckBox 
                                    name={medication.name} 
                                    grams={medication.dosage_instructions} 
                                    frequency={medication.frequency} 
                                    dietaryRequirements={medication.dietary_restrictions} 
                                    handleTakeMedication={handleTakeMedication} 
                                    medicationId={medication.id} 
                                    medicationName={medication.name}
                                    expectedCheck={morning.length}
                                />
                            </View>
                        ))}
                    </View>
                    <View style={styles.items}>
                        <View style={styles.todimg}>
                            <Text style={styles.timeofday}>Afternoon</Text>
                            <Image source={require('../../frontend/assets/suncloud.png')} style={styles.suncloud}/>
                        </View>
                        {afternoon.map((medication, index) => ( // Map through the afternoon medications and render a CheckBox component for each
                            <View key={index}>
                                <CheckBox 
                                    name={medication.name} 
                                    grams={medication.dosage_instructions} 
                                    frequency={medication.frequency} 
                                    dietaryRequirements={medication.dietary_restrictions} 
                                    handleTakeMedication={handleTakeMedication}
                                    medicationId={medication.id}  
                                    medicationName={medication.name}
                                    expectedCheck={afternoon.length}
                                />
                            </View>
                        ))}
                    </View>
                    <View style={styles.items}>
                        <View style={styles.todimg}>
                            <Text style={styles.timeofday}>Evening</Text>
                            <Image source={require('../../frontend/assets/moon.png')} style={styles.moon}/>
                        </View>
                        {evening.map((medication, index) => ( // Map through the evening medications and render a CheckBox component for each
                            <View key={index}>
                                <CheckBox 
                                    name={medication.name} 
                                    grams={medication.dosage_instructions} 
                                    frequency={medication.frequency} 
                                    dietaryRequirements={medication.dietary_restrictions} 
                                    handleTakeMedication={handleTakeMedication} 
                                    medicationId={medication.id}  
                                    medicationName={medication.name}
                                    expectedCheck={evening.length}
                                />
                            </View>
                        ))}
                    </View>
                </ScrollView>
            );
        }
}

export default Schedule;
