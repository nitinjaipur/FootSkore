import React, { useEffect } from 'react';
import { OnBoardingNavigator } from './navigation/onBoardingNavigator';
import { HomePageNavigator } from './navigation/homePageNavigator';
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
      <OnBoardingNavigator/>
    </>
  );
}

export default App;
