import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { LeagueCard } from '../index';

const style = StyleSheet.create({
  main: {
    height: '95%',
    width: '100%',
    borderRadius: s(10),
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
  },
  leagueContainer: {
    flex: 3,
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  detailContainer: {
    flex: 4,
    height: '100%',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#808797'
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: s(10)
  },
  detailText: {
    fontSize: s(12)
  },
  match: {
    flex: 2,
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#808797'
  },
  statusTitle: {
    marginLeft: s(15),
    fontSize: s(14),
    fontWeight: '600'
  },
  statusDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  statusDetail: {
    alignItems: 'center'
  },
  status: {
    color: '#808797',
    fontSize: s(13)
  },
  leagueTitle: {
    fontSize: s(15),
    fontWeight: '600'
  },
  leagueImage: {
    height: s(70),
    width: s(70)
  }
});

const StandingCard = () => {
  return (
    <View style={style.main}>
      <View style={style.leagueContainer}>
        <Image source={require('../../assets/images/cardGraphicsLeft.png')} style={style.leagueImage} />
        <Text style={style.leagueTitle}>National Football League</Text>
      </View>
      <View style={style.detailContainer}>
        <View style={style.detail}>
          <Text style={style.detailText}>Ranking:</Text>
          <Text style={style.detailText}>1</Text>
        </View>
        <View style={style.detail}>
          <Text style={style.detailText}>Country:</Text>
          <Text style={style.detailText}>USA</Text>
        </View>
        <View style={style.detail}>
          <Text style={style.detailText}>Point:</Text>
          <Text style={style.detailText}>61</Text>
        </View>
        <View style={style.detail}>
          <Text style={style.detailText}>Group:</Text>
          <Text style={style.detailText}>Western Confereence</Text>
        </View>
        <View style={style.detail}>
          <Text style={style.detailText}>Description:</Text>
          <Text style={style.detailText}>Final Series</Text>
        </View>
      </View>
      <View style={style.match}>
          <Text style={style.statusTitle}>Total Match</Text>
          <View style={style.statusDetailContainer}>
            <View style={style.statusDetail}>
              <Text style={style.status}>Played</Text>
              <Text style={style.status}>31</Text>
            </View>
            <View style={style.statusDetail}>
              <Text style={style.status}>Win</Text>
              <Text style={style.status}>19</Text>
            </View>
            <View style={style.statusDetail}>
              <Text style={style.status}>Draw</Text>
              <Text style={style.status}>4</Text>
            </View>
            <View style={style.statusDetail}>
              <Text style={style.status}>Loss</Text>
              <Text style={style.status}>8</Text>
            </View>
          </View>
      </View>
      <View style={style.match}>
          <Text style={style.statusTitle}>Home Ground</Text>
          <View style={style.statusDetailContainer}>
            <View style={style.statusDetail}>
              <Text style={style.status}>Played</Text>
              <Text style={style.status}>31</Text>
            </View>
            <View style={style.statusDetail}>
              <Text style={style.status}>Win</Text>
              <Text style={style.status}>19</Text>
            </View>
            <View style={style.statusDetail}>
              <Text style={style.status}>Draw</Text>
              <Text style={style.status}>4</Text>
            </View>
            <View style={style.statusDetail}>
              <Text style={style.status}>Loss</Text>
              <Text style={style.status}>8</Text>
            </View>
          </View>
      </View>
      <View style={[style.match, { borderBottomWidth: 0}]}>
          <Text style={style.statusTitle}>Away Ground</Text>
          <View style={style.statusDetailContainer}>
            <View style={style.statusDetail}>
              <Text style={style.status}>Played</Text>
              <Text style={style.status}>31</Text>
            </View>
            <View style={style.statusDetail}>
              <Text style={style.status}>Win</Text>
              <Text style={style.status}>19</Text>
            </View>
            <View style={style.statusDetail}>
              <Text style={style.status}>Draw</Text>
              <Text style={style.status}>4</Text>
            </View>
            <View style={style.statusDetail}>
              <Text style={style.status}>Loss</Text>
              <Text style={style.status}>8</Text>
            </View>
          </View>
      </View>
    </View>
  );
};

export { StandingCard };
