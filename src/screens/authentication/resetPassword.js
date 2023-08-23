import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SolidButton, PasswordInput } from '../../components/index';
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
    marginLeft: s(21),
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
    flex: 2,
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '85%',
    marginTop: s(21),
    marginBottom: s(8)
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'flex-start'
  },
  emptyContainer: {
    height: '35%'
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

const ResetPassword = props => {
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const onChangeNewPassword = (text) => {setNewPassword(text);}
  const onChangeConfirmPassword = (text) => {setConfirmPassword(text);}
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
        <Text style={style.textHeading}>RESET PASSWORD</Text>
        <Text style={style.detailText}>Set new password</Text>
      </View>
      <View style={style.inputTextInputContainer}>
        <PasswordInput title="New Password" value={newPassword} onChangeText={onChangeNewPassword} />
        <PasswordInput title="Confirm Password" value={confirmPassword} onChangeText={onChangeConfirmPassword} />
      </View>
      <View style={style.buttonContainer}>
        <SolidButton
          title="Save"
          backgroundColor={themeDefault.colors.red}
          textColor={themeDefault.colors.white}
          onPress={() => {
            props.navigation.navigate('PasswordSuccessfull');
          }}
        />
      </View>
      <View style={style.emptyContainer}></View>
    </KeyboardAvoidingView>
  );
};

export { ResetPassword };