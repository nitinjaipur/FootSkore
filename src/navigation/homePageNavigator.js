import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Fixture } from '../screens/index';

const Stack = createNativeStackNavigator();

const HomePageNavigator = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Fixture' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Fixture' component={Fixture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { HomePageNavigator };