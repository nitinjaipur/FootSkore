import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

var x = 75;

const style = StyleSheet.create({
  main: {
    height: '10%',
    justifyContent: 'space-between'
  },
  text: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottom: {
    flexDirection: 'row',
  },
  left: {
    borderWidth: s(1),
    borderRadius: s(5),
    width: `${x}%`,
    height: s(4),
    borderColor: themeDefault.colors.green,
    backgroundColor: themeDefault.colors.green
  },
  right: {
    borderWidth: s(1),
    borderRadius: s(5),
    width: `${100-x}%`,
    height: s(4),
    borderColor: themeDefault.colors.lightGray,
    backgroundColor: themeDefault.colors.lightGray
  }
});

const SimpleProgressBar = () => {
  return(
    <View style={style.main}>
      <View style={style.text}>
        <Text>Overall result</Text>
        <Text>{x}%</Text>
      </View>
      <View style={style.bottom}>
        <View style={style.left}></View>
        <View style={style.right}></View>
      </View>
    </View>
  );
}

export { SimpleProgressBar };