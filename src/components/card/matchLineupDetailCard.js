import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  main: {
    backgroundColor: themeDefault.colors.lightGray,
    height: '62%',
    width: '100%',
    flexDirection: 'row'
  },
});

const MatchLineupDetailCard = () => {
  return (
    <View style={style.main}>
      {/* <View>
        <Text>Coach:</Text>
        <Text>Formation:</Text>
        <Text>Start Eleven:</Text>
        <Text>Substitutes:</Text>
      </View>
      <View>
        <Text>N / A</Text>
        <Text>4-2-3-1</Text>
        <View>
          <Text>Steve Clark</Text>
          <Text>Adalberto</Text>
          <Text>Griffin Dorsey</Text>
          <Text>Corey Baird</Text>
          <Text>Tim Parker</Text>
          <Text>Darwin Quintero</Text>
          <Text>Teenager</Text>
          <Text>Fafa Picault</Text>
          <Text>Adam</Text>
          <Text>Sebastian</Text>
          <Text>Matias Vera</Text>
        </View>
        <View>
          <Text>Steve Clark</Text>
          <Text>Adalberto</Text>
          <Text>Griffin Dorsey</Text>
          <Text>Corey Baird</Text>
          <Text>Tim Parker</Text>
          <Text>Darwin Quintero</Text>
          <Text>Teenager</Text>
          <Text>Fafa Picault</Text>
          <Text>Adam</Text>
          <Text>Sebastian</Text>
          <Text>Matias Vera</Text>
        </View>
      </View> */}
    </View>
  );
};

export {MatchLineupDetailCard};
