import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { NORMAL_TEXT_SIZE, NORMAL_TEXT_FONT_FAMILY } from '../../../constants/theme/typography';
import { DISABLED_COLOR, MAIN_THEME_COLOR } from '../../../constants/theme/colors';
import spinner from '../../../animations/spinner';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 20,
    borderRadius: 60,
    backgroundColor: MAIN_THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    textTransform: 'uppercase',
    color: '#ffffff',
    fontSize: NORMAL_TEXT_SIZE,
    fontFamily: NORMAL_TEXT_FONT_FAMILY,
  },
  disabled: {
    backgroundColor: DISABLED_COLOR,
  },
});

const hasAnimations = (iconName) => {
  if (iconName === 'loading') return { transform: [{ rotate: spinner }] };
  return { transform: [] };
}

const AnimatedIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);

const Button = ({ onPress, text, style, disabled, iconName, iconColor }) => (
  <TouchableOpacity style={{ width: '100%' }} disabled={disabled} onPress={() => onPress()}>
    <View style={[styles.button, style, disabled ? styles.disabled : null]}>
      {iconName ? (
        <AnimatedIcon
          style={[{ marginRight: 5 }, hasAnimations(iconName)]}
          name={iconName}
          size={24}
          color={iconColor}
        />
      ) : null}
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  disabled: PropTypes.bool,
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
};

Button.defaultProps = {
  style: null,
  disabled: false,
  iconColor: '#fff',
  iconName: null,
};

export default Button;
