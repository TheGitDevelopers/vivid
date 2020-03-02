import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NORMAL_TEXT_SIZE, NORMAL_TEXT_FONT_FAMILY } from '../../../constants/theme/typography';
import { DISABLED_COLOR, MAIN_TEXT_COLOR } from '../../../constants/theme/colors';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  text: {
    color: MAIN_TEXT_COLOR,
    fontSize: NORMAL_TEXT_SIZE,
    fontFamily: NORMAL_TEXT_FONT_FAMILY,
  },
  disabled: {
    color: DISABLED_COLOR,
  },
});

const Button = ({ onPress, text, style, disabled }) => (
  <TouchableOpacity disabled={disabled} onPress={() => onPress()}>
    <View style={[styles.button, style, disabled ? styles.disabled : null]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  style: null,
  disabled: false,
};

export default Button;
