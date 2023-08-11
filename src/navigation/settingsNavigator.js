import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Settings, NotificationSettings, ChangePassword } from '../screens/index';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return(
      <Stack.Navigator initialRouteName='Settings' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen name='NotificationSettings' component={NotificationSettings} />
        <Stack.Screen name='ChangePassword' component={ChangePassword} />
      </Stack.Navigator>
  );
}

export { SettingsNavigator };