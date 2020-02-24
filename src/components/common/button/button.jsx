import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NORMAL_TEXT_SIZE } from '../../../constants/theme/typography';
import { DISABLED_COLOR, MAIN_THEME_COLOR } from '../../../constants/theme/colors';

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
  },
  disabled: {
    backgroundColor: DISABLED_COLOR,
  },
});

const Button = ({ onPress, text, style, disabled, iconName, iconColor }) => (
  <TouchableOpacity style={{ width: '100%' }} disabled={disabled} onPress={() => onPress()}>
    <View style={[styles.button, style, disabled ? styles.disabled : null]}>
      {iconName ? (
        <MaterialCommunityIcons
          style={{ marginRight: 5 }}
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
