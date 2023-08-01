import React, { useState } from 'react';
import { View, ScrollView, Text, FlatList, Image, StyleSheet, StatusBar} from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchBox, FixtureCard, TeamCard, LiveCard, LeagueCard, InfoCard, InfoCoachCard, PlayerCard, StandingCard } from '../components/index';

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#E92742',
    height: '25%',
    width: '100%',
    paddingTop: s(60),
    paddingLeft: s(20),
    paddingRight: s(20),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heading: {
    color: '#fff',
    fontSize: s(16),
    fontWeight: '900'
  },
  overlapView: {
    zIndex: 1,
    height: '100%',
    width: '100%',
    marginTop: -s(80),
    alignItems: 'center',
  },
  overlapContent: {
    flex: 1,
    height: '100%',
    width: '85%',
    justifyContent: 'flex-start',
  },
  optionList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  options: {
    margin: s(3),
    height: s(25),
    width: s(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(15),
    padding: s(3)
  },
  cardContainer: {
    marginTop: s(25),
    flex: 1
  }

  
});


const TeamDetailInfo = () => {
  const [option, setOption] = useState('Info');
  return(
    <ScrollView contentContainerStyle={style.main}>
      <StatusBar barStyle='light-content' />
      <View style={style.header}>
        <Icon name="arrow-back-outline" size={s(21)} color='#fff' />
        <Text style={style.heading}>TEAM DETAILS</Text>
        <Icon name="star-outline" size={s(21)} color='#fff' />
      </View>
      <View style={style.overlapView}>
        <TeamCard />
        <View style={style.overlapContent}>       
          <View style={style.optionList}>
            <View style={[style.options, { backgroundColor: option === "Info" ? '#E92742' : '#EBEBEB' }]}>
              <Text style={{ fontWeight: '700', color: option === "Info" ? '#fff' : '#808797' }} onPress={() => { setOption('Info') }} >Info</Text>
            </View>
            <View style={[style.options, { backgroundColor: option === "Fixture" ? '#E92742' : '#EBEBEB' }]}>
              <Text style={{ fontWeight: '700', color: option === "Fixture" ? '#fff' : '#808797' }} onPress={() => { setOption('Fixture') }} >Fixture</Text>
            </View>
            <View style={[style.options, { backgroundColor: option === "Player" ? '#E92742' : '#EBEBEB' }]}>
              <Text style={{ fontWeight: '700', color: option === "Player" ? '#fff' : '#808797' }} onPress={() => { setOption('Player') }} >Player</Text>
            </View>
            <View style={[style.options, { backgroundColor: option === "Standing" ? '#E92742' : '#EBEBEB' }]}>
              <Text style={{ fontWeight: '700', color: option === "Standing" ? '#fff' : '#808797' }} onPress={() => { setOption('Standing') }} >Standing</Text>
            </View>
          </View>
          <View style={style.cardContainer}>
            {
              option === 'Info' ?
              <>
                <InfoCard />
                <InfoCoachCard />
              </>:
              option === 'Fixture' ?
              <FixtureCard />:
              option === 'Player' ?
              <PlayerCard />:
              <StandingCard />
            }
          </View>
        </View>
      </View> 
    </ScrollView>
  );
}

export { TeamDetailInfo };