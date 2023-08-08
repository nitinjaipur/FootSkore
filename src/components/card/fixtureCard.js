import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  container: {
    height: s(120),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: themeDefault.colors.lightGray,
    flexDirection: 'row'
  },
  left: {
    height: '95%',
    width: s(74),
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  centre: {
    height: '85%',
    width: s(145),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center'
  },
  centreStatus: {
    color: themeDefault.colors.red,
    fontSize: s(15),
    fontWeight: 'bold'
  },
  bodyMatchBodyCentreScore: {
    fontSize: s(35),
    fontWeight: 'bold'
  },
  centreRadio: {
    backgroundColor: themeDefault.colors.lightPink,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: s(10),
    width: s(45),
    height: s(25)
  },
  centreRadioText: {
    color: themeDefault.colors.red,
    fontSize: s(11)
  },
  right: {
    height: '95%',
    width: s(74),
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});

const FixtureCard = () => {
  return(
    <View style={style.container}>
      <View style={style.left}>
        <Icon name='home-sharp' size={22} />
        <Image source={require('../../assets/images/cardGraphicsLeft.png')} />
        <Text>Manchester United</Text>
      </View>
      <View style={style.centre}>
        <Text style={style.centreStatus}>First Half</Text>
        <Text style={style.bodyMatchBodyCentreScore}>3 : 2</Text>
        <View style={style.centreRadio}><Icon name='radio-button-on-outline' color={themeDefault.colors.red} size={15} />
          <Text style={style.centreRadioText}>68'</Text>
        </View>
      </View>
      <View style={style.right}>
        <Icon name='airplane' size={22} />
        <Image source={require('../../assets/images/cardGraphicsLeft.png')} />
        <Text>Zenith U19</Text>
      </View>
    </View>
    );
}

export { FixtureCard };