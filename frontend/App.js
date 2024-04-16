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

const Stack = createStackNavigator();
let currentUser = null;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Questions1"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
