import React from 'react';
import { StyleSheet } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';

const atomButtonStyle = StyleSheet.create({
  solidButton: {
    marginLeft: s(17),
    marginRight: s(17),
    marginTop: s(16),
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: s(30)
  },
  buttonText: {
    fontSize: s(13),
    fontWeight: 700,
    marginBottom: s(15),
    marginTop: s(15)
  },
  hollowButton: {
    marginLeft: s(17),
    marginRight: s(17),
    marginTop: s(16),
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: s(30),
    borderWidth: 2
  }
});

export { atomButtonStyle };