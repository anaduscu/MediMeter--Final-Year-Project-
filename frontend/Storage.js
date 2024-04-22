import AsyncStorage from '@react-native-async-storage/async-storage';

const setUserEmail = async (email) => {
  try {
    await AsyncStorage.setItem('userEmail', email);
  } catch (error) {
    console.error('Error setting user email:', error);
  }
};


const getUserEmail = async () => {
  return userEmailString = await AsyncStorage.getItem('userEmail');
};


export { setUserEmail, getUserEmail };
