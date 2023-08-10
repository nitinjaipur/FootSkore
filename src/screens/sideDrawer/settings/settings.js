import React, { useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { View, Text, StyleSheet, Switch, Pressable} from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { InfoInput, SolidButton } from '../../../components/index';
import Icon from 'react-native-vector-icons/Ionicons';
import { themeDefault } from '../../../theme/index';

const MARGIN = getStatusBarHeight()

const style = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: MARGIN
  },
  top: {
    // flex: 0.5,
    height: s(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 2,
    paddingLeft: s(30),
    paddingRight: s(30),
    justifyContent: 'space-evenly',
  },
  bottom: {
    flex: 6,
    alignItems: 'center',
    paddingTop: s(30)
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: themeDefault.colors.darkGray,
    height: s(40)
  },
  text: {
    fontSize: s(13),
    fontWeight: '600'
  },
  footerText: {
    color: themeDefault.colors.red,
    fontSize: s(13),
    fontWeight: '600'
  }
});


const Settings = ({navigation}) => {
  const [enable, setEnable] = useState(false);
  return(
    <View style={style.main}>
      <View style={style.top}>
        <Text>SETTINGS</Text>
      </View> 
      <View style={style.middle}>
        <Pressable onPress={() => {navigation.navigate('NotificationSettings')}}>
          <View style={style.options} >
            <Text style={style.text}>Notifications</Text>
            <Icon name='chevron-forward-outline' size={s(10)} />
          </View>
        </Pressable>
        <Pressable>
          <View style={style.options}>
            <Text style={style.text}>Change Password</Text>
            <Icon name='chevron-forward-outline' size={s(10)} />
          </View>
        </Pressable>
        <View style={style.options}>
          <Text style={style.text}>Dark Mode</Text>
          <Switch
            value={enable}
            onValueChange={() => {setEnable(!enable);}}
            trackColor={{false: themeDefault.colors.darkGray, true: themeDefault.colors.red}}
            style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }], width: s(25) }}
          />
        </View>
      </View>

      <View style={style.bottom}>
        <Text style={style.footerText}>Log out</Text>
      </View>

    </View>
  );
}

export { Settings };