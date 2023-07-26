import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome1, Welcome2, LogIn, ForgotPassword, VerificationCode, ResetPassword, PasswordSuccessfull, SignUp } from '../screens/index';

const Stack = createNativeStackNavigator();

const OnBoardingNavigator = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome1' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Welcome1' component={Welcome1} />
        <Stack.Screen name='Welcome2' component={Welcome2} />
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