import React from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { FixtureDetailCard } from '../../components/index';
import Icon from 'react-native-vector-icons/Ionicons';
import { themeDefault } from '../../theme/index';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: s(20)
  },
  headerContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    width: '85%'
  },
  calenderContainer: {
    flex: 4,
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  flatListContainer: {
    flex: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerIconLeft: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '55%'
  },
  headerIconRight : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: s(20),
    fontWeight: 'bold'
  },
  calendarIconHolder: {
    width: s(40),
    height: s(40),
    borderRadius: s(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeDefault.colors.white
  }
});

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
    <View style={style.mainContainer}>
      <View style={style.headerContainer}>
        <View style={style.headerIconLeft}>
          <Icon name='reorder-three-outline' size={s(30)}></Icon>
          <Text style={style.headerText}>Match Fixture</Text>
        </View>
        <View style={{width: '25%'}}></View>
        <View style={style.headerIconRight}>
          <Icon name='notifications-outline' size={s(20)}></Icon>
          <Icon name='search-outline' size={s(20)}></Icon>
        </View>
      </View>
      <View style={style.calenderContainer}>
        <View style={style.calendarIconHolder}>
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
      <View style={style.flatListContainer}>
        <View >
          <FlatList
            data={calendarData}
            renderItem={
              ({item}) => {
                return(<FixtureDetailCard />);
              }
            }
            ItemSeparatorComponent={<View style={{height: s(20)}} />}
          />
        </View>
      </View>
    </ View>
  );
}

export { Fixture };