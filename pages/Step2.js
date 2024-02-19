import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../styles';
import logo from '../assets/logo.png';
import leftdown from '../assets/leftdown.png';
import rightdown from '../assets/rightdown.png';

const Decision = ({navigation}) => {
  return (
    <View style={[styles.container, styles.Text]}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.container}>
            <Text>{'Second Step'}</Text>
        </View> 
        <View>
            <Text>{'You have now created a MediMeter Account. That means you we can start managing your medication together! '}</Text>
            <Text>{'But before we can do that, there are a few things you need to do. These steps are very important, so please try to answer any upcoming questions as accurately as possible. '}</Text>
        </View>
        <View>
            <Text>{'You are about to come across some questions, as well as some useful information that will help you navigate the app. '}</Text>
        </View>
        <View>
            <Text>{'Click this button to see the next  steps: '}</Text>
            <Image source = {leftdown}/>
            <TouchableOpacity title = "CONTINUE" onPress = {() => {}}/>
        </View>
    </View>
  );
};

export default Decision;
