
import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from '../../frontend/styles.js';
import logo from '../../frontend/assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import TodayDate from '../../frontend/assets/TodayDate.js';
import Schedule from '../../frontend/assets/Schedule.js';


const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.dash}>
        <TodayDate></TodayDate>
        <Image style={styles.logo} source = {logo}/>
      </View>
        <View style={styles.content}>
            <Text style={styles.heading}>{'Dashboard'}</Text>
            <Text style={styles.sched}>Today's schedule</Text>

        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Schedule></Schedule>
        </ScrollView>
        <View style={styles.footer}>
            <Text style={styles.footerInstr}>Click on each button to see:</Text>
            <View style={styles.footerLabels}>
                  <Text style={styles.footerText}>Your personal information</Text>
                  <Text style={styles.footerText}>Your list of Medications</Text>
                  <Text style={styles.footerText}>How the app works</Text>
            </View>
            <View style={styles.footerButtons}>
              <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('PersonalInfo')}>
                  <Image source={require('../../frontend/assets/personal.png')} style={styles.footerImage}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('MedList')}>
                <Image source={require('../../frontend/assets/medlist.png')} style={styles.footerImage}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('AppInfo')}>
                  <Image source={require('../../frontend/assets/info.png')} style={styles.footerImage}></Image>
              </TouchableOpacity>
            </View>
          </View> 
    </View>
  );
};

export default Dashboard;
