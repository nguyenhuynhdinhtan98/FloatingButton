import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class FloatingButton extends Component {
  animation = new Animated.Value(0);
  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;
    Animated.spring(this.animation, {
      toValue,
      bounciness: 10,
      // useNativeDriver: true,
    }).start();
    this.open = !this.open;
  };
  render() {
    const secondStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -60],
          }),
        },
      ],
    };
    const thirdStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -120],
          }),
        },
      ],
    };
    const fourStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -180],
          }),
        },
      ],
    };
    const firstStyle = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ],
    };
    const opacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0.5, 1],
    });

    const labelOpacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0.5, 1],
    });
    const labelPositionInterpolate = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -50],
    });
    const labelStyle = {
      opacity: labelOpacity,
      transform: [
        {
          translateX: labelPositionInterpolate,
        },
      ],
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <Animated.View
            style={[styles.button, styles.buttonChild, fourStyle, opacity]}>
            <Animated.Text style={[labelStyle]}>Label</Animated.Text>
            <Icon name="map" size={20} color="#F02A4B" style={styles.icon} />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Animated.View
            style={[styles.button, styles.buttonChild, thirdStyle, opacity]}>
            <Animated.Text style={[labelStyle]}>Label</Animated.Text>
            <Icon name="map" size={20} color="#F02A4B" style={styles.icon} />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Animated.View
            style={[styles.button, styles.buttonChild, secondStyle, opacity]}>
            <Animated.Text style={[labelStyle]}>Label</Animated.Text>
            <Icon
              name="thumbs-up"
              size={20}
              color="#F02A4B"
              style={styles.icon}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.toggleMenu()}>
          <Animated.View style={[styles.button, styles.menu, firstStyle]}>
            <Icon name="plus" size={20} color="#fff" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
    right: 50,
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowOpacity: 0.5,
    elevation: 20,
    shadowColor: '#F02A4B',
    shadowOffset: {height: 20, width: 20},
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: '#F02A4B',
  },
  buttonChild: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    elevation: 10,
    shadowOpacity: 0.5,
  },

  icon: {
    position: 'absolute',
  },
});
export default FloatingButton;
