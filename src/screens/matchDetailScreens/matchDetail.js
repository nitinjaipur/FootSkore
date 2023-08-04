import React, { useState } from 'react';
import { View, ScrollView, Text, FlatList, Image, StyleSheet, StatusBar} from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchBox, FixtureCard, TeamCard, LiveCard, LeagueCard, InfoCard, InfoCoachCard, PlayerCard, StandingCard, MatchHeaderCard, MatchInfoCard, MatchInfoLeagueCard, MatchEventCard, MatchTeamCard, MatchLineupScoreCard, MatchLineupDetailCard, MatchStaticsDetailCard } from '../../components/index';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    backgroundColor: themeDefault.colors.red,
    height: '25%',
    width: '100%',
    paddingTop: s(60),
    paddingLeft: s(20),
    paddingRight: s(20),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heading: {
    color: themeDefault.colors.white,
    fontSize: s(24),
    fontFamily: themeDefault.fonts.TekoSemiBold
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
        <Icon name="arrow-back-outline" size={s(21)} color={themeDefault.colors.white} />
        <Text style={style.heading}>MATCH DETAILS</Text>
        <Icon name="star-outline" size={s(21)} color={themeDefault.colors.white} />
      </View>


      <View style={style.overlapView}>
        <MatchHeaderCard />        
        <View style={style.overlapContent}>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={style.optionList}>
            <View style={[style.options, { backgroundColor: option === "Info" ? themeDefault.colors.red : themeDefault.colors.lightGray }]}>
              <Text style={{ fontWeight: '700', color: option === "Info" ? themeDefault.colors.white : themeDefault.colors.darkGray }} onPress={() => { setOption('Info') }} >Info</Text>
            </View>
            <View style={[style.options, { backgroundColor: option === "Event" ? themeDefault.colors.red : themeDefault.colors.lightGray }]}>
              <Text style={{ fontWeight: '700', color: option === "Event" ? themeDefault.colors.white : themeDefault.colors.darkGray }} onPress={() => { setOption('Event') }} >Event</Text>
            </View>
            <View style={[style.options, { backgroundColor: option === "Statistics" ? themeDefault.colors.red : themeDefault.colors.lightGray }]}>
              <Text style={{ fontWeight: '700', color: option === "Statistics" ? themeDefault.colors.white : themeDefault.colors.darkGray }} onPress={() => { setOption('Statistics') }} >Statistics</Text>
            </View>
            <View style={[style.options, { backgroundColor: option === "Lineup" ? themeDefault.colors.red : themeDefault.colors.lightGray }]}>
              <Text style={{ fontWeight: '700', color: option === "Lineup" ? themeDefault.colors.white : themeDefault.colors.darkGray }} onPress={() => { setOption('Lineup') }} >Lineup</Text>
            </View>
            <View style={[style.options, { backgroundColor: option === "H2H" ? themeDefault.colors.red : themeDefault.colors.lightGray }]}>
              <Text style={{ fontWeight: '700', color: option === "H2H" ? themeDefault.colors.white : themeDefault.colors.darkGray }} onPress={() => { setOption('H2H') }} >H2H</Text>
            </View>
          </ScrollView>

          <View style={style.cardContainer}>
            <MatchTeamCard />
            <MatchLineupScoreCard />
            <MatchStaticsDetailCard />
          </View>

        </View>
      </View> 
    </ScrollView>
  );
}

export { MatchDetail };