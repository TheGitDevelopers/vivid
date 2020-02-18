import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Animated, Easing } from 'react-native';
import styles from './styled';

const animationDetails = {
  duration: 350,
  easing: Easing.bezier(0.23, 1, 0.32, 1),
  useNativeDriver: true,
};

const MenuIcon = ({ style, isHidden }) => {
  const [lineAnim] = useState(new Animated.Value(0));
  const [opacityAnim] = useState(new Animated.Value(1));
  const [rotationAnim] = useState(new Animated.Value(0));
  const [crossAnim] = useState(new Animated.Value(0));

  const hide = () => {
    Animated.stagger(150, [
      Animated.timing(lineAnim, {
        ...animationDetails,
        toValue: 1,
      }),
      Animated.timing(opacityAnim, {
        ...animationDetails,
        toValue: 0,
      }),
      Animated.timing(rotationAnim, {
        ...animationDetails,
        toValue: 1,
      }),
      Animated.timing(crossAnim, {
        ...animationDetails,
        toValue: 1,
      }),
    ]).start();
  };

  const show = () => {
    Animated.stagger(150, [
      Animated.timing(crossAnim, {
        ...animationDetails,
        toValue: 0,
      }),
      Animated.timing(rotationAnim, {
        ...animationDetails,
        toValue: 0,
      }),
      Animated.timing(opacityAnim, {
        ...animationDetails,
        toValue: 1,
      }),
      Animated.timing(lineAnim, {
        ...animationDetails,
        toValue: 0,
      }),
    ]).start();
  };

  useEffect(() => {
    if (isHidden === true) {
      hide();
    } else if (isHidden === false) {
      show();
    }
  }, [isHidden]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              rotate: rotationAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '180deg'],
              }),
            },
          ],
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.firstLine,
          {
            transform: [
              {
                translateY: lineAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 8],
                }),
              },
              {
                rotate: crossAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '45deg'],
                }),
              },
            ],
          },
        ]}
      />
      <Animated.View style={[styles.midLine, { opacity: opacityAnim }]} />
      <Animated.View
        style={[
          styles.endLine,
          {
            transform: [
              {
                translateY: lineAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -8],
                }),
              },
              {
                rotate: crossAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '-45deg'],
                }),
              },
            ],
          },
        ]}
      />
    </Animated.View>
  );
};

MenuIcon.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string),
    PropTypes.objectOf(PropTypes.number),
  ]),
  isHidden: PropTypes.oneOfType([PropTypes.bool], null),
};

MenuIcon.defaultProps = {
  style: null,
  isHidden: null,
};

export default MenuIcon;
