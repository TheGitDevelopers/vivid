import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { NORMAL_TEXT_SIZE, NORMAL_TEXT_FONT_FAMILY } from '../../../constants/theme/typography';
import { MAIN_TEXT_COLOR } from '../../../constants/theme/colors';

const NormalText = ({ style, text }) => (
  <Text
    style={[
      { fontSize: NORMAL_TEXT_SIZE, fontFamily: NORMAL_TEXT_FONT_FAMILY, color: MAIN_TEXT_COLOR },
      style,
    ]}
  >
    {text}
  </Text>
);

NormalText.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  text: PropTypes.string,
};

NormalText.defaultProps = {
  style: null,
  text: null,
};

export default NormalText;
