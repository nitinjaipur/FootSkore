import React, { useState } from 'react';
import { View, ScrollView, Text, FlatList, Image, StyleSheet, StatusBar} from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchBox, FixtureCard, TeamCard, LiveCard, LeagueCard, InfoCard, InfoCoachCard, PlayerCard, StandingCard, MatchHeaderCard, MatchInfoCard, MatchInfoLeagueCard, MatchEventCard, MatchTeamCard, MatchLineupScoreCard, MatchLineupDetailCard } from '../../components/index';

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
    marginTop: s(20)
  },
  optionList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '10%'
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
    height: '90%',
    width: '100%',
  }

  
});


const MatchDetail = () => {
  const [option, setOption] = useState('Info');
  return(
    <ScrollView contentContainerStyle={style.main}>
      <StatusBar barStyle='light-content' />
      <View style={style.header}>
        <Icon name="arrow-back-outline" size={s(21)} color='#fff' />
        <Text style={style.heading}>MATCH DETAILS</Text>
        <Icon name="star-outline" size={s(21)} color='#fff' />
      </View>


      <View style={style.overlapView}>
        <MatchHeaderCard />        
        <View style={style.overlapContent}>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={style.optionList}>
            <View style={[style.options, { backgroundColor: option === "Info" ? '#E92742' : '#EBEBEB' }]}>
              <Text style={{ fontWeight: '700', color: option === "Info" ? '#fff' : '#808797' }} onPress={() => { setOption('Info') }} >Info</Text>
            </View>
            <View style={[style.options, { backgroundColor: option === "Event" ? '#E92742' : '#EBEBEB' }]}>
              <Text style={{ fontWeight: '700', color: option === "Event" ? '#fff' : '#808797' }} onPress={() => { setOption('Event') }} >Event</Text>
            </View>
            <View style={[style.options, { backgroundColor: option === "Statistics" ? '#E92742' : '#EBEBEB' }]}>
              <Text style={{ fontWeight: '700', color: option === "Statistics" ? '#fff' : '#808797' }} onPress={() => { setOption('Statistics') }} >Statistics</Text>
            </View>
            <View style={[style.options, { backgroundColor: option === "Lineup" ? '#E92742' : '#EBEBEB' }]}>
              <Text style={{ fontWeight: '700', color: option === "Lineup" ? '#fff' : '#808797' }} onPress={() => { setOption('Lineup') }} >Lineup</Text>
            </View>
            <View style={[style.options, { backgroundColor: option === "H2H" ? '#E92742' : '#EBEBEB' }]}>
              <Text style={{ fontWeight: '700', color: option === "H2H" ? '#fff' : '#808797' }} onPress={() => { setOption('H2H') }} >H2H</Text>
            </View>
          </ScrollView>

          <View style={style.cardContainer}>
            <MatchTeamCard />
            <MatchLineupScoreCard />
            <MatchLineupDetailCard />
          </View>

        </View>
      </View> 
    </ScrollView>
  );
}

export { MatchDetail };