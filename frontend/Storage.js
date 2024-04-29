import AsyncStorage from '@react-native-async-storage/async-storage';

//GLOBAL VARIABLES FOR SESSION STORAGE

const setUserEmail = async (email) => {
  try {
    await AsyncStorage.setItem('userEmail', email);
  } catch (error) {
    console.error('Error setting user email:', error);
  }
};

const setCaregiverEmail = async (email) => {
  try {
    await AsyncStorage.setItem('caregiverEmail', email);
  } catch (error) {
    console.error('Error setting caregiver email:', error);
  }
};

const setCaregiverPhone = async (phone) => {
  try {
    await AsyncStorage.setItem('caregiverPhone', phone);
  } catch (error) {
    console.error('Error setting caregiver phone:', error);
  }
};

const setPillboxUsed = async (pillboxUsed) => {
  try {
    await AsyncStorage.setItem('pillboxUsed', pillboxUsed);
  } catch (error) {
    console.error('Error setting pillbox used:', error);
  }
};

const setUserName = async (name) => {
  try {
    await AsyncStorage.setItem('userName', name);
  } catch (error) {
    console.error('Error setting user name:', error);
  }
};

const setBringsMedication = async (bringsMedication) => {
  try {
    await AsyncStorage.setItem('bringsMedication', bringsMedication);
  } catch (error) {
    console.error('Error setting brings medication:', error);
  }
};

const getUserEmail = async () => {
  return userEmailString = await AsyncStorage.getItem('userEmail');
};


export { setUserEmail, getUserEmail , setCaregiverEmail, setCaregiverPhone, setPillboxUsed, setUserName, setBringsMedication};
