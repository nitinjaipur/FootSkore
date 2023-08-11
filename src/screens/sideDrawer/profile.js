import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { View, Text, FlatList, StyleSheet, Image, StatusBar} from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { InfoInput, SolidButton } from '../../components/index';
import { themeDefault } from '../../theme/index';
const MARGIN = getStatusBarHeight()

const style = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: MARGIN
  },
  top: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  middle: {
    flex: 2,
    paddingLeft: s(30),
    paddingRight: s(30),
    justifyContent: 'space-evenly'
  },
  bottom: {
    flex: 1
  }
});

const Profile = () => {
  return(
    <View style={style.main}>
      <View style={style.top}>
        <Text>PROFILE</Text>
        <Image source={require('../../assets/images/profilePic.png')} style={{ height: s(110), width: s(110), borderRadius: s(55)}}/>
      </View>
      <View style={style.middle}>
        <InfoInput title='Your Name' />
        <InfoInput title='DOB' />
        <InfoInput title='Time Zone' />
        <InfoInput title='Email' />
      </View>
      <View style={style.bottom}>
        <SolidButton backgroundColor={themeDefault.colors.red} textColor={themeDefault.colors.white} title='Save' />
      </View>
    </View>
  );
}

export { Profile };