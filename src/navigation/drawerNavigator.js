import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsNavigator } from './index';
import { Profile, PrivacyPolicy, ContactUs, FAQ } from '../screens/index';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name='FAQ' component={FAQ} />
        <Drawer.Screen name='Profile' component={Profile} />
        <Drawer.Screen name='SettingsNavigator' component={SettingsNavigator} />
        <Drawer.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
        <Drawer.Screen name='ContactUs' component={ContactUs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export { DrawerNavigator };