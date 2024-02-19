// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './pages/LandingPage';
import Decision from './pages/Decision';
import SignUp from './pages/SignUp';
import Welcome1 from './pages/Welcome1';

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
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Welcome1" component={Welcome1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
