import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  main: {
    height: s(135),
    width: '85%',
    borderRadius: 10,
    backgroundColor: themeDefault.colors.lightGray,
    marginTop: s(20),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  left: {
    width: '25%',
    height: '55%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: s(10)
  },
  centre: {
    width: '35%',
    height: '65%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  right: {
    width: '25%',
    height: '55%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: s(10)
  },
  image: {
    width: s(35),
    height: s(55)
  },
  centreHeading: {
    fontSize: s(11)
  },
  centreData: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '65%'
  },
  centreDataText: {
    fontSize: s(11),
    color: themeDefault.colors.darkGray,
    lineHeight: s(15)
  },
  score: {
    fontWeight: '700',
    lineHeight: s(30)
  }
});


const MatchHeaderCard = () => {
  return(
    <View style={style.main}>
      <View style={style.left}>
        <Image source={require('../../assets/images/cardGraphicsLeft.png')} style={style.image} />
        <Text>Suva</Text>
      </View> 
      <View style={style.centre}>
        <Text style={style.centreHeading}>Old Trafford</Text>
        <View style={style.centreData}>
          <Text style={style.centreDataText}>23:30</Text>
          <Text style={style.centreDataText}>Tue . Jan 3</Text>
          <Text style={style.score}>3:1</Text>
        </View>
      </View>
      <View style={style.right}>
        <Image source={require('../../assets/images/cardGraphicsLeft.png')} style={style.image} />
        <Text>Reva</Text>
      </View>
    </View>
  );
}

export { MatchHeaderCard };