import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';

const style = StyleSheet.create({
  main: {
    flexDirection: 'row',
    height: '13%',
    width: '100%',
    marginTop: s(20),
    borderRadius: s(10),
    padding: s(10),
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconContainer: {
    width: s(40),
    height: s(40),
    backgroundColor: '#C2C8CF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(20)
  },
  textContainer: {
    justifyContent: 'space-evenly',
    height: '100%'
  },
  empty: {
    width: '15%',
    height: '100%'
  },
  name: {
    fontWeight: 'bold',
    fontSize: s(12)
  },
  role: {
    color: '#808797'
  },
  age: {
    fontSize: s(13)
  }
});

const PlayerCard = () => {
  return (
    <View style={style.main}>
      <View style={style.iconContainer}>
        <Icon name="person-outline" size={s(21)} color='#808797' />
      </View>
      <View style={style.textContainer}>
        <Text style={style.name}>T. Romereo</Text>
        <Text style={style.role}>Position</Text>
      </View>
      <View style={style.empty} />
      <Text style={style.age}>
        <Text>Age: </Text>
        <Text>22</Text>
      </Text>
      <Icon name="checkmark-circle" size={s(21)} color='#1F8E4B' />
    </View>
  );
};

export { PlayerCard };
