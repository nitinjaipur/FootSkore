import React, { useRef } from 'react';
import { View, KeyboardAvoidingView, Text, StatusBar, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { userSignInUpStyle, forgotPasswordStyle, verificationCodeStyle, resetPasswordStyle, passwordSuccessfullStyle, signUpStyle } from './style';
import { SolidButton, HollowButton, DisabledButton, InfoInput, PasswordInput } from '../../components/index';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

const LogIn = (props) => {
  return(
    <View style={userSignInUpStyle.wrapperView}>
      <StatusBar hidden={false} />
      <View style={userSignInUpStyle.iconContainer}>
          <Icon name="arrow-back-outline" size={s(21)} onPress={() => {props.navigation.goBack()}} />
        </View>
      <KeyboardAvoidingView style={userSignInUpStyle.headerContainer}>
        <View style={userSignInUpStyle.textContainer}>
          <Text style={userSignInUpStyle.textHeading}>LET'S SIGN YOU IN</Text>
          <Text style={userSignInUpStyle.detailText}>Welcome back. You've been missed!</Text>
        </View>
        <View style={userSignInUpStyle.inputTextInputContainer}>
          <View style={{marginTop: s(17)}}>
            <InfoInput title='Email' />
          </View>
          <PasswordInput title='Password' />
        </View>
        <View style={{ width: '85%', alignSelf: 'center'}}>
          <Text style={{alignSelf: 'flex-end'}} onPress={() => {props.navigation.navigate('ForgotPassword')}}>Forgot Password</Text>
        </View>
        <View style={userSignInUpStyle.buttonContainer}>
          <SolidButton title='Sign In' backgroundColor={themeDefault.colors.red} textColor={themeDefault.colors.white} />
          <SolidButton title='Login with Google' backgroundColor={themeDefault.colors.blue} textColor={themeDefault.colors.white} />
        </View>
        <View style={userSignInUpStyle.emptyContainer}></View>
      </KeyboardAvoidingView>
      <View style={userSignInUpStyle.footerContainer}>
        <Text style={userSignInUpStyle.footerText}>New User <Text style={userSignInUpStyle.footerTextLink} onPress={() =>{props.navigation.navigate('SignUp', {isVerified: false})}}>Sign Up</Text></Text>
      </View>
    </View>
  );
}

const ForgotPassword = (props) => {
  return(
    <KeyboardAvoidingView style={forgotPasswordStyle.wrapperView}>
      <StatusBar hidden={false} />
      <View style={userSignInUpStyle.iconContainer}>
          <Icon name="arrow-back-outline" size={s(21)} onPress={() => {props.navigation.goBack()}} />
      </View>
      <View style={forgotPasswordStyle.textContainer}>
        <Text style={forgotPasswordStyle.textHeading}>FORGOT PASSWORD</Text>
        <Text style={forgotPasswordStyle.detailText}>Please enter register email id</Text>
      </View>
      <View style={forgotPasswordStyle.inputTextInputContainer}>
        <InfoInput title='Email' />
      </View>
      <View style={forgotPasswordStyle.buttonContainer}>
        <SolidButton title='Submit' backgroundColor={themeDefault.colors.red} textColor={themeDefault.colors.white} onPress={() =>{props.navigation.navigate('VerificationCode', {afterVarificationScreen: 'ResetPassword'})}} />
      </View>
      <View style={forgotPasswordStyle.emptyContainer}></View>
    </KeyboardAvoidingView>
  );
}

const VerificationCode = (props) => {

  const otpA = useRef();
  const otpB = useRef();
  const otpC = useRef();

  return(
    <View style={verificationCodeStyle.wrapperView}>
      <StatusBar hidden={false} />
      <View style={userSignInUpStyle.iconContainer}>
          <Icon name="arrow-back-outline" size={s(21)} onPress={() => {props.navigation.goBack()}} />
      </View>
      <View style={verificationCodeStyle.headerContainer}>
        <View style={verificationCodeStyle.textContainer}>
          <Text style={verificationCodeStyle.textHeading}>VARIFICATION CODE</Text>
          <Text style={verificationCodeStyle.detailText}>Please enter 4 digit code</Text>
        </View>
        <View style={verificationCodeStyle.inputContainer}>
          <View style={verificationCodeStyle.otpView}><TextInput placeholder='0' maxLength={1} onSubmitEditing={() => {otpA.current.focus();}} style={verificationCodeStyle.otpText} /></View>
          <View style={verificationCodeStyle.otpView}><TextInput placeholder='0' maxLength={1} ref={otpA} onSubmitEditing={() => {otpB.current.focus();}} style={verificationCodeStyle.otpText} /></View>
          <View style={verificationCodeStyle.otpView}><TextInput placeholder='0' maxLength={1} ref={otpB} onSubmitEditing={() => {otpC.current.focus();}} style={verificationCodeStyle.otpText} /></View>
          <View style={verificationCodeStyle.otpView}><TextInput placeholder='0' maxLength={1} ref={otpC} style={verificationCodeStyle.otpText} /></View>
        </View>
        <View style={verificationCodeStyle.buttonContainer}>
          <SolidButton title='Verify' backgroundColor={themeDefault.colors.red} textColor={themeDefault.colors.white} onPress={() =>{props.navigation.navigate(props.route.params.afterVarificationScreen, {isVerified: true})}} />
          <View style={verificationCodeStyle.buttonContainerDetailView}>
            <Text style={verificationCodeStyle.detailText}>Sent to registered Email</Text>
          </View>
        </View>
        <View style={{flex: 4}}></View>
      </View>
      <View style={verificationCodeStyle.footerContainer}>
        <Text style={verificationCodeStyle.footerText}>Didn't recieve the code? <Text style={verificationCodeStyle.footerTextLink}>Resend</Text></Text>
      </View>
    </View>
  );
}

const ResetPassword = (props) => {
  return(
    <KeyboardAvoidingView style={resetPasswordStyle.wrapperView}>
      <StatusBar hidden={false} />
      <View style={userSignInUpStyle.iconContainer}>
          <Icon name="arrow-back-outline" size={s(21)} onPress={() => {props.navigation.goBack()}} />
      </View>
      <View style={resetPasswordStyle.textContainer}>
        <Text style={resetPasswordStyle.textHeading}>RESET PASSWORD</Text>
        <Text style={resetPasswordStyle.detailText}>Set new password</Text>
      </View>  
      <View style={resetPasswordStyle.inputTextInputContainer}>
        <PasswordInput title='New Password' />
        <PasswordInput title='Confirm Password' />
      </View>
      <View style={resetPasswordStyle.buttonContainer}>
        <SolidButton title='Save' backgroundColor={themeDefault.colors.red} textColor={themeDefault.colors.white} onPress={() =>{props.navigation.navigate('PasswordSuccessfull')}} />
      </View>
      <View style={resetPasswordStyle.emptyContainer}></View>
    </KeyboardAvoidingView>
  );
}

const PasswordSuccessfull = (props) => {
  return(
    <View style={passwordSuccessfullStyle.wrapperView}>
      <StatusBar hidden={false} />
        <View style={userSignInUpStyle.iconContainer}>
          <Icon name="arrow-back-outline" size={s(21)} onPress={() => {props.navigation.goBack()}} />
        </View>
      <View style={passwordSuccessfullStyle.headerContainer}>
        <View style={passwordSuccessfullStyle.textContainer}>
          <Text style={passwordSuccessfullStyle.textHeading}>PASSWORD RESET SUCCESSFULLY</Text>
        </View>
        <View style={passwordSuccessfullStyle.buttonContainer}>
          <SolidButton title='Back to Sign In' backgroundColor={themeDefault.colors.red} textColor={themeDefault.colors.white} onPress={() =>{props.navigation.navigate('LogIn')}} />
        </View>
        <View style={{flex: 4}}></View>
      </View>
    </View>
  );
}

const SignUp = (props) => {
  const {isVerified} = props.route.params;
  return(
    <KeyboardAvoidingView style={signUpStyle.wrapperView}>
      <StatusBar hidden={false} />
      <View style={userSignInUpStyle.iconContainer}>
          <Icon name="arrow-back-outline" size={s(21)} onPress={() => {props.navigation.goBack()}} />
        </View>
      <View style={signUpStyle.textContainer}>
        <Text style={signUpStyle.textHeading}>SIGN UP {props.route.isVerified}</Text>
        <View style={signUpStyle.detailHolder}>
          <Text style={signUpStyle.detailText}>Already have an account? <Text style={verificationCodeStyle.footerTextLink} onPress={() =>{props.navigation.navigate('LogIn')}}>Sign In</Text></Text>
        </View>
      </View>  
      <View style={signUpStyle.inputTextInputContainer}>
        <View style={{ width: '95%', alignSelf: 'center', position: 'absolute', zIndex: 1}}>
          { isVerified == false ?
              <Text style={[{alignSelf: 'flex-end'}, verificationCodeStyle.footerTextLink]} onPress={() => {props.navigation.navigate('VerificationCode', {afterVarificationScreen: 'SignUp'})}}>Verify</Text>
              :
              <Text style={[{alignSelf: 'flex-end', color: themeDefault.colors.green, textDecorationLine: 'underline', fontWeight: '600'}]} >Verified</Text>
          }
          </View>
        <InfoInput editable={!isVerified} title='Email' />
        <PasswordInput editable={isVerified} title='Password' />
        <InfoInput editable={isVerified} title='Name' />
        <InfoInput title='Time Zone' />
      </View>
      <View style={signUpStyle.buttonContainer}>
      { isVerified == false ?
        <DisabledButton title='Sign Up' />
        :
        <SolidButton title='Sign Up' backgroundColor={themeDefault.colors.red} textColor={themeDefault.colors.white} />
      }
      </View>
      <View style={signUpStyle.emptyContainer}></View>
    </KeyboardAvoidingView>
  );
}

export { LogIn, ForgotPassword, VerificationCode, ResetPassword, PasswordSuccessfull, SignUp };