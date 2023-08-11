import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';

const DropDownComponent = (props) => {
  const [showContent, setShowContent] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleContent = () => {
    if (showContent) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setShowContent(false));
    } else {
      setShowContent(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const contentOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const contentHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50], // Adjust the height as needed
  });

  return (
    <View>
      <TouchableOpacity onPress={toggleContent}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
      <Animated.View style={{opacity: contentOpacity, height: contentHeight}}>
        {/* Your dropdown content goes here */}
        <Text>{props.text}</Text>
        {/* ... */}
      </Animated.View>
    </View>
  );
};

export { DropDownComponent };
