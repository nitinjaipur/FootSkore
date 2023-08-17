import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SolidButton, DisabledButton, InfoInput, PasswordInput } from '../../components/index';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {themeDefault} from '../../theme/index';
import { storage } from '../../utils/index';

const style = StyleSheet.create({
  wrapperView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  textContainer: {
    flex: 1,
    marginLeft: s(21),
    marginTop: s(17)
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
    flex: 3,
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '85%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  emptyContainer: {
    height: '22%'
  },
  detailHolder: {
    marginTop: s(8)
  },
  iconContainer: {
    width: '85%',
    height: s(70),
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginTop: s(5),
    marginBottom: s(25)
  },
  footerTextLink: {
    color: themeDefault.colors.red,
    textDecorationLine: 'underline',
    fontWeight: '600'
  },
});



const SignUp = props => {
  const {isVerified} = props.route.params;
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const signUp = (props) => {

    // getting all keys i.e. list of users
    const keys = storage.getAllKeys();
  
    // temp step
    // saving 1 user
    let len = keys.length;
    let currentUser = `user${{len}}`;
    let users = {};

    console.log(email);
    console.log(name);
    console.log(password);
  
  }

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
        <Text style={style.textHeading}>
          SIGN UP {props.route.isVerified}
        </Text>
        <View style={style.detailHolder}>
          <Text style={style.detailText}>
            Already have an account?{' '}
            <Text
              style={style.footerTextLink}
              onPress={() => {
                props.navigation.navigate('LogIn');
              }}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
      <View style={style.inputTextInputContainer}>
        <View
          style={{
            width: '95%',
            alignSelf: 'center',
            position: 'absolute',
            zIndex: 1,
          }}>
          {isVerified == false ? (
            <Text
              style={[
                {alignSelf: 'flex-end'},
                style.footerTextLink,
              ]}
              onPress={() => {
                props.navigation.navigate('VerificationCode', {
                  afterVarificationScreen: 'SignUp',
                });
              }}>
              Verify
            </Text>
          ) : (
            <Text
              style={[
                {
                  alignSelf: 'flex-end',
                  color: themeDefault.colors.green,
                  textDecorationLine: 'underline',
                  fontWeight: '600',
                },
              ]}>
              Verified
            </Text>
          )}
        </View>
        <InfoInput setValue={setEmail} editable={!isVerified} title="Email" />
        <PasswordInput setValue={setPassword} editable={isVerified} title="Password" />
        <InfoInput setValue={setName} editable={isVerified} title="Name" />
        <InfoInput title="Time Zone" />
      </View>
      <View style={style.buttonContainer}>
        {isVerified == false ? (
          <DisabledButton title="Sign Up" />
        ) : (
          <SolidButton
            title="Sign Up"
            backgroundColor={themeDefault.colors.red}
            textColor={themeDefault.colors.white}
            onPress={() => {signUp}}
          />
        )}
      </View>
      <View style={style.emptyContainer}></View>
    </KeyboardAvoidingView>
  );
};

export { SignUp };