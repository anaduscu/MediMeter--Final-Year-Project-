import React from 'react';
import {Text, View, Image, Button, ScrollView} from 'react-native';
import styles from '../styles';
import logo from '../assets/logo.png';
import leftdown from '../assets/leftdown.png';
import rightdown from '../assets/rightdown.png';

const Welcome1 = () => {
  return (
    <View style={[styles.container, styles.Text]}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.container}>
            <Text>{'Hello again,'}</Text>
        </View> 
        <View>
            <Text>{'We are about to create a MediMeter account for you – think of it like having a drawer with you name on it, and if there are others using the app, they each get their or own drawer too.\n\nEvery user gets to keep their personal health details and medicines safe and private in their own drawer.'}</Text>
        </View>
        <View>
            <Text>{'Click this button to see the next  steps: '}</Text>
            <Image source = {rightdown}/>
            <Button title = "CONTINUE" onPress = {() => {}}/>
        </View>
        <View>
            {/* <hr /> */}
            <Text>{'If you think you have made a mistake,\n and you already have an account, \nplease click here to return to the previous page: '}</Text>
            <Image source = {leftdown}/>
            <Button title = "BACK" onPress = {() => {}}/>
        </View> 
    </View>
  );
};

export default Welcome1;
