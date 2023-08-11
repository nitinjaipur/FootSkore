import React, {useState} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {themeDefault} from '../../theme/index';
import Icon from 'react-native-vector-icons/Ionicons';
import {DropDownComponent} from '../../components/index';
const MARGIN = getStatusBarHeight();

const style = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: MARGIN,
  },
  top: {
    height: s(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 1,
    paddingLeft: s(25),
    paddingRight: s(25),
  },
  bottom: {
    flex: 2,
    paddingLeft: s(15),
    paddingRight: s(15),
  },
  header: {},
  imageContainer: {
    backgroundColor: themeDefault.colors.red,
    height: s(170),
    borderRadius: s(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    marginTop: s(10),
    color: themeDefault.colors.white,
    fontSize: s(13),
    fontWeight: '800',
  },
  contact: {
    alignItems: 'center',
    marginTop: s(50),
    height: s(70),
    justifyContent: 'space-between',
  },
  contactText: {
    fontSize: s(15),
    fontWeight: '600',
  },
});

const FAQ = ({navigation}) => {
  const [hiddenA, setHiddenA] = useState(true);
  return (
    <View style={style.main}>
      <View style={style.top}>
        <Text style={style.header}>FAQ</Text>
      </View>

      <View style={style.bottom}>
        <View>
          <Text>Questions</Text>
          <Text>Frequently Asked</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: s(12) }}>
          <Text>What is Foot App?</Text>
          <Pressable onPress={() => {setHiddenA(!hiddenA);}}>
            <Icon name={hiddenA ? 'caret-down-outline' : 'caret-up-outline'} size={s(13)} color={themeDefault.colors.black} />
          </Pressable>
        </View>

        {
          !hiddenA ? 
            <Text style={{marginTop: s(12)}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
              quip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate
            </Text>: null
        }

      </View>
    </View>
  );
};

export {FAQ};
