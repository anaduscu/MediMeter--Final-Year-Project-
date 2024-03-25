import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../../frontend/styles.js';
import logo from '../../frontend/assets/logo.png';
import { useNavigation } from '@react-navigation/native';


const Step2 = () => {
  const navigation = useNavigation();

    const handleContinue = () => {
    navigation.navigate('Dashboard');
    }=
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.content}>
            <Text style={styles.heading}>{'Step 2'}</Text>
        </View> 
        <View style={styles.content}>
            <Text style={styles.instr}>{'You have now created a MediMeter Account. That means we can start managing your medication together! \n'}</Text>
            <Text style={styles.instr}>{'But before we can do that, there are a few things you need to do. These steps are very important, so please try to answer any upcoming questions as accurately as possible. '}</Text>
        </View>
        <View>
            <Text style={styles.info2}>{'You are about to come across some questions, as well as some useful information that will help you navigate the app. '}</Text>
        </View>
        <View style={[styles.content,styles.nextstep,styles.nextstep2]}>
            <Text style={[styles.buttoninfo,styles.buttoninfo2]}>{'Click the red button to see the next steps: '}</Text>
        </View>
        <View style={styles.button2}>
            <TouchableOpacity style={[styles.continuebutton,styles.button2]} onPress={handleContinue}>
                <Text style={styles.buttonText}>{'CONTINUE'}</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default Step2;
