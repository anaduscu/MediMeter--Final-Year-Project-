import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../styles.js';
import logo from '../../frontend/assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import RadioButton from '../../frontend/assets/RadioButton.js';
import pillbox from '../../frontend/assets/pillbox.jpg';


const Questions1 = () => {
  const navigation = useNavigation();
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');

    const options1 = [
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' },
    ];

    const options2 = [
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
    ];
  
    const handleSelectOption1 = (value) => {
      setSelectedOption1(value);
    };

    const handleSelectOption2 = (value) => {
      setSelectedOption2(value);
    }

    const handleContinue = async () => {
      if(selectedOption1 === '' || selectedOption2 === ''){
        alert('Please select an option for both questions before continuing');
        return;
      }

      try {
        // Fetch CSRF token
        const csrfResponse = await fetch('http://192.168.0.210:8000/MediMeter/csrf_token/');
        const csrfData = await csrfResponse.json();
        const csrfToken = csrfData.csrf_token;

        // Make the request with the CSRF token
        // Registration request
        const response = await fetch('http://192.168.0.210:8000/MediMeter/user/set_gender/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({
            //HARD CODED CHANGE!!!! MAKE GLOBAL VARIABLE FOR CURRENT USER!!!!!
             email: "ana@gmail.com",
             gender: selectedOption1,
        })
      });
        
      if (!response.ok) {
        const responseData = await response.json();
        if(responseData.error === 'Missing radio button selection'){
          alert('Please select an option for both questions before continuing');
        } else {
          throw new Error('Failed to register');
        }
      } else {
        const data = await response.json();
        console.log('Registration successful:', data);
        navigation.navigate('Questions2');
      } 
    } catch (error) {
        console.log('Error during registration:', error);
        alert('Failed to register. Please try again.');
      }

    try {
      // Fetch CSRF token
      const csrfResponse = await fetch('http://192.168.0.210:8000/MediMeter/csrf_token/');
      const csrfData = await csrfResponse.json();
      const csrfToken = csrfData.csrf_token;

      // Make the request with the CSRF token
      // Registration request
      const response = await fetch('http://192.168.0.210:8000/MediMeter/user/box_used/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
      },
      body: JSON.stringify({
          //HARD CODED CHANGE!!!! MAKE GLOBAL VARIABLE FOR CURRENT USER!!!!!
          email: "ana@gmail.com",
          pillbox_used: selectedOption2,
      })
    })

    if (!response.ok) {
      const responseData = await response.json();
      if(responseData.error === 'Missing radio button selection'){
        alert('Please select an option for both questions before continuing');
      } else {
        throw new Error('Failed to register');
      }
    } else {
        const data = await response.json();
        console.log('Registration successful:', data);
        navigation.navigate('Questions2');
      }
    } catch (error) {
      console.log('Error during registration:', error);
      alert('Failed to register. Please try again.');
    }
  };


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.content}>
            <Text style={styles.heading}>{'Questions'}</Text>
        </View> 
        <View>
            <Text style={styles.radioInstructions}>{'Whenever you see a list of options followed by a blue circle, you simply have to click on the blue circle icon next to the option that best answers the question before it. '}</Text>
        </View>
        <View>
          <Text style={styles.question1}>{"1) What is your gender?"}</Text>
          <View>
            <RadioButton options={options1} selectedOption={selectedOption1} onSelect={handleSelectOption1} />
            <Text style={styles.radioText}>Selected option: {selectedOption1}</Text>
          </View>
        </View>
        <View>
        <Text style={styles.question2}>{"2) Do you use a physical pill organiser box?"}</Text>
        <View>
        <RadioButton options={options2} selectedOption={selectedOption2} onSelect={handleSelectOption2} />
        <View style={styles.bottom}>
          <Text style={styles.radioText}>Selected option: {selectedOption2}</Text>
          <Image style={styles.pillbox} source = {pillbox}/>
        </View>
          <Text style={styles.example}>{"Example of a pill organiser"}</Text>
        </View>
        </View>
        <View style={[styles.content,styles.nextstep,styles.nextstep2]}>
            <Text style={[styles.buttoninfo,styles.buttoninfo2]}>{'Click the red button to see the next steps: '}</Text>
        </View>
        <View style={styles.button2}>
            <TouchableOpacity style={[styles.continuebutton,styles.button2]} onPress={handleContinue}>
                <Text style={styles.buttonText}>{'CONTINUE'}</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default Questions1;
