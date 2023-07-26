import React, { useState } from 'react';
import { TouchableOpacity, TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { textStyle } from './style';

const InfoInput = (props) => {
  const [cmtColor, setCmtColor] = useState('#808797');
  return(
    <View style={ [textStyle.textInputStyle, {borderBottomColor: cmtColor}] }>
      <View style={{ height: s(40)}}>
        <Text style={ [{ color: cmtColor }, textStyle.textInputTitle] }>{props.title}</Text>
      </View>
      <TextInput editable={props.editable} onFocus={() => {setCmtColor('#E92742')}} onBlur={() => {setCmtColor('#808797')}}/>
    </View>
  );
}


const PasswordInput = (props) => {
  const [cmtColor, setCmtColor] = useState('#808797');
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
      <TextInput editable={props.editable} value={inputValue} onChangeText={(text) => {setInputValue(text)}} secureTextEntry={hiddenText} onFocus={() => {setCmtColor('#E92742')}} onBlur={() => {setCmtColor('#808797')}}></TextInput>
    </View>
  );
}

export { InfoInput, PasswordInput };