import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { atomButtonStyle } from './styles';
import { themeDefault } from '../../theme/index';

const SolidButton = (props) => {
  return(
    <TouchableOpacity style={[atomButtonStyle.solidButton, { backgroundColor: props.backgroundColor}]} onPress={(props.onPress)}>
      <Text style={[atomButtonStyle.buttonText, {color: props.textColor}]}>{ props.title }</Text>
    </TouchableOpacity>
  );
}

const HollowButton = (props) => {
  return(
    <TouchableOpacity style={[atomButtonStyle.hollowButton, { backgroundColor: props.backgroundColor, borderColor: props.borderColor}]} onPress={(props.onPress)}>
      <Text style={[atomButtonStyle.buttonText, {color: props.textColor}]}>{ props.title }</Text>
    </TouchableOpacity>
  );
}

const DisabledButton = (props) => {
  return(
    <TouchableOpacity disabled={true} style={[atomButtonStyle.solidButton, { backgroundColor: themeDefault.colors.darkGray}]}>
      <Text style={[atomButtonStyle.buttonText, {color: themeDefault.colors.white}]}>{ props.title }</Text>
    </TouchableOpacity>
  )
}

export { SolidButton, HollowButton, DisabledButton };