import React, {useState} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {themeDefault} from '../../theme/index';
import Icon from 'react-native-vector-icons/Ionicons';
const MARGIN = getStatusBarHeight();

const style = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: MARGIN
  },
  top: {
    height: s(70),
    alignItems: 'center',
    justifyContent: 'center'
  },
  middle: {
    flex: 1,
    paddingLeft: s(25),
    paddingRight: s(25)
  },
  bottom: {
    flex: 2
  },
  header: {},
  imageContainer: {
    backgroundColor: themeDefault.colors.red,
    height: s(170),
    borderRadius: s(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageText: {
    marginTop: s(10),
    color: themeDefault.colors.white,
    fontSize: s(13),
    fontWeight: '800'
  },
  contact: {
    alignItems: 'center',
    marginTop: s(50),
    height: s(70),
    justifyContent: 'space-between'
  },
  contactText: {
    fontSize: s(15),
    fontWeight: '600'
  }
});

const ContactUs = ({navigation}) => {
  return (
    <View style={style.main}>
      <View style={style.top}>
        <Text style={style.header}>Contact Us</Text>
      </View>
      <View style={style.middle}>
        <View style={style.imageContainer}>
          <Image source={require('../../assets/images/mail.png')} />
          <Text style={style.imageText}>Feel Free Contact Us</Text>
        </View>
      </View>
      <View style={style.bottom}>
        <View style={style.contact}>
          <Icon name="mail-outline" size={s(38)} color={themeDefault.colors.mailBlue} />
          <Text style={[style.contactText, {color: themeDefault.colors.ink}]}>info@xyzmail.com</Text>
        </View>
        <View style={style.contact}>
          <Icon name="phone-portrait-sharp" size={s(38)} color={themeDefault.colors.saffron} />
          <Text style={style.contactText}>+84-123-456-7890</Text>
        </View>
      </View>
    </View>
  );
};

export { ContactUs };
