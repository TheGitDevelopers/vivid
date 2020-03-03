import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';
import { MAIN_TEXT_COLOR, MAIN_THEME_COLOR } from '../../../constants/theme/colors';
import validate from '../../../tools/validators/validate';

const Input = ({
  isReadOnly,
  autoCompleteType,
  placeholder,
  maxLength,
  minLength,
  iconName,
  iconType,
  iconColor,
  style,
  onChange,
  inputType,
  onError
}) => {
  const [value, onChangeValue] = useState('');
  const [focusColor, setFocusColor] = useState(null);
  const [isTouched, setIsTouched] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (errorMsg !== null) {
      handleValidation();
    }
  }, [value]);

  const handleChange = (v) => {
    if (onChange) {
      onChange(v);
    }
    onChangeValue(v);
  };

  const handleFocus = () => {
    setFocusColor(MAIN_THEME_COLOR);
    setIsTouched(true);
  };

  const handleBlur = () => {
    setFocusColor(iconColor);
    handleValidation();
  };

  const handleValidation = () => {
    let error;
    if (minLength) {
      error = validate({ valLength: value.length, minLength }, 'minLength');
    }
    if (!error) error = validate(value, inputType);
    setErrorMsg(error);
    if (onError) onError(error)
  }

  return (
    <>
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
          secureTextEntry={autoCompleteType === 'password'}
          style={styles.input}
          onChangeText={(v) => handleChange(v)}
          value={value}
          maxLength={maxLength}
          editable={!isReadOnly}
          autoCompleteType={autoCompleteType}
          placeholder={placeholder}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
        />
      </View>
      {isTouched ? (
        <>{errorMsg === null ? null : <Text style={styles.error}>{errorMsg}</Text>}</>
      ) : null}
    </>
  );
};

Input.propTypes = {
  autoCompleteType: PropTypes.string,
  placeholder: PropTypes.string,
  isReadOnly: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  onChange: PropTypes.func,
  inputType: PropTypes.string,
  onError: PropTypes.func,
};

Input.defaultProps = {
  autoCompleteType: 'off',
  placeholder: '',
  isReadOnly: false,
  minLength: null,
  maxLength: 300,
  iconName: null,
  iconType: null,
  iconColor: MAIN_TEXT_COLOR,
  style: null,
  onChange: null,
  inputType: 'text',
  onError: null,
};

export default Input;
