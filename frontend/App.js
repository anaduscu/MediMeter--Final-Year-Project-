// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../frontend/LandingPage.js';
import Decision from '../frontend/Decision';
import SignUp from '../frontend/Guest/SignUp';
import Welcome1 from '../frontend/Guest/Welcome1';
import Step2 from '../frontend/Guest/Step2';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
