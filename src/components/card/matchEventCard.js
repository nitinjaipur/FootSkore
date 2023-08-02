import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';

const style = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: '100%',
    height: '9%',
    borderRadius: s(10),
    alignItems: 'center',
    backgroundColor: '#EBEBEB'
  },
  textLeft: {
    marginLeft: s(15)
  },
  image: {
    marginLeft: s(25)
  },
  textRight: {
    marginLeft: s(25)
  }
});


const MatchEventCard = () => {
  return(
    <View style={style.main}>
      <Text style={style.textLeft}>7'</Text>
      <Image source={require('../../assets/images/matchEventFlag.png')} style={style.image} />
      <Text style={style.textRight}>Yellow Card- G. Dorsey</Text>
    </View>
  );
}

export { MatchEventCard };