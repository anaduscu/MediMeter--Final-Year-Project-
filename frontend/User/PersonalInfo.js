import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../frontend/styles.js';
import logo from '../../frontend/assets/logo.png';
import { use } from 'ast-types';

const PersonalInfo = () => {
    const [personalInfo, setPersonalInfo] = useState('');

    const navigation = useNavigation();

    const fetchPersonalInfo = async () => {
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
                    email: 'ana@gmail.com'
                })
            });
            
            if (!response.ok) {
                throw new Error('Failed to fetch personal info');
            } else {

            const data = await response.json();
            console.log('Personal info:', data);
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
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.heading}>Your Personal Information</Text>
            <View style={styles.personalInfoItem}>
                <Text style={styles.personalInfoText}>Name: {personalInfo.firstname}</Text>
                <Text style={styles.personalInfoText}>Surname: {personalInfo.lastname}</Text>
                <Text style={styles.personalInfoText}>Email: {personalInfo.email}</Text>
                <Text style={styles.personalInfoText}>Gender: {personalInfo.gender}</Text>
                <View>
                    <Text style={styles.personalInfoText}>Contact details of trusted person:</Text>
                    <Text style={styles.personalInfoText}>Email: {personalInfo.caregiver}</Text>
                    <Text style={styles.personalInfoText}>Telephone: {personalInfo.phone_number}</Text>
                </View>
                </View>
            <View style={styles.footer}>
            <Text style={styles.footerInstr}>Click on each button to see:</Text>
            <View style={styles.footerLabels}>
                  <Text style={styles.footerText}>Your schedule </Text>
                  <Text style={styles.footerText}>Your list of medications</Text>
                  <Text style={styles.footerText}>How the app works</Text>
            </View>
            <View style={styles.footerButtons}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Dashboard')}>
                    <Image source={require('../../frontend/assets/dash.png')} style={styles.footerImage}></Image>
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

export default PersonalInfo;
