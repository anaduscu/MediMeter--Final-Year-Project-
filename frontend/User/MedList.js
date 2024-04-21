import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import logo from '../../frontend/assets/logo.png';
import styles from '../../frontend/styles.js';
import deletemed from '../../frontend/assets/deletemed.png';
import addmed from '../../frontend/assets/addmed.png';
import { ScrollView } from 'react-native-gesture-handler';

const MedList = () => {

  const navigation = useNavigation();
  const [medications, setMedications] = useState([]);
  const medIds = medications.map(med => med.id);

  // Function to handle delete request
const handleDelete = async (medicationId) => {    
    try {
      const csrfResponse = await fetch('http://192.168.0.210:8000/MediMeter/csrf_token/');
      const csrfData = await csrfResponse.json();
      const csrfToken = csrfData.csrf_token;
  
      const response = await fetch(`http://192.168.0.210:8000/MediMeter/medication/delete/${medicationId}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete medication');
      } else {
        // Handle successful deletion, e.g., update medication list
        getMedications();
      }
    } catch (error) {
      console.log('Error deleting medication:', error);
    }
  }


// Function to handle delete request with confirmation
    const handleDeleteWithConfirmation = (medicationId) => {
    Alert.alert(
        'Confirm Deletion',
        'Are you sure you want to delete this medication?',
        [
        {
            text: 'Cancel',
            style: 'cancel',
        },
        {
            text: 'Delete',
            onPress: () => handleDelete(medicationId),
        },
        ],
        { cancelable: false }
    );
    };

  

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

    
    if (medications.length === 0) {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.content}>
                        <Text style={styles.heading}>{'Your Medications'}</Text>
                    </View> 
                <View style={styles.table}>
          <View style={styles.items}>
            <Text style={styles.emptyInventory}>{"Your list of medications is empty because there are no medications in your inventory. You can add some by selecting the + button below"}</Text>
          </View>
        <View style={[styles.content, styles.nextstep]}>
                <TouchableOpacity style={[styles.addmed, {marginTop:-200, marginLeft: 120, height: 60, width:70}]}onPress={() => navigation.navigate('AddMedication')}> 
                <Image source={addmed} style={{height:30, width:30}}/>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    );
    } else {
    return (
        <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.content}>
                <Text style={styles.heading}>{'Your Medications'}</Text>
            </View> 
        <ScrollView style={styles.table}>
            {medications.map((medication, index) => (
            <View style={styles.med} key={index}>
                {medication.picture && <Image source={{ uri: medication.picture }} style={{ width: 150, height: 150, borderWidth: 2, borderColor: 'white' }} />}
            <View style={styles.tableRow} key={index}>
                <View>
                    <Text style={styles.celltitle}>{medication.name + " (" + medication.dosage_instructions + ")"}</Text>
                    <Text style={styles.tableCell}>{"1 pill: " + medication.dietary_restrictions}</Text>
                    <Text style={styles.tableCell}>{medication.frequency}</Text>
                    <Text style={styles.tableCell}>{"Current stock: " + medication.current_stock}</Text>
                </View>
                </View>
                <TouchableOpacity onPress={() => handleDeleteWithConfirmation(medication.id)}>
                    <Image source={deletemed} style={styles.deletemed}/>
                </TouchableOpacity>
            </View>
            ))}
            <View style={[styles.content, styles.nextstep]}>
                <Text style={[styles.buttoninfo, styles.bluebox, {fontSize: 16, height: 80, width: 200}]}>{"Click the + button to add more medications to your list"}</Text>
                <TouchableOpacity style={styles.addmed}onPress={() => navigation.navigate('AddMedication')}> 
                <Image source={addmed} style={{height:30, width:30}}/>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </View>
    );
}
};


export default MedList;
