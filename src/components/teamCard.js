import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { s, vs, ms, mvs } from 'react-native-size-matters';

const style = StyleSheet.create({
  bodyHost: {
    height: s(111),
    width: '85%',
    borderRadius: 10,
    backgroundColor: '#EBEBEB',
    marginTop: s(20),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bodyHostTitleText: {
    fontSize: s(20),
    fontWeight: '500'
  },
});

const TeamCard = () => {
  return(
    <View style={style.bodyHost}>
      <Image source={require('../assets/images/cardGraphicsLeft.png')} style={{height: s(50), width: s(50)}} />
      <Text style={style.bodyHostTitleText}>Manchester United</Text>
    </View>
    );
}

export { TeamCard };