import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles.js';
import logo from '../assets/logo.png';
import RadioButton from '../assets/RadioButton.js';
import tabletcount from '../assets/tabletcount.png';

const AddMedication = () => {
  const [name, setName] = useState('');
  const [dosageInstructions, setDosageInstructions] = useState('');
  const [frequency, setFrequency] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [image, setImage] = useState(null);
  const [tabletCount, setTabletCount] = useState('');
  const [currentStock, setCurrentStock] = useState('');
  const [missedDose, setMissedDose] = useState('');

  const options1 = [
    { label: '100mg', value: '100mg' },
    { label: '200mg', value: '200mg' },
    { label: '500mg', value: '300mg' },
    { label: 'Other', value: 'Other'}
  ];

  const options2 = [
    { label: 'Empty Stomach', value: 'Empty Stomach' },
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


  const getImageFromCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }

  };

  const pickImage = async () => {
    await getImageFromCamera();

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleAddMedication = () => {
    pickImage();
    // Here you can send the data to the database
    // You can use fetch or any other method to make a POST request to your backend API
    // Include name, dosageInstructions, frequency, dietaryRestrictions, and image
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
                    <Image source={tabletcount} style={styles.tabletcount} />
                </View>
                <TextInput style={[styles.input,styles.tabletnumber]}
                    placeholder=""
                    keyboardType="numeric"
                    value={tabletCount}
                    onChangeText={text => setTabletCount(text)}
                />
            <Text style={styles.title}>{'Current Stock'}</Text>
                <Text style={styles.currenttablets}>{'How many tablets of this type do you have right now? Please count them and type the number below.'}</Text>
                <TextInput style={[styles.input,styles.currentstock]}
                    placeholder=""
                    keyboardType="numeric"
                    value={currentStock}
                    onChangeText={text => setCurrentStock(text)}
                />
            <Text style={styles.title}>{'Dosage'}</Text>
                <RadioButton options={options1} selectedOption={dosageInstructions} onSelect={setDosageInstructions} />
            <Text style={styles.radioText}>Selected option: {dosageInstructions}</Text>
            <Text style={styles.title}>{'Frequency'}</Text>
                <RadioButton options={options3} selectedOption={frequency} onSelect={setFrequency} />
            <Text style={styles.radioText}>Selected option: {frequency}</Text>
            <Text style={styles.title}>{'Dietary Restrictions'}</Text>
                <RadioButton options={options2} selectedOption={dietaryRestrictions} onSelect={setDietaryRestrictions} />
            <Text style={styles.radioText}>Selected option: {dietaryRestrictions}</Text>
            <View style={styles.upload}>
                <Text style={styles.info4}>{'Please use your smartphone to take a picture of the medication. You will be asked to allow access to your camera, you must select "Allow" to proceed.'}</Text>
                <TouchableOpacity onPress={pickImage}>
                    <Text style={styles.selectImage}>{'Take \npicture'}</Text>
                </TouchableOpacity>
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
            </ScrollView>
            <View style={[styles.content, styles.nextstep]}>
                <Text style={[styles.buttoninfo, styles.bluebox]}>{'Click the red button when you have finished typing in all details:'}</Text>
                    <TouchableOpacity style={styles.add}>
                    <Text style={styles.buttonText}>{'ADD MEDICATION'}</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
};

export default AddMedication;
