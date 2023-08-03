import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  main: {
    height: '20%',
    width: '100%',
    borderRadius: s(10),
    backgroundColor: themeDefault.colors.lightGray,
    padding: s(15),
    flexDirection: 'row',
    alignItems: 'center'
  },
  key: {
    width: '30%',
    rowGap: s(6)
  },
  value: {
    rowGap: s(6)
  },
  text: {
    color: themeDefault.colors.darkGray,
  },
});

const InfoCard = () => {
  return (
    <View style={style.main}>
      <View style={style.key}>
        <Text style={style.text}>Country:</Text>
        <Text style={style.text}>Venue:</Text>
        <Text style={style.text}>Address:</Text>
        <Text style={style.text}>Capacity:</Text>
        <Text style={style.text}>Founded:</Text>
      </View>
      <View style={style.value}>
        <Text style={style.text}>USA</Text>
        <Text style={style.text}>Soldier Field</Text>
        <Text style={style.text}>1410 South Museum Campus Drive</Text>
        <Text style={style.text}>62493</Text>
        <Text style={style.text}>N / A</Text>
      </View>
    </View>
  );
};

export { InfoCard };