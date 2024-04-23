import AsyncStorage from '@react-native-async-storage/async-storage';

const setUserEmail = async (email) => {
  try {
    await AsyncStorage.setItem('userEmail', email);
  } catch (error) {
    console.error('Error setting user email:', error);
  }
};

const setCheckedStates = async (checkedStates) => {
  try {
    await AsyncStorage.setItem('checkedStates', checkedStates);
  } catch (error) {
    console.error('Error setting checked states:', error);
  }
};


const getUserEmail = async () => {
  return userEmailString = await AsyncStorage.getItem('userEmail');
};


export { setUserEmail, getUserEmail };
