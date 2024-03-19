import React, {useState} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../../frontend/styles.js';
import logo from '../../frontend/assets/logo.png';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Cookies from 'js-cookie';


const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    console.log('Email:', email);
    console.log('Password:', password);
  
    try {
      // Fetch CSRF token
      const csrfResponse = await fetch('http://192.168.0.210:8000/MediMeter/csrf_token/');
      const csrfData = await csrfResponse.json();
      const csrfToken = csrfData.csrf_token;
  
      // Make the login request with the CSRF token
      const apiUrl = 'http://192.168.0.210:8000/MediMeter/user/';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        Cookies.set('email', email);
        navigation.navigate('Dashboard'); //dashboard
      } else {
        console.log('Login failed:', data);
        throw new Error(data.error || 'Login failed');
      }
    } catch (error) {
      console.log('Error during login:', error.message);
    }
  
  };
  
  

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.content}>
            <Text style={styles.heading}>{'Logging In'}</Text>
            <Text style={styles.subheading}>{'For the next steps, you will need to type in the details you used to create your account. If you are unsure of anything, it would be best to ask someone you trust beforehand. '}</Text>
            <Text style={[styles.info,styles.keyboardinstr,styles.loginInfo]}>{'Click on each box to start typing in it. When you finish typing, click the return button on you keyboard (bottom right corner)'}</Text>
        </View>
        <View style={styles.form}>
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
            <TouchableOpacity style={[styles.continuebutton,styles.signupbutton]}onPress={handleLogin}>
                <Text style={styles.buttonText}>{'LOG IN'}</Text>
            </TouchableOpacity>
        </View>
    </View> 
    );

    

}

export default LogIn;

