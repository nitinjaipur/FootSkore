import React, {useRef, useState} from 'react';
import { View, Text, StatusBar, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SolidButton } from '../../components/index';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {themeDefault} from '../../theme/index';

const style = StyleSheet.create({
  wrapperView: {
    flex: 1,
    justifyContent: 'space-between'
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-start'
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
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: s(95)
  },
  footerText: {
    color: themeDefault.colors.darkGray,
    fontSize: s(14)
  },
  footerTextLink: {
    color: themeDefault.colors.red,
    textDecorationLine: 'underline',
    fontWeight: '600'
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    width: '70%',
    marginTop: s(22),
    flexDirection: 'row',
    alignItems: 'center',    
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  otpView: {
    height: s(56),
    width: s(43),
    borderRadius: s(8),
    backgroundColor: themeDefault.colors.backGround
  },
  otpText: {
    flex:1,
    fontSize: s(26),
    textAlign: 'center',
    color: themeDefault.colors.otp
  },
  buttonContainerDetailView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: s(14)
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

const VerificationCode = props => {  
  const otpRefA = useRef();
  const otpRefB = useRef();
  const otpRefC = useRef();
  const otpRefD = useRef();
  const [otpA, setotpA] = useState('');
  const [otpB, setotpB] = useState('');
  const [otpC, setotpC] = useState('');
  const [otpD, setotpD] = useState('');
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
      <View style={style.headerContainer}>
        <View style={style.textContainer}>
          <Text style={style.textHeading}>
            VARIFICATION CODE
          </Text>
          <Text style={style.detailText}>
            Please enter 4 digit code
          </Text>
        </View>
        <View style={style.inputContainer}>
          <View style={style.otpView}>
            <TextInput
              value={otpA}
              placeholder="0"
              maxLength={1}
              ref={otpRefA}
              caretHidden={true}
              onChangeText={(text) => {
                setotpA(text)
                otpA === '' ? otpRefB.current.focus() : otpRefA.current.focus();
                
              }}
              style={style.otpText}
            />
          </View>
          <View style={style.otpView}>
            <TextInput
              value={otpB}
              placeholder="0"
              maxLength={1}
              ref={otpRefB}
              caretHidden={true}
              onChangeText={(text) => {
                setotpB(text)
                otpB === '' ? otpRefC.current.focus() : otpRefA.current.focus();
              }}
              style={style.otpText}
            />
          </View>
          <View style={style.otpView}>
            <TextInput
              value={otpC}
              placeholder="0"
              maxLength={1}
              ref={otpRefC}
              caretHidden={true}
              onChangeText={(text) => {
                setotpC(text)
                otpC === '' ? otpRefD.current.focus() : otpRefB.current.focus();
              }}
              style={style.otpText}
            />
          </View>
          <View style={style.otpView}>
            <TextInput
              value={otpD}
              placeholder="0"
              maxLength={1}
              ref={otpRefD}
              caretHidden={true}
              onChangeText={(text) => {
                setotpD(text)
                otpD === '' ? otpRefD.current.focus() : otpRefC.current.focus();
              }}
              style={style.otpText}
            />
          </View>
        </View>
        <View style={style.buttonContainer}>
          <SolidButton
            title="Verify"
            backgroundColor={themeDefault.colors.red}
            textColor={themeDefault.colors.white}
            onPress={() => {
              props.navigation.navigate(
                props.route.params.afterVarificationScreen,
                {isVerified: true},
              );
            }}
          />
          <View style={style.buttonContainerDetailView}>
            <Text style={style.detailText}>
              Sent to registered Email
            </Text>
          </View>
        </View>
        <View style={{flex: 4}}></View>
      </View>
      <View style={style.footerContainer}>
        <Text style={style.footerText}>
          Didn't recieve the code?{' '}
          <Text style={style.footerTextLink}>Resend</Text>
        </Text>
      </View>
    </View>
  );
};

export { VerificationCode };