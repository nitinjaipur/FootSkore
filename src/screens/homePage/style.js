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
  }
})



export { fixtureStyle, globalSearchStyle };