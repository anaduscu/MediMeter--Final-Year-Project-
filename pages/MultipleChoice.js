import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../styles';
import logo from '../assets/logo.png';
import leftdown from '../assets/leftdown.png';
import rightdown from '../assets/rightdown.png';

const MultipleChoice = () => {
    return (
        <View style={[styles.container, styles.Text]}>
          <Image style={styles.logo} source = {logo}/>
            <View style={styles.container}>
                <Text>{'Types of Questions'}</Text>
                <Text>{'Multiple Choice'}</Text>
            </View> 
            <View>
                <Text>
                {'Whenever you see a list of options followed by this icon: \n\nYou simply have to click on the icon next to the option that best answers the question before it. Like this: '}
                </Text>
            </View>
            
        </View>
    )
};

export default MultipleChoice;

            