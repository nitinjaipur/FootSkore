import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';

const style = StyleSheet.create({
  container: {
    height: '9%',
    width: '85%',
    borderRadius: 10,
    backgroundColor: '#EBEBEB',
    marginTop: s(20),
    alignItems: 'center',
    flexDirection: 'row'
  },
  teamName: {
    margin: s(2)
  },
  country: {
    margin: s(2),
    color: '#808797',
  },
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