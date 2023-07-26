import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Fixture, GlobalSearch } from '../screens/index';

const Stack = createNativeStackNavigator();

const HomePageNavigator = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GlobalSearch' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Fixture' component={Fixture} />
        <Stack.Screen name='GlobalSearch' component={GlobalSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { HomePageNavigator };