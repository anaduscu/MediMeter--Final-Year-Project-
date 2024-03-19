
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../../frontend/styles.js';
import logo from '../../frontend/assets/logo.png';
import { useNavigation } from '@react-navigation/native';


const Dashboard = () => {
  const navigation = useNavigation();

    // const handleContinue = () => {
    // navigation.navigate('Decision');
    // }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.content}>
            <Text style={styles.heading}>{'Dashboard'}</Text>
        </View>
    </View>
  );
};

export default Dashboard;
