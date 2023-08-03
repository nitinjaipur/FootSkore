import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchBox, FixtureCard, TeamCard, LiveCard, LeagueCard } from '../../components/index';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeDefault.colors.white,
    marginTop: s(26)
  },
  headerMain: {
    flex: 1.5,
  },
  header: {
    flex: 1,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  options: {
    flex: 0.5,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    width: '70%',
    alignSelf: 'center',
    marginLeft: s(40),
    alignItems: 'center',
  },
  body: {
    flex: 10,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  optionView: {
    margin: s(3),
    height: s(25),
    width: s(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(5),
    padding: s(5)
  },
  bodyMatch: {
    height: '23%',
    width: '85%',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: s(20),
    backgroundColor: themeDefault.colors.lightGray,
  },
  bodyMatchDT: {
    height: '20%',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyMatchDTText: {
    fontWeight: '600',
    fontSize: s(13)
  }
});


const GlobalSearch = () => {
  const [card, setCard] = useState('all');
  return(
    <View style={style.container}>
      <View style={style.headerMain}>
        <View style={style.header}>
          <Icon name="arrow-back-outline" size={s(21)} color={themeDefault.colors.darkGray} />
          <SearchBox />
        </View>
        <View style={style.options}>
          <View style={ [style.optionView, { backgroundColor: card === "Fixture" ? themeDefault.colors.red : themeDefault.colors.lightGray }] }>
            <Text style={{ fontWeight: '700', color: card === "Fixture" ? themeDefault.colors.white : themeDefault.colors.darkGray }} onPress={() => { card !== 'Fixture' ? setCard('Fixture') : setCard('all') }} >Fixture</Text>
          </View>
          <View style={ [style.optionView, { backgroundColor: card === "Team" ? themeDefault.colors.red : themeDefault.colors.lightGray }] }>
            <Text style={{ fontWeight: '700', color: card === "Team" ? themeDefault.colors.white : themeDefault.colors.darkGray }} onPress={() => { card !== 'Team' ? setCard('Team') : setCard('all') }}>Team</Text>
          </View>
          <View style={ [style.optionView, { backgroundColor: card === "Live" ? themeDefault.colors.red : themeDefault.colors.lightGray }] }>
            <Text style={{ fontWeight: '700', color: card === "Live" ? themeDefault.colors.white : themeDefault.colors.darkGray }} onPress={() => { card !== 'Live' ? setCard('Live') : setCard('all') }}>Live</Text>
          </View>
          <View style={ [style.optionView, { backgroundColor: card === "League" ? themeDefault.colors.red : themeDefault.colors.lightGray }] }>
            <Text style={{ fontWeight: '700', color: card === "League" ? themeDefault.colors.white : themeDefault.colors.darkGray }} onPress={() => { card !== 'League' ? setCard('League') : setCard('all') }}>League</Text>
          </View>
        </View>
      </View>
      <View style={style.body}>
        {
           card === "all" ?
           <>
            <View style={style.bodyMatch}>
                <View style={style.bodyMatchDT}>
                  <Text style={style.bodyMatchDTText}>2022-09-09</Text>
                  <Text style={style.bodyMatchDTText}>12:30</Text>
                </View>
                <FixtureCard />
            </View>
            <TeamCard />
            <LiveCard />
            <LeagueCard />
          </>:
          card === "Fixture" ?
          <View style={style.bodyMatch}>
            <View style={style.bodyMatchDT}>
              <Text style={style.bodyMatchDTText}>2022-09-09</Text>
              <Text style={style.bodyMatchDTText}>12:30</Text>
            </View>
            <FixtureCard />
          </View>:
          card === "Team" ?
            <TeamCard />:
          card === "Live" ?
            <LiveCard />:
          <LeagueCard />
        }
      </View>
    </View>
  );
}

export { GlobalSearch };