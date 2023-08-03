import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  container: {
    height: '35%',
    width: '100%',
    borderRadius: s(10),
    backgroundColor: themeDefault.colors.lightGray,
    padding: s(10),
    marginTop: s(20)
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headding: {
    fontSize: s(15),
    fontWeight: '600'
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '60%',
    width: '100%',
  },
  key: {
    width: '30%',
    rowGap: s(8),
  },
  value: {
    rowGap: s(8),
  },
  text: {
    fontSize: s(12)
  },
  image: {
    width: s(35),
    height: s(55),
  },
});

const MatchInfoLeagueCard = () => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.headding}>About League</Text>
        <Image source={require('../../assets/images/cardGraphicsLeft.png')} style={style.image}/>
      </View>
      <View style={style.main}>
        <View style={style.key}>
          <Text style={style.text}>Name:</Text>
          <Text style={style.text}>Country:</Text>
          <Text style={style.text}>Season:</Text>
          <Text style={style.text}>Round:</Text>
        </View>
        <View style={style.value}>
          <Text style={style.text}>National Football League</Text>
          <Text style={style.text}>USA</Text>
          <Text style={style.text}>2022</Text>
          <Text style={style.text}>Regular Season - 44</Text>
        </View>
      </View>
    </View>
  );
};

export { MatchInfoLeagueCard };
