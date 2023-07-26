import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { cardStyle } from './style';

const FixtureDetailCard = (props) => {
  return(
    <View style={cardStyle.fixtureDetailCardStyle}>

      <View style={cardStyle.cardTitle}>
        <View style={cardStyle.cardTitleLeft}>
          <Image source={require('../../assets/images/cardTitleImage.png')} />
          <Text style={cardStyle.cardTitleText}>UEFA Champion League</Text>
        </View>
        <View>
          <Icon name='heart' color='#E92742' size={22} />
        </View>
      </View>
      
      <View style={cardStyle.cardGraphics}>
        <View style={cardStyle.cardGraphicsLeft}>
          <Icon name='home-sharp' size={22} />
          <Image source={require('../../assets/images/cardGraphicsLeft.png')} />
          <Text>Ural U20</Text>
        </View>

        <View style={cardStyle.cardGraphicsCentre}>
          <Text style={cardStyle.cardGraphicsCentreStatus}>First Half</Text>
          <Text style={cardStyle.cardGraphicsCentreScore}>3 : 2</Text>
          <View style={cardStyle.cardGraphicsCentreRadio}><Icon name='radio-button-on-outline' color='#E92742' size={15} /><Text style={cardStyle.cardGraphicsCentreRadioText}>68'</Text></View>
        </View>
        
        <View style={cardStyle.cardGraphicsRight}>
          <Icon name='airplane' size={22} />
          <Image source={require('../../assets/images/cardGraphicsLeft.png')} />
          <Text>Zenith U19</Text>
        </View>
      </View>
      
      <View style={cardStyle.cardDetails}>
        <View style={cardStyle.cardDetailsData}>
          <View style={cardStyle.cardDetailsDataKey}>
            <Text style={cardStyle.cardDetailsText}>Date & Time:</Text>
          </View>
          <View>
            <Text style={cardStyle.cardDetailsText}>2022-09-28 12:30</Text>
          </View>
        </View>
        <View style={cardStyle.cardDetailsData}>
          <View style={cardStyle.cardDetailsDataKey}>
            <Text style={cardStyle.cardDetailsText}>Venue:</Text>
          </View>
          <View>
            <Text style={cardStyle.cardDetailsText}>Sport Baza Bazhoviya</Text>
          </View>
        </View>
        <View style={cardStyle.cardDetailsData}>
          <View style={cardStyle.cardDetailsDataKey}>
            <Text style={cardStyle.cardDetailsText}>City:</Text>
          </View>
          <View>
            <Text style={cardStyle.cardDetailsText}>Sysert</Text>
          </View>
        </View>
        <View style={cardStyle.cardDetailsData}>
          <View style={cardStyle.cardDetailsDataKey}>
            <Text style={cardStyle.cardDetailsText}>Contry:</Text>
          </View>
          <View>
            <Text style={cardStyle.cardDetailsText}>Russia</Text>
          </View>
        </View>
        <View style={cardStyle.cardDetailsData}>
          <View style={cardStyle.cardDetailsDataKey}>
            <Text style={cardStyle.cardDetailsText}>Round:</Text>
          </View>
          <View>
            <Text style={cardStyle.cardDetailsText}>Regular Session- 10</Text>
          </View>
        </View>
      </View>

    </View>
  );
}

// const FixtureDetailCard = (props) => {
//   return(
//     <View style={cardStyle.fixtureDetailCardStyle}>

//       <View style={cardStyle.cardTitle}>
//         <View style={cardStyle.cardTitleLeft}>
//           <Image source={require('../../assets/images/cardTitleImage.png')} />
//           <Text style={cardStyle.cardTitleText}>{props.leagueName}</Text>
//         </View>
//         <View>
//           <Icon name='heart' color='#E92742' size={22} />
//         </View>
//       </View>
      
//       <View style={cardStyle.cardGraphics}>
//         <View style={cardStyle.cardGraphicsLeft}>
//           <Icon name='home-sharp' size={22} />
//           <Image source={props.hostTeamImage} />
//           <Text>{props.hostTeam}</Text>
//         </View>
//         <View style={cardStyle.cardGraphicsCentre}>
//           <Text style={cardStyle.cardGraphicsCentreStatus}>{props.half}</Text>
//           <Text style={cardStyle.cardGraphicsCentreScore}>3 : 2</Text>
//           <View style={cardStyle.cardGraphicsCentreRadio}><Icon name='radio-button-on-outline' color='#E92742' size={15} /><Text style={cardStyle.cardGraphicsCentreRadioText}>68'</Text></View>
//         </View>
        
//         <View style={cardStyle.cardGraphicsRight}>
//           <Icon name='airplane' size={22} />
//           <Image source={props.guestTeamImage} />
//           <Text>{props.guestTeam}</Text>
//         </View>
//       </View>
      
//       <View style={cardStyle.cardDetails}>
//         <View style={cardStyle.cardDetailsData}>
//           <View style={cardStyle.cardDetailsDataKey}>
//             <Text style={cardStyle.cardDetailsText}>Date & Time:</Text>
//           </View>
//           <View>
//             <Text style={cardStyle.cardDetailsText}>{props.dateTime}</Text>
//           </View>
//         </View>
//         <View style={cardStyle.cardDetailsData}>
//           <View style={cardStyle.cardDetailsDataKey}>
//             <Text style={cardStyle.cardDetailsText}>Venue:</Text>
//           </View>
//           <View>
//             <Text style={cardStyle.cardDetailsText}>{props.venue}</Text>
//           </View>
//         </View>
//         <View style={cardStyle.cardDetailsData}>
//           <View style={cardStyle.cardDetailsDataKey}>
//             <Text style={cardStyle.cardDetailsText}>City:</Text>
//           </View>
//           <View>
//             <Text style={cardStyle.cardDetailsText}>{props.city}</Text>
//           </View>
//         </View>
//         <View style={cardStyle.cardDetailsData}>
//           <View style={cardStyle.cardDetailsDataKey}>
//             <Text style={cardStyle.cardDetailsText}>Contry:</Text>
//           </View>
//           <View>
//             <Text style={cardStyle.cardDetailsText}>{props.contry}</Text>
//           </View>
//         </View>
//         <View style={cardStyle.cardDetailsData}>
//           <View style={cardStyle.cardDetailsDataKey}>
//             <Text style={cardStyle.cardDetailsText}>Round:</Text>
//           </View>
//           <View>
//             <Text style={cardStyle.cardDetailsText}>{props.round}</Text>
//           </View>
//         </View>
//       </View>

//     </View>
//   );
// }

export { FixtureDetailCard };