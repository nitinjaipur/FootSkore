import { StyleSheet } from "react-native";
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

const userSignInUpStyle = StyleSheet.create({
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
    height: '30%'
  },
  footerText: {
    color:'#808797',
    fontSize: s(14)
  },
  footerTextLink: {
    color:themeDefault.colors.red,
    textDecorationLine: 'underline',
    fontWeight: '600'
  }
});

const forgotPasswordStyle = StyleSheet.create({
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
  }
});

const verificationCodeStyle = StyleSheet.create({
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
  }
});

const resetPasswordStyle = StyleSheet.create({
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
  }
});

const passwordSuccessfullStyle = StyleSheet.create({
  wrapperView: {
    flex: 1,
    justifyContent: 'space-between'
  },
  headerContainer: {
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
  buttonContainer: {
    flex: 2,
    justifyContent: 'flex-start'
  },
});

const signUpStyle = StyleSheet.create({
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
  }
});

export { userSignInUpStyle, forgotPasswordStyle, verificationCodeStyle, resetPasswordStyle, passwordSuccessfullStyle, signUpStyle };