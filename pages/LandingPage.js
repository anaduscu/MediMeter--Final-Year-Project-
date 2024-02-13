// ExampleComponent.js
import React from 'react';
import {Text, View, Image, Button, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../styles';
import logo from '../assets/logo.png';
import medimeter from '../assets/medimeter.png';
import leftdown from '../assets/leftdown.png';

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.content}>
            <Text style={styles.heading}>{'Hello!'}</Text>
            <Text style={styles.heading}>{'Welcome to'}</Text>
            <Image style={styles.medimeter} source = {medimeter}/>
        </View> 
        <View style={styles.content}>
            <Text style={styles.instr}>{'Your Personal Medication Assistant, now conveniently in your pocket.\n\nTogether we can make your medication management easier than ever.'}</Text>
        </View>
        <View style={[styles.content,styles.nextstep]}>
            <Text style={styles.buttoninfo}>{'Click this button to see the next steps: '}</Text>
            <Image style={styles.leftdown}source = {leftdown}/>
        </View>
        <View style={styles.continue}>
            <TouchableOpacity onPress = {() => {}}>
                <Text style={styles.continueText}>{'CONTINUE'}</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default LandingPage;
