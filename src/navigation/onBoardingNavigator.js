import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetStarted, Welcome, LogIn, ForgotPassword, VerificationCode, ResetPassword, PasswordSuccessfull, SignUp } from '../screens/index';

const Stack = createNativeStackNavigator();

const OnBoardingNavigator = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetStarted' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='GetStarted' component={GetStarted} />
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='LogIn' component={LogIn} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='VerificationCode' component={VerificationCode} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
        <Stack.Screen name='PasswordSuccessfull' component={PasswordSuccessfull} />
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { OnBoardingNavigator };