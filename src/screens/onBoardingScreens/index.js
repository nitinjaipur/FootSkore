import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { s } from 'react-native-size-matters';
import { SolidButton, HollowButton } from '../../components/index';
import { onBoardingScreensStyle } from './style';
import { themeDefault } from '../../theme/index';

const GetStarted = (props) => {
  return(
    <View style={onBoardingScreensStyle.Container}>
      <StatusBar hidden={true} />
      <View style={onBoardingScreensStyle.imageContainer}>
        <Image source={require('../../assets/images/logo_welcome.png')} style={[onBoardingScreensStyle.imageStyle, { marginTop: s(60) }]} />
      </View>
      <View style={onBoardingScreensStyle.headerContainer}>
        <Text style={onBoardingScreensStyle.headerText}>FOOTSKORE</Text>
      </View>
      <View style={onBoardingScreensStyle.detailContainer}>
        <Text style={onBoardingScreensStyle.detailText}>Never miss a goal - get live match alerts, fixtures and results for your favorite teams and competitions</Text>
      </View>
      <View style={onBoardingScreensStyle.buttonContainer}>
        <SolidButton title='Get Started' backgroundColor={themeDefault.colors.red} textColor={themeDefault.colors.white} onPress={() =>{props.navigation.navigate('Welcome2')}} />
      </View>
    </View>
  );
}

const Welcome = (props) => {
  return(
    <View style={onBoardingScreensStyle.Container}>
      <StatusBar hidden={true} />
      <View style={onBoardingScreensStyle.imageContainer}>
        <Image source={require('../../assets/images/logo_welcome_player.png')} style={onBoardingScreensStyle.imageStyle} />
      </View>
      <View style={onBoardingScreensStyle.headerContainer}>
        <Text style={onBoardingScreensStyle.headerText}>FOOTSKORE</Text>
      </View>
      <View style={onBoardingScreensStyle.detailContainerWelcome2}>
        <Text style={onBoardingScreensStyle.detailText}>We'd like to check that your prefrences and details are accurate</Text>
      </View>
      <View style={onBoardingScreensStyle.buttonContainerWelcome2}>
        <SolidButton title='Sign In' backgroundColor={themeDefault.colors.red} textColor={themeDefault.colors.white} onPress={() => {props.navigation.navigate('LogIn')}} />
        <HollowButton title='Sign Up for FootSkore' backgroundColor={themeDefault.colors.white} borderColor={themeDefault.colors.red} textColor={themeDefault.colors.black} onPress={() => {props.navigation.navigate('SignUp', {isVerified: false})}} />
      </View>
    </View>
  );
}

export { GetStarted, Welcome };
