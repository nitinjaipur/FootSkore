import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { themeDefault } from '../theme/index';

const style = StyleSheet.create({
  searchBox: {
    width: '85%',
    height: s(50),
    backgroundColor: themeDefault.colors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: s(15)
  },
  serachTextInput: {
    backgroundColor: themeDefault.colors.lightGray,
    height: s(34),
  }
});

const SearchBox = () => {
  return(
    <View style={style.searchBox}>
      <Icon name="search-outline" size={s(25)}  />
      <View style={{ width: '75%'}}>
        <TextInput style={style.serachTextInput} ></TextInput>
      </View>
      <Icon name="close-circle" size={s(21)} color={themeDefault.colors.darkGray} />
    </View>
    );
}

export { SearchBox };