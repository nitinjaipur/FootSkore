import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';
import { isValidEmail, isValidPassword } from '../../utils/index';

const style = StyleSheet.create({
  textInputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: themeDefault.colors.darkGray
  },
  textInputTitle: {
    fontSize: s(13),
    lineHeight: s(26)
  },
  headerContainer: {
    height: s(40)
  },
  warningText: {
    color: themeDefault.colors.red,
    alignSelf: 'flex-end'
  },
  passwordWarningText: {
    color: themeDefault.colors.red,
    alignSelf: 'flex-end'
  }
});

const InfoInput = (props) => {
  const [cmtColor, setCmtColor] = useState(themeDefault.colors.darkGray);
  const [inputValue, setInputValue] = useState();
  const [isValid, setIsValid] = useState(true);
  const validation = (text) => {
    setInputValue(text);
    props.setValue(inputValue);
    props.title === 'Email' ? setIsValid(isValidEmail(text)) : setIsValid(text.length > 0);
  }
  return(
    <>
      <View style={ [style.textInputStyle, {borderBottomColor: cmtColor}] }>
        <View style={style.headerContainer}>
          <Text style={ [{ color: cmtColor }, style.textInputTitle] }>{props.title}</Text>
        </View>
        <TextInput editable={props.editable} value={inputValue} onChangeText={(text) => {validation(text)}} onFocus={() => {setCmtColor(themeDefault.colors.red)}} onBlur={() => {setCmtColor(themeDefault.colors.darkGray)}}/>
      </View>
      { cmtColor === themeDefault.colors.red ?
        <Text style={style.warningText}>{!isValid ? (props.title === 'Email' ? 'Invalid Email' : `Please Enter ${props.title}`) : null}</Text>: null
      }
    </>
  );
}

const PasswordInput = (props) => {
  const [cmtColor, setCmtColor] = useState(themeDefault.colors.darkGray);
  const [eye, setEye] = useState("eye-off-outline");
  const [hiddenText, setHiddenText] = useState(true);
  const [inputValue, setInputValue] = useState();
  const [isValid, setIsValid] = useState(true);
  const validation = (text) => {
    setInputValue(text);
    props.setValue(inputValue);
    text.length > 7 ? (setIsValid(isValidPassword(text))) : setIsValid(false);
  }
  return(
    <>
    <View style={ [style.textInputStyle, {borderBottomColor: cmtColor}] }>
      <View style={style.headerContainer}>
        <Text style={ [{ color: cmtColor }, style.textInputTitle] }>{props.title}</Text>
        {
        inputValue ? 
          <Icon name={eye} size={s(21)} style={{alignSelf: 'flex-end'}} onPress={() => {
            eye === "eye-off-outline" ? (setEye("eye-outline"), setHiddenText(false)) : (setEye("eye-off-outline"), setHiddenText(true))
          }} />
          : null
        }
      </View>
      <TextInput editable={props.editable} value={inputValue} onChangeText={(text) => {validation(text)}} secureTextEntry={hiddenText} onFocus={() => {setCmtColor(themeDefault.colors.red)}} onBlur={() => {setCmtColor(themeDefault.colors.darkGray)}}></TextInput>
    </View>
    { cmtColor === themeDefault.colors.red ?
      <Text style={style.passwordWarningText}>{!isValid ? 'Please choose strong password' : null}</Text>: null
    }
    </>
  );
}

export { InfoInput, PasswordInput };