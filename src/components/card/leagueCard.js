import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  container: {
    height: s(58),
    width: '85%',
    borderRadius: 10,
    backgroundColor: themeDefault.colors.lightGray,
    marginTop: s(20),
    alignItems: 'center',
    flexDirection: 'row'
  },
  teamName: {
    margin: s(2)
  },
  country: {
    margin: s(2),
    color: themeDefault.colors.darkGray,
  }
});

const LeagueCard = () => {
  return(
    <View style={style.container}>
      <Image source={require('../../assets/images/cardGraphicsLeft.png')} />
      <View style={{marginLeft: s(10)}}>
        <Text style={style.teamName}>Manchester United</Text>
        <Text style={style.country}>England</Text>
      </View>
    </View>
    );
}

export { LeagueCard };