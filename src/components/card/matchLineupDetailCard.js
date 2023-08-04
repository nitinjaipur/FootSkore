import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  main: {
    backgroundColor: themeDefault.colors.lightGray,
    height: '62%',
    width: '100%',
    paddingLeft: s(10),
    paddingRight: s(10),
    justifyContent: 'center',
  },
  dataContainer: {
    flexDirection: 'row',
    marginBottom: s(8),
  },
  key: {
    width: '30%'
  },
  Value: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    lineHeight: s(20)
  }
});

const MatchLineupDetailCard = () => {
  return (
    <View style={style.main}>
      <View style={style.dataContainer}>
        <View style={style.key}>
          <Text style={style.text}>Coach:</Text>
        </View>
        <View>
          <Text style={style.text}>N / A</Text>
        </View>
      </View>
      <View style={style.dataContainer}>
        <View style={style.key}>
          <Text style={style.text}>Formation:</Text>
        </View>
        <View>
          <Text style={style.text}>4-2-3-1</Text>
        </View>
      </View>
      <View style={style.dataContainer}>
        <View style={style.key}>
          <Text style={style.text}>Start Eleven:</Text>
        </View>
        <View style={style.Value}>
          <View>
            <Text style={style.text}>Steve Clark</Text>
            <Text style={style.text}>Griffin Dorsey</Text>
            <Text style={style.text}>Tim Parker</Text>
            <Text style={style.text}>Teenager</Text>
            <Text style={style.text}>Adam</Text>
            <Text style={style.text}>Matias Vera</Text>
          </View>
          <View>
            <Text style={style.text}>Adalberto</Text>
            <Text style={style.text}>Corey Baird</Text>
            <Text style={style.text}>Darwin Quintero</Text>
            <Text style={style.text}>Fafa Picault</Text>
            <Text style={style.text}>Sebastian</Text>
          </View>
        </View>
      </View>
      <View style={style.dataContainer}>
        <View style={style.key}>
          <Text style={style.text}>Substitutes:</Text>
        </View>
        <View style={style.Value}>
          <View>
            <Text style={style.text}>Steve Clark</Text>
            <Text style={style.text}>Griffin Dorsey</Text>
            <Text style={style.text}>Tim Parker</Text>
            <Text style={style.text}>Teenager</Text>
            <Text style={style.text}>Adam</Text>
            <Text style={style.text}>Matias Vera</Text>
          </View>
          <View>
            <Text style={style.text}>Adalberto</Text>
            <Text style={style.text}>Corey Baird</Text>
            <Text style={style.text}>Darwin Quintero</Text>
            <Text style={style.text}>Fafa Picault</Text>
            <Text style={style.text}>Sebastian</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export {MatchLineupDetailCard};
