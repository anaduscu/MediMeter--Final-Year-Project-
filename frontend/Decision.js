import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../frontend/styles.js';
import logo from '../frontend/assets/logo.png';
import leftdown from '../frontend/assets/leftdown.png';
import rightdown from '../frontend/assets/rightdown.png';
import { useNavigation } from '@react-navigation/native';


const Decision = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('LogIn');
  }

  const handleSignUp = () => {
    navigation.navigate('Welcome1');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.content}>
            <Text style={styles.heading}>{'Step 1'}</Text>
        </View> 
        <View>
            <Text style={styles.info}>{'Before you can use your \nMedication Assistant, please\nfollow the next instructions'}</Text>
        </View>
        <View style={[styles.decision,styles.nextstep]}>
            <Image style={styles.rightdown} source={rightdown}></Image>
            <Text style={styles.logininfo}>{'If you have used \nMediMeter before, \nplease click here:'}</Text>
        </View>
        <View style={styles.login}>
          <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.buttonText}>{'LOG IN'}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.content,styles.nextstep]}>
            <Text style={styles.signupinfo}>{'If you are new to \nMediMeter, please click here:'}</Text>
            <Image style={styles.leftdown}source={leftdown}></Image>
        </View>
        <View style={styles.signup}>
            <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.buttonText}>{'SIGN UP'}</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default Decision;
