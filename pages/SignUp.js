import React, {useState} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../styles';
import logo from '../assets/logo.png';
import leftdown from '../assets/leftdown.png';
import rightdown from '../assets/rightdown.png';
import caps from '../assets/caps.png';
import { TextInput } from 'react-native-gesture-handler';
import { goToStep2 } from '../utils/NavigationUtils.js';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      // Fetch CSRF token
      const csrfResponse = await fetch('http://192.168.0.210:8000/MediMeter/csrf_token/');
      const csrfData = await csrfResponse.json();
      const csrfToken = csrfData.csrf_token;
  
      // Make the registration request with the CSRF token
      const apiUrl = 'http://192.168.0.210:8000/MediMeter/user/';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,  // Include the CSRF token in the headers
        },
        body: JSON.stringify({
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
          })
        });
  
      if (!response.ok) {
        throw new Error('Failed to register');
      }
  
      const data = await response.json();
      console.log('Registration successful:', data);
    } catch (error) {
      console.log('Error during registration:', error);
    }
  };
  
  

  return (
    <View style={[styles.container, styles.Text]}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.heading}>
            <Text>{'Creating Account'}</Text>
        </View> 
            <Text>{'For the next steps, you will need to type in some of your personal information. If you are unsure of any details, it would be best to ask someone you trust beforehand. '}</Text>
        <View>
            <Text>{'Click on each box to start typing in it. Use capital letters for names - looks like this on your keyboard: '}</Text>
            {/* <Image source={caps}></Image> */}
        </View>
        <View>
            <Text>{'First Name'}</Text>
            <TextInput
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
                placeholder=""
            />
        
            <Text>{'Last Name'}</Text>  
            <TextInput
                value={lastName}
                onChangeText={(text) => setLastName(text)}
                placeholder=""
            />

            <Text>{'Email'}</Text>
            <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder=""
                keyboardType="email-address"
            />

            <Text>{'Password'}</Text>
            <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder=""
                secureTextEntry
            />
        </View>
        <View>
            <Text>{'Click this button when you have finished typing in all your details:'}</Text>
            <Image style={styles.leftdown}source = {leftdown}/>
            <View>
                <TouchableOpacity style={styles.continuebutton} title = "CONTINUE" onPress = {handleSignUp}/>
            </View>
        </View>
    </View> 
    );

}

export default SignUp;