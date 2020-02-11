import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';
import { MAIN_TEXT_COLOR } from '../../../constants/theme/colors';

const Input = ({ isReadOnly, type, placeholder, maxLength,
  iconName, iconType, iconColor, style }) => {
  const [value, onChangeValue] = useState('');
  return (
    <View style={[styles.container, style]}>
      <Icon
        name={iconName}
        type={iconType}
        color={iconColor}
      />
      <TextInput
        style={styles.input}
        onChangeText={(v) => onChangeValue(v)}
        value={value}
        maxLength={maxLength}
        editable={!isReadOnly}
        autoCompleteType={type}
        placeholder={placeholder}
      />
    </View>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  isReadOnly: PropTypes.bool,
  maxLength: PropTypes.number,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

Input.defaultProps = {
  type: 'off',
  placeholder: '',
  isReadOnly: false,
  maxLength: 300,
  iconName: null,
  iconType: null,
  iconColor: MAIN_TEXT_COLOR,
  style: null
};

export default Input;
