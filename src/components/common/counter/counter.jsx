import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';
import {
  MAIN_TEXT_COLOR,
  MAIN_THEME_COLOR,
  SECONDARY_TEXT_COLOR,
} from '../../../constants/theme/colors';
import validate from '../../../tools/validators/validate';

const iconStyle = {
  width: 34,
  textAlign: 'center',
};

const touchableIconStyle = {
  width: 34,
  padding: 7,
  textAlign: 'center',
};

const Counter = ({
  isReadOnly,
  placeholder,
  min,
  max,
  maxLength,
  iconName,
  iconType,
  iconColor,
  style,
  onChange,
  required,
}) => {
  const [value, onChangeValue] = useState(0);
  const [focusColor, setFocusColor] = useState(null);
  const [isTouched, setIsTouched] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (errorMsg !== null && required) {
      setErrorMsg(validate(value, 'text'));
    }
  }, [value]);

  const handleChange = (v) => {
    let newVal = v;
    if (!v.length) newVal = 0;
    if (!new RegExp(/^(0|[1-9][0-9]*)$/).test(newVal)) return;
    if (parseInt(newVal) > max || parseInt(newVal) < min) return;
    if (onChange) {
      onChange(newVal);
    }
    onChangeValue(newVal);
  };

  const handleFocus = () => {
    setFocusColor(MAIN_THEME_COLOR);
    setIsTouched(true);
  };

  const handleBlur = () => {
    setFocusColor(iconColor);
    if (required) setErrorMsg(validate(value, 'text'));
  };

  const handlePlus = () => {
    let newVal = parseInt(value) + 1;
    if (parseInt(newVal) > max) newVal = `${max}`;
    if (onChange) {
      onChange(newVal);
    }
    onChangeValue(`${newVal}`);
  };
  const handleMinus = () => {
    let newVal = parseInt(value) - 1;
    if (parseInt(newVal) < min) newVal = `${min}`;
    if (onChange) {
      onChange(newVal);
    }
    onChangeValue(`${newVal}`);
  };

  const handleIconType = () => {
    if (iconType === 'mci')
      return (
        <MaterialCommunityIcons
          name={iconName}
          style={iconStyle}
          size={34}
          color={focusColor !== null ? focusColor : iconColor}
        />
      );
    if (iconType === 'ion')
      return (
        <Ionicons
          name={iconName}
          style={iconStyle}
          size={34}
          color={focusColor !== null ? focusColor : iconColor}
        />
      );
    if (iconType === 'fa')
      return (
        <FontAwesome
          style={iconStyle}
          name={iconName}
          size={34}
          color={focusColor !== null ? focusColor : iconColor}
        />
      );
    return (
      <SimpleLineIcons
        name={iconName}
        style={iconStyle}
        size={24}
        color={focusColor !== null ? focusColor : iconColor}
      />
    );
  };

  return (
    <>
      <View style={[styles.container, style]}>
        {iconName ? <>{handleIconType()}</> : null}
        <TextInput
          style={styles.input}
          onChangeText={(v) => handleChange(v)}
          value={value}
          maxLength={maxLength}
          editable={!isReadOnly}
          placeholder={placeholder}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          keyboardType={'numeric'}
        />
        <TouchableOpacity onPress={() => handleMinus()}>
          <MaterialCommunityIcons
            style={touchableIconStyle}
            size={27}
            name="minus"
            color={SECONDARY_TEXT_COLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePlus()}>
          <MaterialCommunityIcons
            style={touchableIconStyle}
            size={27}
            name="plus"
            color={MAIN_THEME_COLOR}
          />
        </TouchableOpacity>
      </View>
      {isTouched ? (
        <>{errorMsg === null ? null : <Text style={styles.error}>{errorMsg}</Text>}</>
      ) : null}
    </>
  );
};

Counter.propTypes = {
  placeholder: PropTypes.string,
  isReadOnly: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  maxLength: PropTypes.number,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

Counter.defaultProps = {
  placeholder: '',
  isReadOnly: false,
  maxLength: 300,
  iconName: null,
  iconType: null,
  iconColor: MAIN_TEXT_COLOR,
  style: null,
  onChange: null,
  required: false,
  min: 0,
  max: Infinity,
};

export default Counter;
