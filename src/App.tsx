import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { HomePageNavigator, OnBoardingNavigator, DrawerNavigator } from './navigation/index';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import RNBootSplash from "react-native-bootsplash";

const myStyle = StyleSheet.create({
  Div: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

function App(): JSX.Element {

  useEffect(() => {
    setTimeout(RNBootSplash.hide, 3000)
  }, [])

  return (
    <>
      <DrawerNavigator/>
    </>
  );
}

export default App;
