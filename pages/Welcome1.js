import React from 'react';
import {Text, View, Image, Button, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../styles';
import logo from '../assets/logo.png';
import leftdown from '../assets/leftdown.png';
import rightdown from '../assets/rightdown.png';
import { useNavigation } from '@react-navigation/native';


const Welcome1 = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
      navigation.navigate('SignUp');
  }

  const handleBack = () => {
      navigation.navigate('Decision');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.content}>
            <Text style={styles.heading}>{'Hello again,'}</Text>
            <Text style={styles.instr}>{'We are about to create a MediMeter account for you – think of it like having a drawer with you name on it, and if there are others using the app, they each get their or own drawer too.\n\nEvery user gets to keep their personal health details and medicines safe and private in their own drawer.'}</Text>
        <View style={styles.next}>
            <Image style={[styles.rightdown, styles.arrow1]} source = {rightdown}/>
            <Text style={styles.buttoninfo}>{'Click this button to see the next steps: '}</Text>
        </View>
        <View style={styles.continuebutton}>
            <TouchableOpacity onPress={handleContinue}>
                <Text style={styles.buttonText}>{'CONTINUE'}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.footer}>
            <Text style={styles.back}>{'If you think you have made a mistake, and you\nalready have an account,\nplease click here to return\nto the previous page: '}</Text>
            <Image  style={[styles.leftdown, styles.arrow2]} source = {leftdown}/>
          <View style={styles.backbutton}>
            <TouchableOpacity onPress={handleBack}>
                <Text style={styles.buttonText}>{'BACK'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View> 
    </View>
  );
};


export default Welcome1;
