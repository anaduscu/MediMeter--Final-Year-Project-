import React, {useState} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../../frontend/styles.js';
import logo from '../../frontend/assets/logo.png';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSignUp = async () => {
    navigation.navigate('Step2');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
  
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
          lastname: lastName, // Make sure to include the last name here
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
    Alert.alert('Registration Failed', 'Failed to register. Please try again.');
  
  };
  
  

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.content}>
            <Text style={styles.heading}>{'Creating Account'}</Text>
            <Text style={styles.subheading}>{'For the next steps, you will need to type in some of your personal information. If you are unsure of any details, it would be best to ask someone you trust beforehand. '}</Text>
            <Text style={[styles.info,styles.keyboardinstr]}>{'Click on each box to start typing in it. When you finish typing, click the return button on you keyboard (bottom right corner)'}</Text>
        </View>
        <View style={styles.form}>
            <Text style={styles.inputTitle}>{'First Name'}</Text>
            <TextInput style={styles.input}
                value={firstName}
                onChangeText={(fname) => setFirstName(fname)}
                placeholder=""
            />
        
            <Text style={styles.inputTitle}>{'Last Name'}</Text>  
            <TextInput style={styles.input}
                value={lastName}
                onChangeText={(lname) => setLastName(lname)}
                placeholder=""
            />

            <Text style={styles.inputTitle}>{'Email'}</Text>
            <TextInput style={styles.input}
                value={email}
                onChangeText={(em) => setEmail(em)}
                placeholder=""
                keyboardType="email-address"
            />

            <Text style={styles.inputTitle}>{'Password'}</Text>
            <TextInput style={styles.input}
                value={password}
                onChangeText={(pass) => setPassword(pass)}
                placeholder=""
                secureTextEntry
            />
        </View>
        <View style={[styles.content,styles.nextstep]}>
            <Text style={[styles.buttoninfo,styles.bluebox]}>{'Click the red button when you have finished typing in all your details:'}</Text>
            <TouchableOpacity style={[styles.continuebutton,styles.signupbutton]}onPress={handleSignUp}>
                <Text style={styles.buttonText}>{'SIGN UP'}</Text>
            </TouchableOpacity>
        </View>
    </View> 
    );

    

}

export default SignUp;


