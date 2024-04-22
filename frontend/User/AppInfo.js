import React from 'react';
import { View, Text, ScrollView,Image } from 'react-native';
import styles from '../../frontend/styles.js';
import logo from '../../frontend/assets/logo.png';

const AppInfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>   
                <Image style={styles.logo} source={logo} />
                <Text style={styles.heading}>How the App Works</Text>
                <Text style={styles.instructions}>
                    Welcome to MediMeter, your personal medication management app designed to simplify your daily medication routine. Here's a quick guide on how to use the app effectively:
                </Text>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.listItem}>{"1. Registration:\n Begin by registering an account with your email address and creating a secure password. Once registered, you can access your personalized dashboard to manage your medications"}.</Text>
                    <Text style={styles.listItem}>{"2. Adding Medications: \nTo add a new medication, simply navigate to the 'Medication List' section and click on the 'Add Medication' button. Enter the medication details, including its name, dosage instructions, frequency, and any dietary restrictions."}</Text>
                    <Text style={styles.listItem}>{"3. Daily Schedule: \nYour personalized daily schedule displays all your medications categorized by the time of day – morning, afternoon, and evening. Each medication is represented by a checkbox, allowing you to easily track your dosage intake."}</Text>
                    <Text style={styles.listItem}>{"4. Refill Reminders: \nNever run out of medication again! Set refill reminders for each medication to receive timely notifications when it's time to replenish your stock."}</Text>
                    <Text style={styles.listItem}>{"5. Caregiver Support: \nFor added peace of mind, you can designate a caregiver who will receive notifications about your medication schedule and stock levels. They can also assist with medication refills if needed"}.</Text>
                    <Text style={styles.listItem}>{"6. Personal Information: \nKeep your personal information up to date in the 'Personal Info' section. Here, you can view and edit your name, email address, gender, and contact details"}.</Text>
                    <Text style={styles.listItem}>{"7. Exploring Features: \nTake some time to explore other features of the app, such as viewing your medication history, tracking missed doses, and accessing educational resources about different medications."}</Text>
                    <Text style={styles.listItem}>{"8. Stay Informed:\n Receive important notifications about your medication regimen, upcoming appointments, and other relevant updates directly within the app. Stay informed and in control of your health journey."}</Text>
                    <Text style={styles.instructions}>{"We hope this guide helps you navigate through the app seamlessly. If you have any questions or encounter any issues, feel free to reach out to our support team for assistance. Thank you for choosing MediMeter to manage your medication, and we wish you good health and well-being!"}</Text>
                </ScrollView>
            </View>
        </View>
    );
};

export default AppInfo;
