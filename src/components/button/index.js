import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { atomButtonStyle } from './styles';

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
    <TouchableOpacity disabled={true} style={[atomButtonStyle.solidButton, { backgroundColor: '#808797'}]}>
      <Text style={[atomButtonStyle.buttonText, {color: '#fff'}]}>{ props.title }</Text>
    </TouchableOpacity>
  )
}

// atomButtonStyle.buttonText,

export { SolidButton, HollowButton, DisabledButton };