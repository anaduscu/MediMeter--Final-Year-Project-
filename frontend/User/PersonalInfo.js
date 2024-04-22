import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../frontend/styles.js';
import logo from '../../frontend/assets/logo.png';
import dash from '../../frontend/assets/dash.png';
import { use } from 'ast-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PersonalInfo = () => {
    const [personalInfo, setPersonalInfo] = useState('');

    const navigation = useNavigation();

    const fetchPersonalInfo = async () => {
        const userEmailString = await AsyncStorage.getItem('userEmail');
        console.log(userEmailString);
        try {
            // Fetch CSRF token
            const csrfResponse = await fetch('http://192.168.0.210:8000/MediMeter/csrf_token/');
            const csrfData = await csrfResponse.json();
            const csrfToken = csrfData.csrf_token;
    
            // Make the request with the CSRF token
            // Registration request
            const response = await fetch('http://192.168.0.210:8000/MediMeter/user/get_personal_info/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
                body: JSON.stringify({
                    // Hardcoded email for now
                    email: userEmailString,
                })
            });
            
            if (!response.ok) {
                throw new Error('Failed to fetch personal info');
            } else {

            const data = await response.json();
            setPersonalInfo(data.personalInfo);
            }
        } catch (error) {
            console.error('Error fetching personal info:', error);
        }
    };

    useEffect(() => {
        fetchPersonalInfo();
    }, []);

    return (
        <View style={[styles.container,{marginTop:-100}]}>
            <Image source={logo} style={styles.logo} />
            <Text style={[styles.heading, {marginLeft: 20}]}>Your Personal Information</Text>
            <Text style={[styles.info,{height: 150}]}>Here you can see the personal information you provided when you created your account.</Text>
            <View style={styles.personalInfoItem}>
                <Text style={styles.personalInfoText}>Name: {personalInfo.firstname}</Text>
                <Text style={styles.personalInfoText}>Surname: {personalInfo.lastname}</Text>
                <Text style={styles.personalInfoText}>Email: {personalInfo.email}</Text>
                <Text style={styles.personalInfoText}>Gender: {personalInfo.gender}</Text>
                <View>
                    <Text style={[styles.personalInfoText,{fontSize:21, marginTop: 10, color:'#335AF8'}]}>Contact details of trusted person:</Text>
                    <Text style={styles.personalInfoText}>Email: {personalInfo.caregiver}</Text>
                    <Text style={styles.personalInfoText}>Telephone: {personalInfo.phone_number}</Text>
                </View>
            </View>
            <View style={[styles.content, styles.nextstep, styles.backtodash]}>
                <Text style={[styles.buttoninfo, styles.bluebox, {fontSize: 16, height: 80, width: 200}]}>{"Click the red button to go back to your schedule"}</Text>
                <TouchableOpacity style={[styles.footerButton, {marginTop: 35}]}onPress={() => navigation.navigate('Dashboard')}> 
                <Image style={styles.footerImage} source={dash} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PersonalInfo;
