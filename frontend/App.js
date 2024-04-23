// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../frontend/LandingPage.js';
import Decision from '../frontend/Decision';
import SignUp from '../frontend/Guest/SignUp';
import Welcome1 from '../frontend/Guest/Welcome1';
import Step2 from '../frontend/Guest/Step2';
import LogIn from '../frontend/User/LogIn';
import Dashboard from '../frontend/User/Dashboard';
import Questions1 from '../frontend/Guest/Questions1';
import Questions2 from '../frontend/Guest/Questions2';
import MedList from './User/MedList.js';
import AddMedication from './User/AddMedication.js';
import PersonalInfo from './User/PersonalInfo.js';
import AppInfo from './User/AppInfo.js';
import notifs from '../frontend/notifs.js';
import SMS from '../frontend/SMS.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Decision" component={Decision} />
        <Stack.Screen name="Welcome1" component={Welcome1} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Step2" component={Step2} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Questions1" component={Questions1} />
        <Stack.Screen name="Questions2" component={Questions2} />
        <Stack.Screen name="MedList" component={MedList} />
        <Stack.Screen name="AddMedication" component={AddMedication} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="AppInfo" component={AppInfo} />
        <Stack.Screen name="Notifs" component={notifs} />
        <Stack.Screen name="SMS" component={SMS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
