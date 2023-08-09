import React from 'react';
import { View, KeyboardAvoidingView, Text, StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SolidButton, InfoInput } from '../../components/index';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {themeDefault} from '../../theme/index';

const style = StyleSheet.create({
  wrapperView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginLeft: s(21)
  },
  textHeading: {
    fontSize: s(30),
    fontFamily: themeDefault.fonts.TekoBold
  },
  detailText: {
    color: themeDefault.colors.darkGray,
    fontSize: s(14),
    lineHeight: s(24)
  },
  inputTextInputContainer: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    width: '85%',
    marginTop: s(22),
    marginBottom: s(8)
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  emptyContainer: {
    flex: 4
  },
  iconContainer: {
    width: '85%',
    height: s(70),
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginTop: s(5),
    marginBottom: s(25)
  }
});

const ForgotPassword = props => {
  return (
    <KeyboardAvoidingView style={style.wrapperView}>
      <StatusBar hidden={false} />
      <View style={style.iconContainer}>
        <Icon
          name="arrow-back-outline"
          size={s(21)}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </View>
      <View style={style.textContainer}>
        <Text style={style.textHeading}>FORGOT PASSWORD</Text>
        <Text style={style.detailText}>
          Please enter register email id
        </Text>
      </View>
      <View style={style.inputTextInputContainer}>
        <InfoInput title="Email" />
      </View>
      <View style={style.buttonContainer}>
        <SolidButton
          title="Submit"
          backgroundColor={themeDefault.colors.red}
          textColor={themeDefault.colors.white}
          onPress={() => {
            props.navigation.navigate('VerificationCode', {
              afterVarificationScreen: 'ResetPassword',
            });
          }}
        />
      </View>
      <View style={style.emptyContainer}></View>
    </KeyboardAvoidingView>
  );
};

export { ForgotPassword };