import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  fixtureDetailCardStyle: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: themeDefault.colors.lightGray,
    borderRadius: 5,
    borderColor: 'black',
  },
  cardTitle: {
    height: '10%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardGraphics: {
    height: '50%',
    width: '90%',
    flexDirection: 'row',
    borderBottomColor: themeDefault.colors.darkGray,
    borderBottomWidth: 1
  },
  cardDetails: {
    height: '35%',
    width: '90%',
    flexDirection: 'column',
    marginTop: 5
  },
  cardTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardGraphicsLeft: {
    height: '95%',
    width: '25%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  cardGraphicsCentre: {
    height: '85%',
    width: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center'
  },
  cardGraphicsRight: {
    height: '95%',
    width: '25%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  cardDetailsData: {
    height: '20%',
    width: '100%',
    flexDirection: 'row'
  },
  cardDetailsDataKey: {
    width: '30%',
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

// const FixtureDetailCard = (props) => {
//   return(
//     <View style={style.fixtureDetailCardStyle}>
//       <View style={style.cardTitle}>
//         <View style={style.cardTitleLeft}>
//           <Image source={require('../../assets/images/cardTitleImage.png')} />
//           <Text style={style.cardTitleText}>{props.leagueName}</Text>
//         </View>
//         <View>
//           <Icon name='heart' color={themeDefault.colors.red} size={22} />
//         </View>
//       </View>
//       <View style={style.cardGraphics}>
//         <View style={style.cardGraphicsLeft}>
//           <Icon name='home-sharp' size={22} />
//           <Image source={props.hostTeamImage} />
//           <Text>{props.hostTeam}</Text>
//         </View>
//         <View style={style.cardGraphicsCentre}>
//           <Text style={style.cardGraphicsCentreStatus}>{props.half}</Text>
//           <Text style={style.cardGraphicsCentreScore}>3 : 2</Text>
//           <View style={style.cardGraphicsCentreRadio}><Icon name='radio-button-on-outline' color={themeDefault.colors.red} size={15} /><Text style={style.cardGraphicsCentreRadioText}>68'</Text></View>
//         </View>    
//         <View style={style.cardGraphicsRight}>
//           <Icon name='airplane' size={22} />
//           <Image source={props.guestTeamImage} />
//           <Text>{props.guestTeam}</Text>
//         </View>
//       </View>
//       <View style={style.cardDetails}>
//         <View style={style.cardDetailsData}>
//           <View style={style.cardDetailsDataKey}>
//             <Text style={style.cardDetailsText}>Date & Time:</Text>
//           </View>
//           <View>
//             <Text style={style.cardDetailsText}>{props.dateTime}</Text>
//           </View>
//         </View>
//         <View style={style.cardDetailsData}>
//           <View style={style.cardDetailsDataKey}>
//             <Text style={style.cardDetailsText}>Venue:</Text>
//           </View>
//           <View>
//             <Text style={style.cardDetailsText}>{props.venue}</Text>
//           </View>
//         </View>
//         <View style={style.cardDetailsData}>
//           <View style={style.cardDetailsDataKey}>
//             <Text style={style.cardDetailsText}>City:</Text>
//           </View>
//           <View>
//             <Text style={style.cardDetailsText}>{props.city}</Text>
//           </View>
//         </View>
//         <View style={style.cardDetailsData}>
//           <View style={style.cardDetailsDataKey}>
//             <Text style={style.cardDetailsText}>Contry:</Text>
//           </View>
//           <View>
//             <Text style={style.cardDetailsText}>{props.contry}</Text>
//           </View>
//         </View>
//         <View style={style.cardDetailsData}>
//           <View style={style.cardDetailsDataKey}>
//             <Text style={style.cardDetailsText}>Round:</Text>
//           </View>
//           <View>
//             <Text style={style.cardDetailsText}>{props.round}</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

export { FixtureDetailCard };