import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StatusBar, Animated, StyleSheet } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { SolidButton, HollowButton } from '../../components/index';
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
  detailText: {
    textAlign: 'center',
    color: themeDefault.colors.darkGray,
    fontSize: s(13),
    lineHeight: s(24)
  },
  detailContainerWelcome: {
    alignItems: 'center',
    marginLeft: s(47),
    marginRight: s(47)
  },
  buttonContainerWelcome: {
    marginBottom: s(68),
    alignSelf: 'center',
    width: '95%',
  }
});


const Welcome = (props) => {

  const IMAGES = [
    require('../../assets/images/logo_welcome_player.png'),
    require('../../assets/images/logo_welcome_trophy.png')
  ];

  const animation = useRef(new Animated.Value(0)).current;
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  animation.addListener(({ value }) => {
    const newIndex = Math.floor(value * IMAGES.length);
    setImageIndex(newIndex);
  });

  const imageSource = IMAGES[imageIndex];

  return(
    <View style={style.Container}>
      <StatusBar hidden={true} />
      <View style={style.imageContainer}>
        <Animated.Image style={[style.imageStyle, { opacity: animation }]} source={imageSource}/>
      </View>
      <View style={style.headerContainer}>
        <Text style={style.headerText}>FOOTSKORE</Text>
      </View>
      <View style={style.detailContainerWelcome}>
        <Text style={style.detailText}>We'd like to check that your prefrences and details are accurate</Text>
      </View>
      <View style={style.buttonContainerWelcome}>
        <SolidButton title='Sign In' backgroundColor={themeDefault.colors.red} textColor={themeDefault.colors.white} onPress={() => {props.navigation.navigate('LogIn')}} />
        <HollowButton title='Sign Up for FootSkore' backgroundColor={themeDefault.colors.white} borderColor={themeDefault.colors.red} textColor={themeDefault.colors.black} onPress={() => {props.navigation.navigate('SignUp', {isVerified: false})}} />
      </View>
    </View>
  );
}

export { Welcome };