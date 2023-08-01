import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';

const style = StyleSheet.create({
  main: {
    flexDirection: 'row',
    height: '20%',
    width: '100%',
    marginTop: s(20),
    borderRadius: s(10),
    padding: s(10),
    backgroundColor: '#EBEBEB'
  },
  dataContainer: {
    flex: 2
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },
  key: {
    width: '45%',
  },
  text: {
    color: '#808797',
  },
});

const InfoCoachCard = () => {
  return (
    <View style={style.main}>
      <View style={style.dataContainer}>
        <View style={style.row}>
          <Text>Coach</Text>
        </View>
        <View style={style.row}>
          <View style={style.key}>
            <Text style={style.text}>Country:</Text>
          </View>
          <View>
            <Text style={style.text}>USA</Text>
          </View>
        </View>
        <View style={style.row}>
          <View style={style.key}>
            <Text style={style.text}>Name:</Text>
          </View>
          <View>
            <Text style={style.text}>F. Klopas</Text>
          </View>
        </View>
        <View style={style.row}>
          <View style={style.key}>
            <Text style={style.text}>Age:</Text>
          </View>
          <View>
            <Text style={style.text}>56</Text>
          </View>
        </View>
        <View style={style.row}>
          <View style={style.key}>
            <Text style={style.text}>Nationality:</Text>
          </View>
          <View>
            <Text style={style.text}>USA</Text>
          </View>
        </View>
      </View>

      <View style={style.imageContainer}>
        <Image source={require('../assets/images/coach.png')} />
      </View>
    </View>
  );
};

export { InfoCoachCard };
