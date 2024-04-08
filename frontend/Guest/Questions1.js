import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../styles.js';
import logo from '../../frontend/assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import RadioButton from '../../frontend/assets/RadioButton.js';
import pillbox from '../../frontend/assets/pillbox.jpg';


const Questions1 = () => {
  const navigation = useNavigation();

    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');

    const options1 = [
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' },
    ];

    const options2 = [
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
    ];
  
    const handleSelectOption1 = (value) => {
      setSelectedOption1(value);
    };

    const handleSelectOption2 = (value) => {
      setSelectedOption2(value);
    }

    const handleContinue = () => {
      navigation.navigate('Questions2');

      

      }
  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.content}>
            <Text style={styles.heading}>{'Questions'}</Text>
        </View> 
        <View>
            <Text style={styles.radioInstructions}>{'Whenever you see a list of options followed by a blue circle, you simply have to click on the blue circle icon next to the option that best answers the question before it. '}</Text>
        </View>
        <View>
          <Text style={styles.question1}>{"1) What is your gender?"}</Text>
          <View>
            <RadioButton options={options1} selectedOption={selectedOption1} onSelect={handleSelectOption1} />
            <Text style={styles.radioText}>Selected option: {selectedOption1}</Text>
          </View>
        </View>
        <View>
        <Text style={styles.question2}>{"2) Do you use a physical pill organiser box?"}</Text>
        <View>
        <RadioButton options={options2} selectedOption={selectedOption2} onSelect={handleSelectOption2} />
        <View style={styles.bottom}>
          <Text style={styles.radioText}>Selected option: {selectedOption2}</Text>
          <Image style={styles.pillbox} source = {pillbox}/>
        </View>
          <Text style={styles.example}>{"Example of a pill organiser"}</Text>
        </View>
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

export default Questions1;
