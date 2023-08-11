import React, { useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { View, Text, StyleSheet, Switch, Pressable} from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { themeDefault } from '../../../theme/index';
import { PasswordInput, SolidButton } from '../../../components/index';
const MARGIN = getStatusBarHeight()

const style = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: MARGIN
  },
  top: {
    height: s(70),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: s(30)
  },
  middle: {
    height: s(220),
    paddingLeft: s(30),
    paddingRight: s(30),
    justifyContent: 'space-evenly',
  },
  bottom: {
    flex: 1
  },
  header: {
    marginLeft: s(60)
  }
});

const ChangePassword = ({navigation}) => {
  return(
    <View style={style.main}>
      <View style={style.top}>
        <Pressable onPress={() => {navigation.goBack()}}>
          <Icon name="arrow-back-outline" size={s(21)} color={themeDefault.colors.black} />
        </Pressable>
        <Text style={style.header}>CHANGE PASSWORD</Text>
      </View>    
      <View style={style.middle}>
        <PasswordInput title="Current Password" editable={true} />
        <PasswordInput title="New Password" editable={true} />
        <PasswordInput title="Confirm Password" editable={true} />
      </View>
      <View style={style.bottom}>
        <SolidButton backgroundColor={themeDefault.colors.red} textColor={themeDefault.colors.white} title='Save' />
      </View>
    </View>
  );
}

export { ChangePassword };