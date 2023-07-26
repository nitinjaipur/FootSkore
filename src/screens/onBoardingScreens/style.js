import { StyleSheet } from "react-native";
import { s, vs, ms, mvs } from 'react-native-size-matters';

const onBoardingScreensStyle = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: s(17)
  },
  headerText: {
    fontSize: s(26),
    fontWeight: '800',
  },
  detailContainer: {
    alignItems: 'center',
    marginLeft: s(30),
    marginRight: s(30),
  },
  detailText: {
    textAlign: 'center',
    color: '#808797',
    fontSize: s(13),
    lineHeight: s(24)
  },
  buttonContainer: {
    marginBottom: s(105),
    alignSelf: 'center',
    width: '95%',
  },
  detailContainerWelcome2: {
    alignItems: 'center',
    marginLeft: s(47),
    marginRight: s(47)
  },
  buttonContainerWelcome2: {
    marginBottom: s(68),
    alignSelf: 'center',
    width: '95%',
  }
});

export { onBoardingScreensStyle };