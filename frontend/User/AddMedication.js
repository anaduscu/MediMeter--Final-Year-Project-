import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles.js';
import logo from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import RadioButton from '../assets/RadioButton.js';
import count from '../assets/tabletcount.png';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry.js';

const AddMedication = () => {
    const navigation = useNavigation();
  const [name, setName] = useState('');
  const [dosage_instructions, setDosageInstructions] = useState('');
  const [frequency, setFrequency] = useState('');
  const [dietary_restrictions, setDietaryRestrictions] = useState('');
  const [picture, setPicture] = useState(null);
  const [tabletcount, setTabletCount] = useState('');
  const [current_stock, setCurrentStock] = useState('');
  const [missedDose, setMissedDose] = useState('');

  const handleAddMedication = async () => {
    if (name === '' || dosage_instructions === '' || frequency === '' || dietary_restrictions === '' || picture === null || tabletcount === '' || current_stock === '') {
        alert('Please fill in all fields');
        return;
    }

    try {
        const base64Image = await convertImageToBase64(picture); // Convert image to base64

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
                // HARD CODED CHANGE!!!! MAKE GLOBAL VARIABLE FOR CURRENT USER!!!!!
                email: "ana@gmail.com",
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
            alert('Medication added successfully');
            navigation.navigate('MedList');
        }
    } catch (error) {
        console.error('Error adding medication:', error);
        alert('Failed to add medication: ' + error.message);
    }
    
};


  const options1 = [
    { label: '100mg', value: '100mg' },
    { label: '200mg', value: '200mg' },
    { label: '500mg', value: '300mg' },
    { label: 'Other', value: 'Other'}
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
    { label: 'Other', value: 'Other'}
  ];

  const convertImageToBase64 = async (uri) => {
    try {
        const response = await fetch(uri);
        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }
        const blob = await response.blob();
        const base64String = await blobToBase64(blob);
        return base64String;
    } catch (error) {
        console.error('Error converting image to base64:', error);
        return null; // Return null or handle the error gracefully
    }
};


const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            resolve(reader.result.split(',')[1]);
        };
        reader.readAsDataURL(blob);
    });
};

  const getImageFromCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }

  };

  const pickImage = async () => {
    console.log('pickImage function called');
    
    await getImageFromCamera();
  
    console.log('Camera permissions granted, launching camera...');
    
    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });
    console.log('ImagePicker result:', result);
    const uri = result.assets[0].uri;
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
        <Image source={logo} style={styles.logo} />
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
