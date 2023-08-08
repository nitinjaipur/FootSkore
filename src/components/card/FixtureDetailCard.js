import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  fixtureDetailCardStyle: {
    height: s(270),
    marginLeft: s(15),
    marginRight: s(15),
    alignItems: 'center',
    backgroundColor: themeDefault.colors.lightGray,
    borderRadius: 5,
    borderColor: 'black',
  },
  cardTitle: {
    height: s(40),
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardGraphics: {
    height: s(120),
    marginLeft: s(15),
    marginRight: s(15),
    flexDirection: 'row',
    borderBottomColor: themeDefault.colors.darkGray,
    borderBottomWidth: 1,
  },
  cardDetails: {
    height: s(100),
    width: '90%',
    flexDirection: 'column',
    marginTop: 5
  },
  cardTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardGraphicsLeft: {
    marginTop: s(5),
    marginBottom: s(5),
    width: s(65),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cardGraphicsCentre: {
    height: s(100),
    width: s(130),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
  },
  cardGraphicsRight: {
    marginTop: s(5),
    marginBottom: s(5),
    width: s(65),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cardDetailsData: {
    height: s(20),
    flexDirection: 'row',
  },
  cardDetailsDataKey: {
    width: s(85)
  },
  cardGraphicsCentreStatus: {
    color: themeDefault.colors.red,
    fontSize: s(15),
    fontWeight: 'bold'
  },
  cardGraphicsCentreScore: {
    fontSize: s(35),
    fontWeight: 'bold'
  },
  cardGraphicsCentreRadio: {
    backgroundColor: themeDefault.colors.lightPink,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: s(10),
    width: s(45),
    height: s(25)
  },
  cardGraphicsCentreRadioText: {
    color: themeDefault.colors.red,
    fontSize: s(11),
  },
  cardTitleText: {
    fontWeight: 'bold',
    fontSize: s(10),
  },
  cardDetailsText : {
    color: themeDefault.colors.darkGray
  }
});

const FixtureDetailCard = (props) => {
  return(
    <View style={style.fixtureDetailCardStyle}>
      <View style={style.cardTitle}>
        <View style={style.cardTitleLeft}>
          <Image source={require('../../assets/images/cardTitleImage.png')} />
          <Text style={style.cardTitleText}>UEFA Champion League</Text>
        </View>
        <View>
          <Icon name='heart' color={themeDefault.colors.red} size={22} />
        </View>
      </View>  
      <View style={style.cardGraphics}>
        <View style={style.cardGraphicsLeft}>
          <Icon name='home-sharp' size={22} />
          <Image source={require('../../assets/images/cardGraphicsLeft.png')} />
          <Text>Ural U20</Text>
        </View>
        <View style={style.cardGraphicsCentre}>
          <Text style={style.cardGraphicsCentreStatus}>First Half</Text>
          <Text style={style.cardGraphicsCentreScore}>3 : 2</Text>
          <View style={style.cardGraphicsCentreRadio}><Icon name='radio-button-on-outline' color={themeDefault.colors.red} size={15} /><Text style={style.cardGraphicsCentreRadioText}>68'</Text></View>
        </View>
        <View style={style.cardGraphicsRight}>
          <Icon name='airplane' size={22} />
          <Image source={require('../../assets/images/cardGraphicsLeft.png')} />
          <Text>Zenith U19</Text>
        </View>
      </View>        
      <View style={style.cardDetails}>
        <View style={style.cardDetailsData}>
          <View style={style.cardDetailsDataKey}>
            <Text style={style.cardDetailsText}>Date & Time:</Text>
          </View>
          <View>
            <Text style={style.cardDetailsText}>2022-09-28 12:30</Text>
          </View>
        </View>
        <View style={style.cardDetailsData}>
          <View style={style.cardDetailsDataKey}>
            <Text style={style.cardDetailsText}>Venue:</Text>
          </View>
          <View>
            <Text style={style.cardDetailsText}>Sport Baza Bazhoviya</Text>
          </View>
        </View>
        <View style={style.cardDetailsData}>
          <View style={style.cardDetailsDataKey}>
            <Text style={style.cardDetailsText}>City:</Text>
          </View>
          <View>
            <Text style={style.cardDetailsText}>Sysert</Text>
          </View>
        </View>
        <View style={style.cardDetailsData}>
          <View style={style.cardDetailsDataKey}>
            <Text style={style.cardDetailsText}>Contry:</Text>
          </View>
          <View>
            <Text style={style.cardDetailsText}>Russia</Text>
          </View>
        </View>
        <View style={style.cardDetailsData}>
          <View style={style.cardDetailsDataKey}>
            <Text style={style.cardDetailsText}>Round:</Text>
          </View>
          <View>
            <Text style={style.cardDetailsText}>Regular Session- 10</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export { FixtureDetailCard };