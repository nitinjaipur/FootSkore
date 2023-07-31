import React from 'react';
import { View, ScrollView, Text, FlatList, Image, StyleSheet} from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchBox, FixtureCard, TeamCard, LiveCard, LeagueCard } from '../components/index';

const TeamDetailInfo = () => {
  return(
    <View style={style.main}>
      <LeagueCard />
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: s(50),
    alignItems: 'center'
  },
});

export { TeamDetailInfo };