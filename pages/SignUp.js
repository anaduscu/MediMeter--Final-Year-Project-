import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../styles';
import logo from '../assets/logo.png';
import leftdown from '../assets/leftdown.png';
import rightdown from '../assets/rightdown.png';
import caps from '../assets/caps.png';
import { TextInput } from 'react-native-gesture-handler';
import { goToStep2 } from '../utils/NavigationUtils.js';

const SignUp = ({navigation}) => {
  return (
    <View style={[styles.container, styles.Text]}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.container}>
            <Text>{'Creating Account'}</Text>
        </View> 
            <Text>{'For the next steps, you will need to type in some of your personal information. If you are unsure of any details, it would be best to ask someone you trust beforehand. '}</Text>
        <View>
            <Text>{'Click on each box to start typing in it. Use capital letters for names - looks like this on your keyboard: '}</Text>
            <Image source={caps}></Image>
        </View>
        <View>
            <Text>{'First Name'}</Text>
            <TextInput></TextInput>
        
            <Text>{'Last Name'}</Text>  
            <TextInput></TextInput>

            <Text>{'Email'}</Text>
            <TextInput></TextInput>

            <Text>{'Password'}</Text>
            <TextInput></TextInput>
        </View>
        <View>
            <Text>{'Click this button when you have finished typing in all your details:'}</Text>
            <Image source = {leftdown}/>
            <TouchableOpacity title = "CONTINUE" onPress = {() => {goToStep2}}/>
        </View>
    </View> 
    );

}

export default SignUp;