import React from 'react';
import { View, Text, StatusBar, Image, Animated, StyleSheet } from 'react-native';
import { s } from 'react-native-size-matters';
import { SolidButton } from '../../components/index';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: s(17)
  },
  headerText: {
    fontSize: s(34),
    fontFamily: themeDefault.fonts.TekoSemiBold
  },
  detailContainer: {
    alignItems: 'center',
    marginLeft: s(30),
    marginRight: s(30),
  },
  detailText: {
    textAlign: 'center',
    color: themeDefault.colors.darkGray,
    fontSize: s(13),
    lineHeight: s(24)
  },
  buttonContainer: {
    marginBottom: s(105),
    alignSelf: 'center',
    width: '95%',
  },
  detailContainerWelcome2: {
    alignItems: 'center',
    marginLeft: s(47),
    marginRight: s(47)
  },
  buttonContainerWelcome2: {
    marginBottom: s(68),
    alignSelf: 'center',
    width: '95%',
  }
});


const GetStarted = (props) => {
  return(
    <View style={style.Container}>
      <StatusBar hidden={true} />
      <View style={style.imageContainer}>
        <Image source={require('../../assets/images/logo_welcome.png')} style={[style.imageStyle, { marginTop: s(60) }]} />
      </View>
      <View style={style.headerContainer}>
        <Text style={style.headerText}>FOOTSKORE</Text>
      </View>
      <View style={style.detailContainer}>
        <Text style={style.detailText}>Never miss a goal - get live match alerts, fixtures and results for your favorite teams and competitions</Text>
      </View>
      <View style={style.buttonContainer}>
        <SolidButton title='Get Started' backgroundColor={themeDefault.colors.red} textColor={themeDefault.colors.white} onPress={() =>{props.navigation.navigate('Welcome')}} />
      </View>
    </View>
  );
}

// const Welcome = (props) => {
//   return(
//     <View style={onBoardingScreensStyle.Container}>
//       <StatusBar hidden={true} />
//       <View style={onBoardingScreensStyle.imageContainer}>
//         <Image source={require('../../assets/images/logo_welcome_player.png')} style={onBoardingScreensStyle.imageStyle} />
//       </View>
//       <View style={onBoardingScreensStyle.headerContainer}>
//         <Text style={onBoardingScreensStyle.headerText}>FOOTSKORE</Text>
//       </View>
//       <View style={onBoardingScreensStyle.detailContainerWelcome2}>
//         <Text style={onBoardingScreensStyle.detailText}>We'd like to check that your prefrences and details are accurate</Text>
//       </View>
//       <View style={onBoardingScreensStyle.buttonContainerWelcome2}>
//         <SolidButton title='Sign In' backgroundColor={themeDefault.colors.red} textColor={themeDefault.colors.white} onPress={() => {props.navigation.navigate('LogIn')}} />
//         <HollowButton title='Sign Up for FootSkore' backgroundColor={themeDefault.colors.white} borderColor={themeDefault.colors.red} textColor={themeDefault.colors.black} onPress={() => {props.navigation.navigate('SignUp', {isVerified: false})}} />
//       </View>
//     </View>
//   );
// }

export { GetStarted };