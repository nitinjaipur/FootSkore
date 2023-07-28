import { StyleSheet } from "react-native";
import { s, vs, ms, mvs } from 'react-native-size-matters';

const fixtureStyle = StyleSheet.create({
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
    // height: '78%',
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
    backgroundColor: '#fff'
  }
})

const globalSearchStyle = StyleSheet.create({
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

  searchBox: {
    width: '85%',
    height: '80%',
    backgroundColor: '#EBEBEB',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  serachTextInput: {
    backgroundColor: '#EBEBEB',
    height: 40
  },
  optionView: {
    backgroundColor: '#EBEBEB',
    margin: s(5)
  },

  bodyMatch: {
    height: '23%',
    width: '85%',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: s(20),
    backgroundColor: '#EBEBEB',
  },
  bodyHost: {
    height: '18%',
    width: '85%',
    borderRadius: 10,
    backgroundColor: '#EBEBEB',
    marginTop: s(20),
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  bodyStatus: {
    height: '26%',
    width: '85%',
    borderRadius: 10,
    backgroundColor: '#EBEBEB',
    marginTop: s(20),
    alignItems: 'center'
  },
  bodyHostMini: {
    height: '9%',
    width: '85%',
    borderRadius: 10,
    backgroundColor: '#EBEBEB',
    marginTop: s(20),
    alignItems: 'center',
    flexDirection: 'row'
  },

  bodyMatchDT: {
    height: '20%',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  bodyMatchBody: {
    height: '80%',
    flexDirection: 'row',
  },

  bodyMatchDTText: {
    fontWeight: '600',
    fontSize: s(13)
  },

  bodyMatchBodyLeft: {
    height: '95%',
    width: '25%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  bodyMatchBodyCentre: {
    height: '85%',
    width: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center'
  },
  bodyMatchBodyRight: {
    height: '95%',
    width: '25%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  bodyMatchBodyCentreStatus: {
    color: '#E92742',
    fontSize: s(15),
    fontWeight: 'bold'
  },
  bodyMatchBodyCentreScore: {
    fontSize: s(35),
    fontWeight: 'bold'
  },
  bodyMatchBodyCentreRadio: {
    backgroundColor: '#F5DDE6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: s(10),
    width: s(45),
    height: s(25)
  },
  bodyMatchBodyCentreRadioText: {
    color: '#E92742',
    fontSize: s(11),
  },
  bodyHostTitleText: {
    fontSize: s(20),
    fontWeight: '500'
  },

  bodyHostMiniTeam: {
    margin: s(2)
  },
  bodyHostMiniCountry: {
    margin: s(2),
    color: '#808797',
  },

  bodyStatusHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#808797',
    height: '30%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#808797'
  },
  bodyStatusDetails: {
    height: '70%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  bodyStatusHeaderCardTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  bodyStatusDetailsTeam: {
    height: '90%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bodyStatusDetailsT: {
    height: '50%',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  detailHolder: {
    flexDirection: 'row',
    marginLeft: s(10),
    flex: 1,
    justifyContent: 'space-between'}
})



export { fixtureStyle, globalSearchStyle };