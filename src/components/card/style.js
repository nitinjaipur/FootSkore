import React from 'react';
import { StyleSheet } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';

const cardStyle = StyleSheet.create({
  fixtureDetailCardStyle: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#EBEBEB',
    borderRadius: 5,
    borderColor: 'black',
  },

  cardTitle: {
    height: '10%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardGraphics: {
    height: '50%',
    width: '90%',
    flexDirection: 'row',
    borderBottomColor: '#808797',
    borderBottomWidth: 1
  },
  cardDetails: {
    height: '35%',
    width: '90%',
    flexDirection: 'column',
    marginTop: 5
  },

  cardTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  cardGraphicsLeft: {
    height: '95%',
    width: '25%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  cardGraphicsCentre: {
    height: '85%',
    width: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center'
  },
  cardGraphicsRight: {
    height: '95%',
    width: '25%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  cardDetailsData: {
    height: '20%',
    width: '100%',
    flexDirection: 'row'
  },
  cardDetailsDataKey: {
    width: '30%',
  },
  
  cardGraphicsCentreStatus: {
    color: '#E92742',
    fontSize: s(15),
    fontWeight: 'bold'
  },
  cardGraphicsCentreScore: {
    fontSize: s(35),
    fontWeight: 'bold'
  },
  cardGraphicsCentreRadio: {
    backgroundColor: '#F5DDE6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: s(10),
    width: s(45),
    height: s(25)
  },
  cardGraphicsCentreRadioText: {
    color: '#E92742',
    fontSize: s(11),
  },

  cardTitleText: {
    fontWeight: 'bold',
    fontSize: s(10),
  },
  cardDetailsText : {
    color: '#808797'
  }

});


export { cardStyle };