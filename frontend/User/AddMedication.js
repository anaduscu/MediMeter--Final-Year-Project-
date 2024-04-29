import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles.js';
import logo from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import RadioButton from '../assets/RadioButton.js';
import count from '../assets/tabletcount.png';
import AsyncStorage from '@react-native-async-storage/async-storage';



const AddMedication = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [dosage_instructions, setDosageInstructions] = useState('');
  const [frequency, setFrequency] = useState('');
  const [dietary_restrictions, setDietaryRestrictions] = useState('');
  const [picture, setPicture] = useState(null);
  const [tabletcount, setTabletCount] = useState('');
  const [current_stock, setCurrentStock] = useState('');
  const [refill_date, setRefillDate] = useState('');

  const handleAddMedication = async () => {
    if (name === '' || dosage_instructions === '' || frequency === '' || dietary_restrictions === '' || picture === null || tabletcount === '' || current_stock === '') {
        Alert.alert('Incomplete fields' ,'Please fill in all details. If you are unsure, please ask someone you trust for help.');
        return;
    }

    const userEmailString = await AsyncStorage.getItem('userEmail');

    try {  
        // Fetch CSRF token
        const csrfResponse = await fetch('http://192.168.0.210:8000/MediMeter/csrf_token/');
        const csrfData = await csrfResponse.json();
        const csrfToken = csrfData.csrf_token;

        const response = await fetch('http://192.168.0.210:8000/MediMeter/medication/set_medication/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
            body: JSON.stringify({ 
                email: userEmailString,
                name: name,
                dosage_instructions: dosage_instructions,
                frequency: frequency,
                dietary_restrictions: dietary_restrictions,
                picture: picture, // Send base64-encoded image data
                tabletcount: tabletcount,
                current_stock: current_stock,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to add medication');
        } else {
            Alert.alert('Medication added', 'Medication added successfully to your list.');
            navigation.navigate('MedList');
        }
    } catch (error) {
        console.error('Error adding medication:', error);
        Alert.alert('Something went wrong', 'Failed to add medication: ' + error.message);
    }
    
};



  const options1 = [
    { label: '100mg', value: '100mg' },
    { label: '200mg', value: '200mg' },
    { label: '500mg', value: '500mg' },
    { label: '900mg', value: '900mg'}
  ];

  const options2 = [
    { label: 'On an empty Stomach', value: 'On empty Stomach' },
    { label: 'Before Food', value: 'Before Food'},
    { label: 'With Food', value: 'With Food'},
    { label: 'After Food', value: 'After Food'},
    { label: 'No Restrictions', value: 'No Restrictions'}
  ];

  const options3 = [
    { label: 'Once a day', value: 'Once a day' },
    { label: 'Twice a day', value: 'Twice a day' },
    { label: 'Three times a day', value: 'Three times a day' },
  ];

  // Ask for camera permissions
  const getImageFromCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert("Please select the 'Allow' option to take a picture of your medication.");
      return;
    }

  };

  // Function to pick an image from device camera 
  const pickImage = async () => {    
    await getImageFromCamera();    
    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // Only images
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });
    const uri = result.assets[0].uri; // Index 0 is the image URI
    console.log('Image URI:', uri); 


    if (!result.canceled) {
        console.log('Image captured successfully:', result.assets[0].uri);
        setPicture(result.assets[0].uri);
    } else {
        console.log('Image capture cancelled');
    }
  };
  


  return (
    <View style={styles.container}>
        <Image source={logo} style={[styles.logo,{marginTop:50}]} />
        <View style={styles.content}>
            <Text style={styles.heading}>{'Add Medication'}</Text>
        </View>      
        <Text style={styles.info3}>{'Here you can add medications to your list of prescriptions. Please provide the necessary details below: '}</Text>
        <ScrollView contentContainerStyle={styles.addmedication}>
            <Text style={styles.title}>{'Medication Name'}</Text>
            <TextInput style={[styles.input,styles.input2]}
                placeholder=""
                value={name}
                onChangeText={text => setName(text)}
            />
            <Text style={styles.title}>{'Tablet count per box'}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.note}>{'Note: \nthis is usually written on the box like so →'}</Text>
                    <Image source={count} style={styles.tabletcount} />
                </View>
                <TextInput style={[styles.input,styles.tabletnumber]}
                    placeholder=""
                    keyboardType="numeric"
                    value={tabletcount}
                    onChangeText={text => setTabletCount(text)}
                />
            <Text style={styles.title}>{'Current Stock'}</Text>
                <Text style={styles.currenttablets}>{'How many tablets of this type do you have right now? Please count them and type the number below.'}</Text>
                <TextInput style={[styles.input,styles.currentstock]}
                    placeholder=""
                    keyboardType="numeric"
                    value={current_stock}
                    onChangeText={text => setCurrentStock(text)}
                />
            <Text style={styles.title}>{'Dosage'}</Text>
                <RadioButton options={options1} selectedOption={dosage_instructions} onSelect={setDosageInstructions} />
            <Text style={styles.radioText}>Selected option: {dosage_instructions}</Text>
            <Text style={styles.title}>{'Frequency'}</Text>
                <RadioButton options={options3} selectedOption={frequency} onSelect={setFrequency} />
            <Text style={styles.radioText}>Selected option: {frequency}</Text>
            <Text style={styles.title}>{'Dietary Restrictions'}</Text>
                <RadioButton options={options2} selectedOption={dietary_restrictions} onSelect={setDietaryRestrictions} />
            <Text style={styles.radioText}>Selected option: {dietary_restrictions}</Text>
            <View style={styles.upload}>
                <Text style={styles.info4}>{'Please use your smartphone to take a picture of the medication. You will be asked to allow access to your camera, you must select "Allow" to proceed.'}</Text>
                <TouchableOpacity onPress={pickImage}>
                    <Text style={styles.selectImage}>{'Take \npicture'}</Text>
                </TouchableOpacity>
            </View>
            {picture && <Image source={{ uri: picture }} style={{ width: 200, height: 200 }} />}
            </ScrollView>
            <View style={[styles.content, styles.nextstep]}>
                <Text style={[styles.buttoninfo, styles.bluebox]}>{'Click the red button when you have finished typing in all details:'}</Text>
                    <TouchableOpacity style={styles.add} onPress={handleAddMedication}>
                    <Text style={styles.buttonText}>{'ADD MEDICATION'}</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
};

export default AddMedication;
