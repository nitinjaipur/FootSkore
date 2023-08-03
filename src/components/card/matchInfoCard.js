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
    padding: s(10),
    flexDirection: 'row',
    alignItems: 'center'
  },
  key: {
    width: '30%',
    rowGap: s(10)
  },
  value: {
    rowGap: s(10)
  },
  text: {
    fontSize: s(12)
  },
});

const MatchInfoCard = () => {
  return (
    <View style={style.main}>
      <View style={style.key}>
        <Text style={style.text}>Referee:</Text>
        <Text style={style.text}>Venue:</Text>
        <Text style={style.text}>City:</Text>
      </View>
      <View style={style.value}>
        <Text style={style.text}>Kevin Stott, USA</Text>
        <Text style={style.text}>Banc of California Stadium</Text>
        <Text style={style.text}>Los Angeles, California</Text>
      </View>
    </View>
  );
};

export { MatchInfoCard };