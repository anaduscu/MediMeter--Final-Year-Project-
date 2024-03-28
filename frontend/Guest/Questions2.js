import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, Keyboard} from 'react-native';
import styles from '../styles.js';
import logo from '../../frontend/assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import RadioButton from '../../frontend/assets/RadioButton.js';
import pillbox from '../../frontend/assets/pillbox.jpg';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';



const Questions1 = () => {
  const navigation = useNavigation();

    const handleContinue = () => {
    navigation.navigate('LogIn');
    }
    const [selectedOption1, setSelectedOption1] = useState('');

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const options1 = [
      { label: 'I go to the pharmacy myself.', value: 'Myself' },
      { label: 'Someone picks up my medications for me.', value: 'Someone else' },
      { label: 'I have medications delivered to my home.', value: 'Delivery' },
    ];

    const dismissKeyboard = () => {
        Keyboard.dismiss(); // Dismiss the keyboard
      };
  
    const handleSelectOption1 = (value) => {
      setSelectedOption1(value);
    };
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior='position'>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.content}>
            <Text style={styles.heading}>{'Questions'}</Text>
        </View> 
        <View>
          <Text>{"3)How do you typically acquire your medications when your supply is running low or has run out? "}</Text>
          <View>
            <RadioButton options={options1} selectedOption={selectedOption1} onSelect={handleSelectOption1} />
            <Text>Selected option: {selectedOption1}</Text>
          </View>
        </View>
        <Text>{'To ensure your safety and provide additional support, we would like to gather contact information for a trusted person, family member, or caregiver. Please provide their email address and phone number.'}</Text>
        <Text>{"Phone Number"}</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(value) => setPhone(value)}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          onBlur={dismissKeyboard} // Dismiss the keyboard when the input loses focus
        />    
        <View style={styles.form}>
            <Text style={styles.inputTitle}>{'Email'}</Text>
            <TextInput style={styles.input}
                value={email}
                onChangeText={(em) => setEmail(em)}
                placeholder=""
                keyboardType="email-address"
            />
        </View>
        {/* <View style={[styles.content,styles.nextstep,styles.nextstep2]}>
            <Text style={[styles.buttoninfo,styles.buttoninfo2]}>{'Click the red button to see the next steps: '}</Text>
        </View> */}
        <View style={styles.button2}>
            <TouchableOpacity style={[styles.continuebutton,styles.button2]} onPress={handleContinue}>
                <Text style={styles.buttonText}>{'CONTINUE'}</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
};

export default Questions1;
