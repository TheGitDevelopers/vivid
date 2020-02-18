import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { HEADER_TEXT_SIZE } from '../../../constants/theme/typography';
import { MAIN_THEME_COLOR, MAIN_TEXT_COLOR } from '../../../constants/theme/colors';

const styles = StyleSheet.create({
  header: {
    fontSize: HEADER_TEXT_SIZE,
  },
  mainColor: { color: MAIN_THEME_COLOR },
  commonColor: { color: MAIN_TEXT_COLOR },
});

const Header = ({ text, style, mainColor }) => (
  <>
    <Text style={[styles.header, mainColor ? styles.mainColor : styles.commonColor, style]}>
      {text}
    </Text>
  </>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  mainColor: PropTypes.bool,
};

Header.defaultProps = {
  style: null,
  mainColor: true,
};

export default Header;
