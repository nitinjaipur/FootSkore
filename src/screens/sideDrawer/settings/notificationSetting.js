import React, { useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { View, Text, StyleSheet, Switch, Pressable} from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { themeDefault } from '../../../theme/index';
const MARGIN = getStatusBarHeight()

const style = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: MARGIN
  },
  top: {
    height: s(70),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: s(30)
  },
  middle: {
    flex: 1,
    paddingLeft: s(30),
    paddingRight: s(30),
    justifyContent: 'flex-start',
  },
  header: {
    marginLeft: s(50)
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: themeDefault.colors.darkGray,
    height: s(40),
    marginTop: s(8)
  },
  text: {
    fontSize: s(13),
    fontWeight: '600'
  }
});

const NotificationSettings = ({navigation}) => {
  const [match, setMatch] = useState(false);
  const [starter, setStarter] = useState(false);
  const [halfTime, setHalfTime] = useState(false);
  const [fullTime, setFullTime] = useState(false);
  const [goals, setGoals] = useState(false);
  const [redCards, setRedCards] = useState(false);
  const [lineup, setLineup] = useState(false);
  return(
    <View style={style.main}>
      <View style={style.top}>
        <Pressable onPress={() => {navigation.goBack()}}>
          <Icon name="arrow-back-outline" size={s(21)} color={themeDefault.colors.black} />
        </Pressable>
        <Text style={style.header}>NOTIFICATION SETTINGS</Text>
      </View> 
      <View style={style.middle}>
        <View style={style.options}>
          <Text style={style.text}>Match Reminder</Text>
          <Switch
            value={match}
            onValueChange={() => {setMatch(!match);}}
            trackColor={{false: themeDefault.colors.darkGray, true: themeDefault.colors.red}}
            style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }], width: s(25) }}
          />
        </View>
        <View style={style.options}>
          <Text style={style.text}>Starter</Text>
          <Switch
            value={starter}
            onValueChange={() => {setStarter(!starter);}}
            trackColor={{false: themeDefault.colors.darkGray, true: themeDefault.colors.red}}
            style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }], width: s(25) }}
          />
        </View>
        <View style={style.options}>
          <Text style={style.text}>Half Time</Text>
          <Switch
            value={halfTime}
            onValueChange={() => {setHalfTime(!halfTime);}}
            trackColor={{false: themeDefault.colors.darkGray, true: themeDefault.colors.red}}
            style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }], width: s(25) }}
          />
        </View>
        <View style={style.options}>
          <Text style={style.text}>Full Time</Text>
          <Switch
            value={fullTime}
            onValueChange={() => {setFullTime(!fullTime);}}
            trackColor={{false: themeDefault.colors.darkGray, true: themeDefault.colors.red}}
            style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }], width: s(25) }}
          />
        </View>
        <View style={style.options}>
          <Text style={style.text}>Goals</Text>
          <Switch
            value={goals}
            onValueChange={() => {setGoals(!goals);}}
            trackColor={{false: themeDefault.colors.darkGray, true: themeDefault.colors.red}}
            style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }], width: s(25) }}
          />
        </View>
        <View style={style.options}>
          <Text style={style.text}>Red Cards</Text>
          <Switch
            value={redCards}
            onValueChange={() => {setRedCards(!redCards);}}
            trackColor={{false: themeDefault.colors.darkGray, true: themeDefault.colors.red}}
            style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }], width: s(25) }}
          />
        </View>
        <View style={style.options}>
          <Text style={style.text}>Lineup</Text>
          <Switch
            value={lineup}
            onValueChange={() => {setLineup(!lineup);}}
            trackColor={{false: themeDefault.colors.darkGray, true: themeDefault.colors.red}}
            style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }], width: s(25) }}
          />
        </View>
      </View>
    </View>
  );
}

export { NotificationSettings };