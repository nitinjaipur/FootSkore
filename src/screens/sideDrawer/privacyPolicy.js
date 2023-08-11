import React, {useState} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {View, Text, StyleSheet, Switch, Pressable} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {themeDefault} from '../../theme/index';
const MARGIN = getStatusBarHeight();

const style = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: MARGIN,
  },
  top: {
    height: s(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 1,
    paddingLeft: s(30),
    paddingRight: s(30),
  },
  header: {},
  paragraph: {
    marginTop: s(10)
  }
});

const PrivacyPolicy = ({navigation}) => {
  return (
    <View style={style.main}>
      <View style={style.top}>
        <Text style={style.header}>Privacy Policy</Text>
      </View>
      <View style={style.middle}>
        <View>
          <Text>Privacy</Text>
          <Text>Our Privacy Policy</Text>
        </View>
        <Text style={style.paragraph}>
          At Website Name, accessible at Website.com, one of our main priorities
          is the privacy of our visitors. This Privacy Policy document contains
          types of information that is collected and recorded by Website Name
          and how we use it.
        </Text>
        <Text style={style.paragraph}>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us through email at
          Email@Website.com
        </Text>
        <Text style={style.paragraph}>
          This privacy policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Website Name. This policy is not applicable
          to any information collected offline or via channels other than this
          website.
        </Text>
        <Text style={style.paragraph}>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us through email at
          Email@Website.com
        </Text>
        <Text style={style.paragraph}>
          This privacy policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Website Name. This policy is not applicable
          to any information collected offline or via channels other than this
          website.
        </Text>
      </View>
    </View>
  );
};

export {PrivacyPolicy};
