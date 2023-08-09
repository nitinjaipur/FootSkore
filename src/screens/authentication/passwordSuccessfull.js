import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
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
  iconContainer: {
    width: '85%',
    height: s(70),
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginTop: s(5),
    marginBottom: s(25)
  }
});

const PasswordSuccessfull = props => {
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
            PASSWORD RESET SUCCESSFULLY
          </Text>
        </View>
        <View style={style.buttonContainer}>
          <SolidButton
            title="Back to Sign In"
            backgroundColor={themeDefault.colors.red}
            textColor={themeDefault.colors.white}
            onPress={() => {
              props.navigation.navigate('LogIn');
            }}
          />
        </View>
        <View style={{flex: 4}}></View>
      </View>
    </View>
  );
};

export { PasswordSuccessfull };