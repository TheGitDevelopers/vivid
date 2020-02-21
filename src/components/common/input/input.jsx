import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';
import { MAIN_TEXT_COLOR, MAIN_THEME_COLOR } from '../../../constants/theme/colors';

const Input = ({
  isReadOnly,
  type,
  placeholder,
  maxLength,
  iconName,
  iconType,
  iconColor,
  style,
}) => {
  const [value, onChangeValue] = useState('');
  const [focusColor, setFocusColor] = useState(null);

  return (
    <View style={[styles.container, style]}>
      {iconName ? (
        <>
          {iconType === 'mci' ? (
            <MaterialCommunityIcons
              name={iconName}
              size={34}
              color={focusColor !== null ? focusColor : iconColor}
            />
          ) : (
            <SimpleLineIcons
              name={iconName}
              size={24}
              color={focusColor !== null ? focusColor : iconColor}
            />
          )}
        </>
      ) : null}
      <TextInput
        secureTextEntry={type === 'password'}
        style={styles.input}
        onChangeText={(v) => onChangeValue(v)}
        value={value}
        maxLength={maxLength}
        editable={!isReadOnly}
        autoCompleteType={type}
        placeholder={placeholder}
        onFocus={() => setFocusColor(MAIN_THEME_COLOR)}
        onBlur={() => setFocusColor(iconColor)}
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
  style: null,
};

export default Input;
