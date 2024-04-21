import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View , Image, TouchableOpacity} from 'react-native';
import CheckBox from '../../frontend/assets/CheckBox.js';
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
    const intervalId = setInterval(getMedications,100000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
    }, []);

    const morning = [];
    const afternoon = [];
    const evening = [];

    medications.forEach(medication => {
    if (medication.frequency === '1') {
        morning.push(medication);
    } else if (medication.frequency === '2') {
        morning.push(medication);
        afternoon.push(medication);
    } else if (medication.frequency === '3') {
        morning.push(medication);
        afternoon.push(medication);
        evening.push(medication);
    }
    });
    

    if (medications.length === 0) {
        return (
          <View style={styles.items}>
            <Text style={styles.emptyInventory}>{"Your schedule is empty because there are no medications in your inventory. You can add some by selecting the middle option below, which will take you to your list of medications:"}</Text>
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
                                <CheckBox name={medication.name} grams={medication.grams} frequency={medication.frequency} dietaryRequirements={medication.dietary_requirements} />
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
                                <CheckBox name={medication.name} grams={medication.grams} frequency={medication.frequency} dietaryRequirements={medication.dietary_requirements} />
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
                                <CheckBox name={medication.name} grams={medication.grams} frequency={medication.frequency} dietaryRequirements={medication.dietary_requirements} />
                            </View>
                        ))}
                    </View>
                </ScrollView>
            );
        }
}

export default Schedule;
