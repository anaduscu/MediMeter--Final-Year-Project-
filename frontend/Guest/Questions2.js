import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, Keyboard} from 'react-native';
import styles from '../styles.js';
import logo from '../../frontend/assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import RadioButton from '../../frontend/assets/RadioButton.js';
import pillbox from '../../frontend/assets/pillbox.jpg';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';
import {setCaregiverEmail, setCaregiverPhone, setBringsMedication} from '../../frontend/Storage.js';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Questions1 = () => {
  const navigation = useNavigation();
  const [selectedOption1, setSelectedOption1] = useState('');

  const [email, setEmail] = useState('');
  const [phone_number, setPhone] = useState('');

  const options1 = [
    { label: 'I go to the pharmacy myself.', value: 'Myself' },
    { label: 'Someone picks up my medications for me.', value: 'Someone else' },
    { label: 'I have medications delivered to my home.', value: 'Delivery' },
  ];

  const handleSelectOption1 = (value) => {
    setSelectedOption1(value);
  };

  const handleContinue = async () => {
    if(selectedOption1 === ''){
      alert('Please select an option for question 3) before continuing');
      return;
    }
    if(phone_number === '' || email === ''){
      alert('Please fill in the email and phone number before continuing');
      return;
    }
  

    try {
      const userEmailString = await AsyncStorage.getItem('userEmail');

      // Fetch CSRF token
      const csrfResponse = await fetch('http://192.168.0.210:8000/MediMeter/csrf_token/');
      const csrfData = await csrfResponse.json();
      const csrfToken = csrfData.csrf_token;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Alert.alert('Invalid Email', 'Please enter a valid email address.');
        return;
      }
  
      // Make the registration request with the CSRF token
      // Registration request
      const response = await fetch('http://192.168.0.210:8000/MediMeter/user/caregiver/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({
            user_email: userEmailString,
            email: email,
            phone_number: phone_number,
            brings_medication: selectedOption1,
        })
      });

  
      if (!response.ok) {
        const responseData = await response.json();
        if (responseData.error === 'User with this email already exists') {
          Alert.alert('Failed to register', 'Looks like you already have an account with this email. Please click the BACK button and select the LOG IN option, or use a different email.');
        } else {
          throw new Error('Failed to register');
        }
      } else {
        const data = await response.json();
        setCaregiverEmail(email);
        setCaregiverPhone(phone_number);
        setBringsMedication(selectedOption1);
        console.log('Caregiver registration successful:', data);
        navigation.navigate('LogIn');
      }
    } catch (error) {
      console.log('Error during registration:', error);
      Alert.alert('Registration Failed', 'Failed to register. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='position'>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.content}>
            <Text style={styles.heading}>{'Questions'}</Text>
        </View> 
        <View>
          <Text style={styles.question3}>{"3) How do you typically acquire your medications when your supply is low or has finished? "}</Text>
          <View>
            <RadioButton options={options1} selectedOption={selectedOption1} onSelect={handleSelectOption1} />
            <Text style={styles.radioText}>Selected option: {selectedOption1}</Text>
          </View>
        </View>
        <Text style={styles.radioInstructions}>{'To ensure your safety and provide additional support, we would like to gather contact information for a trusted person, family member, or caregiver. Please provide their email address and phone number.'}</Text>
        <View style={styles.trusted}>
          <Text style={styles.inputTitle}>{"Phone Number"}</Text>
          <TextInput
            style={styles.input}
            value={phone_number}
            onChangeText={(value) => setPhone(value)}
            keyboardType="phone-pad"
          />    
          <Text style={styles.inputTitle}>{'Email'}</Text>
          <TextInput style={styles.input}
              value={email}
              onChangeText={(em) => setEmail(em)}
              placeholder=""
              keyboardType="email-address"
          />
          </View>
        <View style={[styles.content,styles.nextstep,styles.nextstep2]}>
            <Text style={[styles.buttoninfo,styles.buttoninfo2]}>{'Click the red button to see the next steps: '}</Text>
        </View>
        <View style={styles.button2}>
            <TouchableOpacity style={[styles.continuebutton,styles.button2]} onPress={handleContinue}>
                <Text style={styles.buttonText}>{'CONTINUE'}</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
};

export default Questions1;
