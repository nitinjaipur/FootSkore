import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, StatusBar, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SolidButton, InfoInput, PasswordInput } from '../../components/index';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {themeDefault} from '../../theme/index';
import { isValidEmail, isValidPassword } from '../../utils/index';

const style = StyleSheet.create({
  wrapperView: {
    flex: 1,
    justifyContent: 'space-between'
  },
  iconContainer: {
    width: '85%',
    height: s(70),
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginTop: s(5),
    marginBottom: s(25)
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    width: '93%',
    alignSelf: 'flex-end'
  },
  textHeading: {
    fontSize: s(30),
    fontFamily: themeDefault.fonts.TekoBold
  },
  detailText: {
    color: themeDefault.colors.darkGray,
    fontSize: s(14),
    lineHeight: s(24),
  },
  inputTextInputContainer: {
    flex: 2,
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '85%',
    marginTop: s(10),
    marginBottom: s(6),
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'space-evenly'
  },
  emptyContainer: {
    height: s(165)
  },
  footerText: {
    color:themeDefault.colors.darkGray,
    fontSize: s(14)
  },
  footerTextLink: {
    color:themeDefault.colors.red,
    textDecorationLine: 'underline',
    fontWeight: '600'
  }
});

const LogIn = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onChangeEmail = (text) => {setEmail(text);}
  const onChangePassword = (text) => {setPassword(text);}
  const validateData = () => {
    (!isValidEmail(email) && !isValidPassword(password)) ?
      Alert.alert('Invalid Email And Password', 'Please check Email And Password before Login') :
      ((isValidEmail(email) && !isValidPassword(password)) ? Alert.alert('Invalid Password', 'Please check Password before Login') :
        ((!isValidEmail(email) && isValidPassword(password)) ? Alert.alert('Invalid Email', 'Please check Email before Login') :
        Alert.alert('Successfull', 'Valid') ))
  }
  return (
    <View style={style.wrapperView}>
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
      <KeyboardAvoidingView style={style.headerContainer}>
        <View style={style.textContainer}>
          <Text style={style.textHeading}>LET'S SIGN YOU IN</Text>
          <Text style={style.detailText}>
            Welcome back. You've been missed!
          </Text>
        </View>
        <View style={style.inputTextInputContainer}>
          <View style={{marginTop: s(17)}}>
            <InfoInput title="Email" value={email} onChangeText={onChangeEmail} />
          </View>
          <PasswordInput title="Password" value={password} onChangeText={onChangePassword} />
        </View>
        <View style={{width: '85%', alignSelf: 'center'}}>
          <Text
            style={{alignSelf: 'flex-end'}}
            onPress={() => {
              props.navigation.navigate('ForgotPassword');
            }}>
            Forgot Password
          </Text>
        </View>
        <View style={style.buttonContainer}>
          <SolidButton
            title="Sign In"
            onPress={validateData}
            backgroundColor={themeDefault.colors.red}
            textColor={themeDefault.colors.white}
          />
          <SolidButton
            title="Login with Google"
            backgroundColor={themeDefault.colors.blue}
            textColor={themeDefault.colors.white}
          />
        </View>
        <View style={style.emptyContainer}></View>
      </KeyboardAvoidingView>
      <View style={style.footerContainer}>
        <Text style={style.footerText}>
          New User{' '}
          <Text
            style={style.footerTextLink}
            onPress={() => {
              props.navigation.navigate('SignUp', {isVerified: false});
            }}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export { LogIn };