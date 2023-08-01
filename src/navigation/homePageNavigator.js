import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Fixture, GlobalSearch, TeamDetailInfo } from '../screens/index';

const Stack = createNativeStackNavigator();

const HomePageNavigator = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TeamDetailInfo' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Fixture' component={Fixture} />
        <Stack.Screen name='GlobalSearch' component={GlobalSearch} />
        <Stack.Screen name='TeamDetailInfo' component={TeamDetailInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { HomePageNavigator };