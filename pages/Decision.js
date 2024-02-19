import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../styles';
import logo from '../assets/logo.png';
import leftdown from '../assets/leftdown.png';
import rightdown from '../assets/rightdown.png';
import { useNavigation } from '@react-navigation/native';


const Decision = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('LandingPage');
  }

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.content}>
            <Text style={styles.heading}>{'Step 1'}</Text>
        </View> 
        <View>
            <Text>{'Before you can use your \nMedication Assistant,\n please follow the next instructions'}</Text>
        </View>
        <View style={styles.continue}>
            <Text style={styles.buttoninfo}>{'If you have used \nMediMeter before, \nplease click here:'}</Text>
            <Image style={styles.rightdown} source={rightdown}></Image>
            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.continueText}>{'LOG IN'}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.continue}>
            <Text style={styles.buttoninfo}>{'If you are new to \nMediMeter, please click here:'}</Text>
            <Image style={styles.leftdown}source={leftdown}></Image>
            <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.continueText}>{'SIGN UP'}</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default Decision;
