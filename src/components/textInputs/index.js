import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { textStyle } from './style';
import { themeDefault } from '../../theme/index';

const InfoInput = (props) => {
  const [cmtColor, setCmtColor] = useState(themeDefault.colors.darkGray);
  return(
    <View style={ [textStyle.textInputStyle, {borderBottomColor: cmtColor}] }>
      <View style={{ height: s(40)}}>
        <Text style={ [{ color: cmtColor }, textStyle.textInputTitle] }>{props.title}</Text>
      </View>
      <TextInput editable={props.editable} onFocus={() => {setCmtColor(themeDefault.colors.red)}} onBlur={() => {setCmtColor(themeDefault.colors.darkGray)}}/>
    </View>
  );
}


const PasswordInput = (props) => {
  const [cmtColor, setCmtColor] = useState(themeDefault.colors.darkGray);
  const [eye, setEye] = useState("eye-off-outline");
  const [hiddenText, setHiddenText] = useState(true);
  const [inputValue, setInputValue] = useState();
  return(
    <View style={ [textStyle.textInputStyle, {borderBottomColor: cmtColor}] }>
      <View style={{ height: s(40)}}>
        <Text style={ [{ color: cmtColor }, textStyle.textInputTitle] }>{props.title}</Text>
        {
        inputValue ? 
          <Icon name={eye} size={s(21)} style={{alignSelf: 'flex-end'}} onPress={() => {
            eye === "eye-off-outline" ? (setEye("eye-outline"), setHiddenText(false)) : (setEye("eye-off-outline"), setHiddenText(true))
          }} />
          : null
        }
      </View>
      <TextInput editable={props.editable} value={inputValue} onChangeText={(text) => {setInputValue(text)}} secureTextEntry={hiddenText} onFocus={() => {setCmtColor(themeDefault.colors.red)}} onBlur={() => {setCmtColor(themeDefault.colors.darkGray)}}></TextInput>
    </View>
  );
}

export { InfoInput, PasswordInput };