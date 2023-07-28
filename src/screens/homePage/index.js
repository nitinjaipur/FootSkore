import React from 'react';
import { View, ScrollView, Text, FlatList, Image} from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { FixtureDetailCard } from '../../components/index';
import { fixtureStyle, globalSearchStyle } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';

const calendarData = [
  {
    id: '7',
    title: 'Sunday',
  },
  {
    id: '8',
    title: 'Monday',
  },
  {
    id: '9',
    title: 'Tuesday',
  },
  {
    id: '10',
    title: 'Wednesday',
  },
  {
    id: '11',
    title: 'Thursday',
  },
  {
    id: '12',
    title: 'Friday',
  },
  {
    id: '14',
    title: 'Saturday',
  },
  {
    id: '15',
    title: 'Sunday',
  }
];

const CalenderList = () => {
  return(
    <View style={{ height: s(20), width: s(20), borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>

    </View>
  );
}


const Fixture = () => {
  return(
    <View style={fixtureStyle.mainContainer}>

      <View style={fixtureStyle.headerContainer}>
        <View style={fixtureStyle.headerIconLeft}>
          <Icon name='reorder-three-outline' size={s(30)}></Icon>
          <Text style={fixtureStyle.headerText}>Match Fixture</Text>
        </View>
        <View style={{width: '25%'}}></View>
        <View style={fixtureStyle.headerIconRight}>
          <Icon name='notifications-outline' size={s(20)}></Icon>
          <Icon name='search-outline' size={s(20)}></Icon>
        </View>
      </View>

      <View style={fixtureStyle.calenderContainer}>
        <View style={fixtureStyle.calendarIconHolder}>
          <Icon name='calendar-outline' color='skyblue' size={s(25)}></Icon>
        </View>
        <View style={{flex: 1}}>
          <FlatList 
            data={calendarData}
            renderItem={
              ({item}) => {
                return(<Text>{item.title}</Text>);
              }
            }
            horizontal={true}
          />
        </View>
      </View>

      <View style={fixtureStyle.flatListContainer}>
        <View style={{ height: '100%', width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
          <FixtureDetailCard />
        </View>
      </View>

    </ View>
  );
}

const GlobalSearch = () => {
  return(
    <View style={globalSearchStyle.container}>
       
      <View style={globalSearchStyle.headerMain}>
        <View style={globalSearchStyle.header}>
          <Icon name="arrow-back-outline" size={s(21)} color='#808797' />
          <View style={globalSearchStyle.searchBox}>
            <Icon name="search-outline" size={s(25)}  />
            <View style={{ width: '75%'}}>
              <TextInput style={globalSearchStyle.serachTextInput} ></TextInput>
            </View>
            <Icon name="close-circle" size={s(21)} color='#808797'  />
          </View>
        </View>
        <View style={globalSearchStyle.options}>
          <View style={globalSearchStyle.optionView}>
            <Text>Fixture</Text>
          </View>
          <View style={globalSearchStyle.optionView}>
            <Text>Team</Text>
          </View>
          <View style={globalSearchStyle.optionView}>
            <Text>Live</Text>
          </View>
          <View style={globalSearchStyle.optionView}>
            <Text>League</Text>
          </View>
        </View>
      </View>
      
      <View style={globalSearchStyle.body}>

        <View style={globalSearchStyle.bodyMatch}>
          <View style={globalSearchStyle.bodyMatchDT}>
            <Text style={globalSearchStyle.bodyMatchDTText}>2022-09-09</Text>
            <Text style={globalSearchStyle.bodyMatchDTText}>12:30</Text>
          </View>
          <View style={globalSearchStyle.bodyMatchBody}>
            <View style={globalSearchStyle.bodyMatchBodyLeft}>
              <Icon name='home-sharp' size={22} />
              <Image source={require('../../assets/images/cardGraphicsLeft.png')} />
              <Text>Manchester United</Text>
            </View>
            <View style={globalSearchStyle.bodyMatchBodyCentre}>
              <Text style={globalSearchStyle.bodyMatchBodyCentreStatus}>First Half</Text>
              <Text style={globalSearchStyle.bodyMatchBodyCentreScore}>3 : 2</Text>
              <View style={globalSearchStyle.bodyMatchBodyCentreRadio}><Icon name='radio-button-on-outline' color='#E92742' size={15} /><Text style={globalSearchStyle.bodyMatchBodyCentreRadioText}>68'</Text></View>
            </View>
            <View style={globalSearchStyle.bodyMatchBodyRight}>
              <Icon name='airplane' size={22} />
              <Image source={require('../../assets/images/cardGraphicsLeft.png')} />
              <Text>Zenith U19</Text>
            </View>
          </View>
        </View>

        <View style={globalSearchStyle.bodyHost}>
          <Image source={require('../../assets/images/cardGraphicsLeft.png')} style={{height: s(50), width: s(50)}} />
          <Text style={globalSearchStyle.bodyHostTitleText}>Manchester United</Text>
        </View>

        <View style={globalSearchStyle.bodyStatus}>
          <View style={globalSearchStyle.bodyStatusHeader}>
            <View style={globalSearchStyle.bodyStatusHeaderCardTitleLeft}>
              <Image source={require('../../assets/images/cardTitleImage.png')} />
              <Text style={globalSearchStyle.cardTitleText}>UEFA Champion League</Text>
            </View>
            <Text style={{color: '#808797'}}>USA</Text>
          </View>

          <View style={globalSearchStyle.bodyStatusDetails}>
            <Text style={{color: '#E92742', fontSize: s(12), fontWeight: '600'}}>68'</Text>
            <View style={globalSearchStyle.bodyStatusDetailsTeam}>
              <View style={[globalSearchStyle.bodyStatusDetailsT, {borderBottomWidth: 1, borderBottomColor: '#808797' }]}>
              <Image source={require('../../assets/images/cardTitleImage.png')} />
                <View style={globalSearchStyle.detailHolder}>
                  <Text>Manchester United</Text>
                  <Text style={{color: '#1F8E4B'}}>2</Text>
                </View>
              </View>
              <View style={globalSearchStyle.bodyStatusDetailsT}>
                <Image source={require('../../assets/images/cardTitleImage.png')} />
                <View style={globalSearchStyle.detailHolder}>
                  <Text>Rewa</Text>
                  <Text style={{color: '#1F8E4B'}}>1</Text>
                </View>
              </View>
            </View>
          </View>

        </View>

        <View style={globalSearchStyle.bodyHostMini}>
          <Image source={require('../../assets/images/cardGraphicsLeft.png')} />
          <View style={{marginLeft: s(10)}}>
            <Text style={globalSearchStyle.bodyHostMiniTeam}>Manchester United</Text>
            <Text style={globalSearchStyle.bodyHostMiniCountry}>England</Text>
          </View>
        </View>

      </View>

    </View>
  );
}




export { Fixture, GlobalSearch };