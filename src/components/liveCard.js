import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';

const style = StyleSheet.create({
  container: {
    height: '26%',
    width: '85%',
    borderRadius: 10,
    backgroundColor: '#EBEBEB',
    marginTop: s(20),
    alignItems: 'center'
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#808797',
    height: '30%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#808797'
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  body: {
    height: '70%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  teams: {
    height: '90%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  teamsLive: {
    height: '50%',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  detailHolder: {
    flexDirection: 'row',
    marginLeft: s(10),
    flex: 1,
    justifyContent: 'space-between'},
});

const LiveCard = () => {
  return(
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.headerLeft}>
          <Image source={require('../assets/images/cardTitleImage.png')} />
          <Text>UEFA Champion League</Text>
        </View>
        <Text style={{color: '#808797'}}>USA</Text>
      </View>
      <View style={style.body}>
        <Text style={{color: '#E92742', fontSize: s(12), fontWeight: '600'}}>68'</Text>
        <View style={style.teams}>
          <View style={[style.teamsLive, {borderBottomWidth: 1, borderBottomColor: '#808797' }]}>
            <Image source={require('../assets/images/cardTitleImage.png')} />
            <View style={style.detailHolder}>
              <Text>Manchester United</Text>
              <Text style={{color: '#1F8E4B'}}>2</Text>
            </View>
          </View>
          <View style={style.teamsLive}>
            <Image source={require('../assets/images/cardTitleImage.png')} />
            <View style={style.detailHolder}>
              <Text>Rewa</Text>
              <Text style={{color: '#1F8E4B'}}>1</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    );
}

export { LiveCard };