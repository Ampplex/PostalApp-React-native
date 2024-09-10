import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding1 from './screens/Onboarding1';
import Onboarding2 from './screens/Onboarding2';
import Onboarding3 from './screens/Onboarding3';
import {
  createStackNavigator
} from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding1" component={Onboarding1} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;