import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { NORMAL_TEXT_SIZE } from '../../../constants/theme/typography';
import { DISABLED_COLOR, MAIN_TEXT_COLOR } from '../../../constants/theme/colors';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: MAIN_TEXT_COLOR,
    fontSize: NORMAL_TEXT_SIZE,
  },
  disabled: {
    color: DISABLED_COLOR,
  },
});

const Button = ({ onPress, text, style, disabled }) => (
  <TouchableWithoutFeedback disabled={disabled} onPress={() => onPress()}>
    <View style={[styles.button, style, disabled ? styles.disabled : null]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableWithoutFeedback>
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