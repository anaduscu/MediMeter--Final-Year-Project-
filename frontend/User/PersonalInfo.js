import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../../frontend/styles.js';
import { use } from 'ast-types';

const PersonalInfo = () => {
    const [personalInfo, setPersonalInfo] = useState('');

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
            <Text style={styles.heading}>Personal Information</Text>
            <View style={styles.personalInfoItem}>
                <Text style={styles.personalInfoText}>Name: {personalInfo.firstname}</Text>
                <Text style={styles.personalInfoText}>Surname: {personalInfo.lastname}</Text>
                <Text style={styles.personalInfoText}>Email: {personalInfo.email}</Text>
                <Text style={styles.personalInfoText}>Caregiver email: {personalInfo.caregiver}</Text>
                <Text style={styles.personalInfoText}>Caregiver telephone: {personalInfo.phone_number}</Text>
                </View>
        </View>
    );
};

export default PersonalInfo;
