import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../styles.js';
import logo from '../../frontend/assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import RadioButton from '../../frontend/assets/RadioButton.js';
import pillbox from '../../frontend/assets/pillbox.jpg';


const Questions1 = () => {
  const navigation = useNavigation();

    const handleContinue = () => {
    navigation.navigate('Questions2');
    }
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

  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source = {logo}/>
        <View style={styles.content}>
            <Text style={styles.heading}>{'Questions'}</Text>
        </View> 
        <View style={styles.content}>
            <Text style={styles.instr}>{'Whenever you see a list of options followed by this icon: '}</Text>
            <Text style={styles.instr}>{'You simply have to click on the icon next to the option that best answers the question before it. '}</Text>
        </View>
        <View>
          <Text>{"1) What is your gender?"}</Text>
          <View>
            <RadioButton options={options1} selectedOption={selectedOption1} onSelect={handleSelectOption1} />
            <Text>Selected option: {selectedOption1}</Text>
          </View>
        </View>
        <View>
        <Text>{"2) Do you use a physical pill organiser box?"}</Text>
          <View>
        <RadioButton options={options2} selectedOption={selectedOption2} onSelect={handleSelectOption2} />
        <Text>Selected option: {selectedOption2}</Text>
        </View>
        </View>
        <View>
          <Image style={styles.pillbox} source = {pillbox}/>
          <Text>{"Example of a pill organiser"}</Text>
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
