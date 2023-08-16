import React, { useState } from 'react';
import { Image, Modal, View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { s } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { themeDefault } from '../theme/index';

const style = StyleSheet.create({
  profilePic: {
    height: s(110),
    width: s(110),
    borderRadius: s(55)
  },
  main: {
    flex: 1,
    backgroundColor: themeDefault.colors.blurBackground
  },
  modal: {
    backgroundColor: themeDefault.colors.white,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: s(250),
    height: s(165),
    marginTop: s(300),
    paddingTop: s(10),
    paddingBottom: s(10),
    borderRadius: s(20)
  },
  title: {
    fontSize: s(16),
    fontWeight: '600'
  },
  starContainer: {
    flexDirection: 'row',
    width: '100%',
    height: s(90),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: themeDefault.colors.darkGray
  },
  submit: {fontSize: s(18), color: themeDefault.colors.blue},
  optionView: {borderBottomWidth: 1, borderBottomColor: themeDefault.colors.steelGray}
});

const CustomDrawer = (props) => {
  const [showFriend, setShowFriend] = useState(false);
  const [showRateApp, setShowRateApp] = useState(false);
  const [star, setStar] = useState(0);
  return (
    <DrawerContentScrollView {...props}>
      <Image source={require('../assets/images/profilePic.png')} style={style.profilePic}/>
      <DrawerItem label="Profile" icon={() => <Icon name='person' size={s(20)} color={themeDefault.colors.darkGray} />} onPress={() => props.navigation.navigate('Profile')} style={style.optionView} />
      <DrawerItem label="Settings" icon={() => <Icon name='settings-sharp' size={s(20)} color={themeDefault.colors.darkGray} />} onPress={() => props.navigation.navigate('SettingsNavigator')} style={style.optionView} />
      <DrawerItem label="FAQ" icon={() => <Icon name='help-circle-outline' size={s(20)} color={themeDefault.colors.darkGray} />} onPress={() => props.navigation.navigate('FAQ')} style={style.optionView} />
      <DrawerItem label="PrivacyPolicy" icon={() => <Icon name='shield-outline' size={s(20)} color={themeDefault.colors.darkGray} />} onPress={() => props.navigation.navigate('PrivacyPolicy')} style={style.optionView} />
      <DrawerItem label="Share with Friends" icon={() => <Icon name='share-social-outline' size={s(20)} color={themeDefault.colors.darkGray} />} onPress={() => {setShowFriend(true);}} style={style.optionView} />
      <DrawerItem label="Contact Us" icon={() => <Icon name='call-outline' size={s(20)} color={themeDefault.colors.darkGray} />} onPress={() => props.navigation.navigate('ContactUs')} style={style.optionView} />
      <DrawerItem label="Rate This App" icon={() => <Icon name='star-outline' size={s(20)} color={themeDefault.colors.darkGray} />} onPress={() => {setShowRateApp(true);}} />

      <Modal visible={showRateApp} transparent={true}>
        <View style={style.main}>
          <View style={style.modal}>
            <Text style={style.title}>Rate this app</Text>
            <View style={style.starContainer}>
              <Icon name={star > 0 ? 'star' : 'star-outline'} color={star > 0 ? themeDefault.colors.golden : themeDefault.colors.black} size={s(25)} onPress={() => { star == 1 ? setStar(0) : setStar(1)}} />
              <Icon name={star > 1 ? 'star' : 'star-outline'} color={star > 1 ? themeDefault.colors.golden : themeDefault.colors.black} size={s(25)} onPress={() => { star == 2 ? setStar(0) : setStar(2)}} />
              <Icon name={star > 2 ? 'star' : 'star-outline'} color={star > 2 ? themeDefault.colors.golden : themeDefault.colors.black} size={s(25)} onPress={() => { star == 3 ? setStar(0) : setStar(3)}} />
              <Icon name={star > 3 ? 'star' : 'star-outline'} color={star > 3 ? themeDefault.colors.golden : themeDefault.colors.black} size={s(25)} onPress={() => { star == 4 ? setStar(0) : setStar(4)}} />
              <Icon name={star > 4 ? 'star' : 'star-outline'} color={star > 4 ? themeDefault.colors.golden : themeDefault.colors.black} size={s(25)} onPress={() => { star == 5 ? setStar(0) : setStar(5)}} />
            </View>
            <Text onPress={() => {setShowRateApp(false);}} style={style.submit}>Submit</Text>
          </View>
        </View>
      </Modal>

      <Modal visible={showFriend} transparent={true} animationType='slide'>
        <View style={style.main}>
          <View style={style.modal}>
            <Text style={style.title}>Share with friends</Text>
            <Text onPress={() => {setShowFriend(false);}} style={style.submit}>Submit</Text>
          </View>
        </View>
      </Modal>

    </DrawerContentScrollView>
  );
}

export { CustomDrawer };