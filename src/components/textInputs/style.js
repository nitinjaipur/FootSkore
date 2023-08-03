import React from 'react';
import { StyleSheet } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

const textStyle = StyleSheet.create({
  textInputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: themeDefault.colors.darkGray,
  },
  textInputTitle: {
    fontSize: s(13),
    lineHeight: s(26)
  },
  headerContainer: {}
});

export { textStyle };