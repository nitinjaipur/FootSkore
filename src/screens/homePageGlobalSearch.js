import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchBox, FixtureCard, TeamCard, LiveCard, LeagueCard } from '../components/index';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: '#EBEBEB',
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
          <Icon name="arrow-back-outline" size={s(21)} color='#808797' />
          <SearchBox />
        </View>
        <View style={style.options}>
          <View style={[style.optionView, {backgroundColor: card==="Fixture"?'#E92742':'#EBEBEB'}]}>
            <Text onPress={() => {setCard('Fixture')}} >Fixture</Text>
          </View>
          <View style={[style.optionView, {backgroundColor: card==="Team"?'#E92742':'#EBEBEB'}]}>
            <Text onPress={() => {setCard('Team')}}>Team</Text>
          </View>
          <View style={[style.optionView, {backgroundColor: card==="Live"?'#E92742':'#EBEBEB'}]}>
            <Text onPress={() => {setCard('Live')}}>Live</Text>
          </View>
          <View style={[style.optionView, {backgroundColor: card==="League"?'#E92742':'#EBEBEB'}]}>
            <Text onPress={() => {setCard('League')}}>League</Text>
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