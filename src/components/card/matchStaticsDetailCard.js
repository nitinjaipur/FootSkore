import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  main: {
    height: '90%',
    width: '100%',
    borderRadius: s(10),
    backgroundColor: themeDefault.colors.lightGray,
    padding: s(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  key: {
    width: '40%',
    rowGap: s(14)
  },
  value: {
    rowGap: s(10),
    flex: 1,
    alignItems: 'flex-end',
    rowGap: s(14)
  },
  text: {
    fontSize: s(12)
  },
});

const MatchStaticsDetailCard = () => {
  return (
    <View style={style.main}>
      <View style={style.key}>
        <Text style={style.text}>Shots on Goal</Text>
        <Text style={style.text}>Shots off Goal</Text>
        <Text style={style.text}>Shots outsidebox</Text>
        <Text style={style.text}>Total Shots</Text>
        <Text style={style.text}>Total Shots</Text>
        <Text style={style.text}>Blocked Shots</Text>
        <Text style={style.text}>Fouls</Text>
        <Text style={style.text}>Corner Kicks</Text>
        <Text style={style.text}>Offside</Text>
        <Text style={style.text}>Ball Possession</Text>
        <Text style={style.text}>Yellow Cards</Text>
        <Text style={style.text}>Red Card</Text>
        <Text style={style.text}>Golkeeper Saves</Text>
        <Text style={style.text}>Total passes</Text>
        <Text style={style.text}>Passes accurate</Text>
        <Text style={style.text}>Passes %</Text>
      </View>
      <View style={style.value}>
        <Text style={style.text}>0</Text>
        <Text style={style.text}>5</Text>
        <Text style={style.text}>1</Text>
        <Text style={style.text}>0</Text>
        <Text style={style.text}>0</Text>
        <Text style={style.text}>0</Text>
        <Text style={style.text}>0</Text>
        <Text style={style.text}>5</Text>
        <Text style={style.text}>1</Text>
        <Text style={style.text}>0</Text>
        <Text style={style.text}>0</Text>
        <Text style={style.text}>0</Text>
        <Text style={style.text}>1</Text>
        <Text style={style.text}>0</Text>
        <Text style={style.text}>0</Text>
        <Text style={style.text}>0</Text>
      </View>
    </View>
  );
};

export { MatchStaticsDetailCard };