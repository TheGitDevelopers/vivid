import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { MAIN_TEXT_COLOR, MAIN_THEME_COLOR } from '../../../constants/theme/colors';
import validate from '../../../tools/validators/validate';
import setInputError from '../../../redux/actions/error';

const Input = ({
  isReadOnly,
  type,
  placeholder,
  maxLength,
  iconName,
  iconType,
  iconColor,
  style,
  onChange,
  inputType,
}) => {
  const [value, onChangeValue] = useState('');
  const [focusColor, setFocusColor] = useState(null);
  const [isTouched, setIsTouched] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInputError(errorMsg !== null));
  }, [errorMsg]);

  useEffect(() => {
    if (errorMsg !== null) {
      setErrorMsg(validate(value, inputType));
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
    setErrorMsg(validate(value, inputType));
  };

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
          secureTextEntry={type === 'password'}
          style={styles.input}
          onChangeText={(v) => handleChange(v)}
          value={value}
          maxLength={maxLength}
          editable={!isReadOnly}
          autoCompleteType={type}
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
  type: PropTypes.string,
  placeholder: PropTypes.string,
  isReadOnly: PropTypes.bool,
  maxLength: PropTypes.number,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  onChange: PropTypes.func,
  inputType: PropTypes.string,
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
  onChange: null,
  inputType: 'text',
};

export default Input;
