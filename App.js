/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import FloatingButton from './src/FloatingButton';
const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/Honor.jpg')}
        style={{opacity: 0.5, flex: 1}}
      />
      <FloatingButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
