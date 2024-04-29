import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../frontend/styles.js';

const TodayDate = () => {
  // Create a new Date object 
  const currentDate = new Date();

  // Get individual date components
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // January is 0, so add 1
  const day = currentDate.getDate();

  const formattedMonth = month < 10 ? `0${month}` : month; // Add a leading zero if needed
  const formattedDate = `${day}-${formattedMonth}-${year}`; // Format the date as DD-MM-YYYY

  return (
    <View>
      <Text style={styles.date}>{"Today's date: \n" + formattedDate}</Text>
    </View>
  );
}

export default TodayDate;
