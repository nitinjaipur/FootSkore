import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  main: {
    backgroundColor: themeDefault.colors.lightPink,
    height: '5%',
    width: '20%',
    alignSelf: 'center',
    borderRadius: s(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: s(10),
    marginBottom: s(10)
  },
  text: {
    color: themeDefault.colors.red
  }
});

const MatchLineupScoreCard = () => {
  return(
    <View style={style.main}>
      <Text style={style.text}>4-2-2-2</Text>
    </View>
  );
}

export { MatchLineupScoreCard };