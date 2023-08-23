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
  return(
    <>
      <View style={ [style.textInputStyle, {borderBottomColor: cmtColor}] }>
        <View style={style.headerContainer}>
          <Text style={ [{ color: cmtColor }, style.textInputTitle] }>{props.title}</Text>
        </View>
        <TextInput editable={props.editable} value={props.value} onChangeText={(text) => {props.onChangeText(text)}} onFocus={() => {setCmtColor(themeDefault.colors.red)}} onBlur={() => {setCmtColor(themeDefault.colors.darkGray)}}/>
      </View>
    </>
  );
}

const PasswordInput = (props) => {
  const [cmtColor, setCmtColor] = useState(themeDefault.colors.darkGray);
  const [hiddenText, setHiddenText] = useState(true);
  return(
    <>
    <View style={ [style.textInputStyle, {borderBottomColor: cmtColor}] }>
      <View style={style.headerContainer}>
        <Text style={ [{ color: cmtColor }, style.textInputTitle] }>{props.title}</Text>
        {
        props.value ? 
          <Icon name={hiddenText ? "eye-off-outline" : "eye-outline" } size={s(21)} style={{alignSelf: 'flex-end'}} onPress={() => { setHiddenText(!hiddenText); }} />
          : null
        }
      </View>
      <TextInput editable={props.editable} value={props.value} onChangeText={(text) => {props.onChangeText(text)}} secureTextEntry={hiddenText} onFocus={() => {setCmtColor(themeDefault.colors.red)}} onBlur={() => {setCmtColor(themeDefault.colors.darkGray)}}></TextInput>
    </View>
    </>
  );
}

export { InfoInput, PasswordInput };