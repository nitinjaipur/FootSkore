import React, {useState} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {themeDefault} from '../../theme/index';
import Icon from 'react-native-vector-icons/Ionicons';
const MARGIN = getStatusBarHeight();

const data = [
  {
    id: 1,
    question: 'What is Foot App?'
  },
  {
    id: 2,
    question: 'How Foot App works?'
  },
  {
    id: 3,
    question: 'What should I do if not able to log in?'
  },
  {
    id: 4,
    question: 'Is there any subscription of using Foot App?'
  },
  {
    id: 5,
    question: 'How to update password?'
  }
]

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
  bottom: {
    flex: 2,
    paddingLeft: s(18),
    paddingRight: s(18),
  },
  header: {},
  question: {
    fontWeight: '500',
    fontSize: s(13)
  },
  questionBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: s(20)
  },
  solution: {
    marginBottom: s(20),
    fontSize: s(13),
    fontWeight: '300',
    lineHeight: s(22)
  },
  intro: {
    marginBottom: s(20),
    height: s(35),
    justifyContent: 'space-between'
  },
  introText: {
    color: themeDefault.colors.darkGray,
    fontSize:s(11),
    fontWeight: '600'
  }
});

const Question = (props) => {
  const [hidden, setHidden] = useState(true);
  return(
    <>
      <Pressable onPress={() => {setHidden(!hidden);}}>
        <View style={style.questionBody}>
          <Text style={style.question}>{props.title}</Text>
          <Icon name={hidden ? 'caret-down-outline' : 'caret-up-outline'} size={s(13)} color={themeDefault.colors.black} />
        </View>
      </Pressable>
      {
        !hidden ? 
          <Text style={style.solution}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
            quip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate
          </Text>: null
      }
    </>
  );
}

const FAQ = ({navigation}) => {
  return (
    <View style={style.main}>
      <View style={style.top}>
        <Text style={style.header}>FAQ</Text>
      </View>
      <View style={style.bottom}>
        <View style={style.intro}>
          <Text style={style.question}>Questions</Text>
          <Text style={style.introText}>Frequently Asked</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => <Question title={item.question} />}
        />
      </View>
    </View>
  );
};

export { FAQ };
