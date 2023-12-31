import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '85%',
    height: '12%',
    alignSelf: 'center'
  },
  teamLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: '65%',
    borderRadius: s(50),
    backgroundColor: themeDefault.colors.red
  },
  teamRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: '65%',
    borderRadius: s(50),
    backgroundColor: themeDefault.colors.lightGray
  },
  leftText: {
    fontSize: s(18),
    color: themeDefault.colors.white,
    fontWeight: '500'
  },
  rightText: {
    fontSize: s(18),
    fontWeight: '500'
  }
});

const MatchTeamCard = () => {
  return(
    <View style={style.main}>
      <View style={style.teamLeft}>
        <Image source={require('../../assets/images/cardGraphicsLeft.png')} />
        <Text style={style.leftText}>Suva</Text>
      </View>
      <View style={style.teamRight}>
        <Image source={require('../../assets/images/cardGraphicsLeft.png')} />
        <Text style={style.rightText}>Reva</Text>
      </View>
    </View>
  );
}

export { MatchTeamCard };