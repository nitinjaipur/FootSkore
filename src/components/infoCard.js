import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';

const style = StyleSheet.create({
  main: {
    height: '20%',
    width: '100%',
    borderRadius: s(10),
    backgroundColor: '#EBEBEB',
    padding: s(10)
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  key: {
    width: '30%',
  },
  text: {
    color: '#808797',
  },
});

const InfoCard = () => {
  return (
    <View style={style.main}>
      <View style={style.row}>
        <View style={style.key}>
          <Text style={style.text}>Country:</Text>
        </View>
        <View>
          <Text style={style.text}>USA</Text>
        </View>
      </View>
      <View style={style.row}>
        <View style={style.key}>
          <Text style={style.text}>Venue:</Text>
        </View>
        <View>
          <Text style={style.text}>Soldier Field</Text>
        </View>
      </View>
      <View style={style.row}>
        <View style={style.key}>
          <Text style={style.text}>Address:</Text>
        </View>
        <View>
          <Text style={style.text}>1410 South Museum Campus Drive</Text>
        </View>
      </View>
      <View style={style.row}>
        <View style={style.key}>
          <Text style={style.text}>Capacity:</Text>
        </View>
        <View>
          <Text style={style.text}>62493</Text>
        </View>
      </View>
      <View style={style.row}>
        <View style={style.key}>
          <Text style={style.text}>Founded:</Text>
        </View>
        <View>
          <Text style={style.text}>N / A</Text>
        </View>
      </View>
    </View>
  );
};

export { InfoCard };