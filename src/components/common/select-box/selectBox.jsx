import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { MAIN_TEXT_COLOR, MAIN_THEME_COLOR } from '../../../constants/theme/colors';
import styles from './styles';

const iconStyle = {
  width: 34,
  textAlign: 'center',
};

const SelectBox = ({ list, placeholder, iconName, iconType, iconColor, onSelectItem }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [value, setValue] = useState('');
  const [focusColor, setFocusColor] = useState(null);
  const [isListHidden, setIsHiddenList] = useState(true);
  const [arrowAnim] = useState(new Animated.Value(0));

  const animationDetails = {
    duration: 350,
    easing: Easing.bezier(0.23, 1, 0.32, 1),
    useNativeDriver: true,
  };

  const animateArrow = () => {
    const toValue = isListHidden ? 1 : 0;
    Animated.timing(arrowAnim, {
      ...animationDetails,
      toValue,
    }).start();
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    if (onSelectItem) onSelectItem(item);
    setValue(item.label);
    setIsHiddenList(!isListHidden);
  };

  const showBox = () => {
    animateArrow();
    setIsHiddenList(!isListHidden);
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

  useEffect(() => setFocusColor(isListHidden ? iconColor : MAIN_THEME_COLOR), [isListHidden]);

  return (
    <>
      <View style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={showBox}>
          <View style={styles.container}>
            {iconName ? <>{handleIconType()}</> : null}
            <TextInput
              style={styles.input}
              value={value}
              editable={false}
              placeholder={placeholder}
            />
            <Animated.View
              style={{
                transform: [
                  {
                    rotate: arrowAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '90deg'],
                    }),
                  },
                ],
              }}
            >
              <SimpleLineIcons name="arrow-right" size={16} color={iconColor} />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
        {isListHidden ? null : (
          <ScrollView nestedScrollEnabled>
            {list.map((sex) => (
              <TouchableOpacity onPress={() => selectItem(sex)} style={styles.item} key={sex.id}>
                <Text
                  style={[
                    styles.itemText,
                    selectedItem && selectedItem.id === sex.id ? { color: MAIN_THEME_COLOR } : null,
                  ]}
                >
                  {sex.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </>
  );
};

SelectBox.propTypes = {
  list: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.objectOf(PropTypes.string, PropTypes.number),
        PropTypes.objectOf(PropTypes.string, PropTypes.string, PropTypes.number),
        PropTypes.object,
        PropTypes.string,
        PropTypes.number,
      ]),
    ),
  ]).isRequired,
  placeholder: PropTypes.string,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  onSelectItem: PropTypes.func.isRequired,
};

SelectBox.defaultProps = {
  list: [],
  placeholder: '',
  iconName: null,
  iconType: null,
  iconColor: MAIN_TEXT_COLOR,
  onSelectItem: null,
};

export default SelectBox;
