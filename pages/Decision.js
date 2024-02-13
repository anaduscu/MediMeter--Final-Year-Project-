import React from 'react';
import {Text, View, Image, Button, ScrollView} from 'react-native';
import styles from '../styles';
import logo from '../assets/logo.png';
import leftdown from '../assets/leftdown.png';
import rightdown from '../assets/rightdown.png';

const Decision = () => {
  return (
    <View style={[styles.container, styles.Text]}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.container}>
            <Text>{'First Step'}</Text>
        </View> 
        <View>
            <Text>{'Before you can use your \nMedication Assistant,\n please follow the next instructions'}</Text>
        </View>
        <View>
            <Text>{'If you have used \nMediMeter before, \nplease click here:'}</Text>
            <Image source={rightdown}></Image>
            <Button title = "LOG IN" onPress = {() => {}}/>
        </View>
        <View>
            <Text>{'If you are new to \nMediMeter, please click here:'}</Text>
            <Image source={leftdown}></Image>
            <Button title = "SIGN UP" onPress = {() => {}}/>
        </View>
    </View>
  );
};

export default Decision;
