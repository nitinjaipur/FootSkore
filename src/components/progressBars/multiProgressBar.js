import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {themeDefault} from '../../theme/index';

var x = 70;

const style = StyleSheet.create({
  main: {
    height: '8%',
    justifyContent: 'space-between',
  },
  text: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    backgroundColor: themeDefault.colors.green,
  },
  right: {
    borderWidth: s(1),
    borderRadius: s(5),
    width: `${100 - x}%`,
    height: s(4),
    borderColor: themeDefault.colors.blue,
    backgroundColor: themeDefault.colors.blue
  },
  values: {
    fontWeight: '600',
    fontSize: s(13)
  },
  title: {
    color: themeDefault.colors.darkGray
  }
});

const MultiProgressBar = () => {
  return (
    <View style={style.main}>
      <View style={style.text}>
        <Text style={style.values}>{x}%</Text>
        <Text style={style.title}>Ball Possesion</Text>
        <Text style={style.values}>{100 - x}%</Text>
      </View>
      {x === 0 ? (
        <View style={style.bottom}>
          <View style={style.right}></View>
        </View>
      ) : x === 100 ? (
        <View style={style.bottom}>
          <View style={style.left}></View>
        </View>
      ) : (
        <View style={style.bottom}>
          <View style={[style.left, {marginRight: s(4)}]}></View>
          <View style={[style.right, {marginLeft: s(4)}]}></View>
        </View>
      )}
    </View>
  );
};

export {MultiProgressBar};