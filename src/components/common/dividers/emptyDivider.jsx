import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const EmptyDivider = ({ style, size }) => (
  <View
    style={[
      size === 'small' ? { marginVertical: 8 } : null,
      size === 'big' ? { marginVertical: 32 } : null,
      size === 'medium' ? { marginVertical: 16 } : null,
      style,
    ]}
  />
);

EmptyDivider.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string),
    PropTypes.objectOf(PropTypes.number),
  ]),
  size: PropTypes.string,
};

EmptyDivider.defaultProps = {
  style: null,
  size: 'medium',
};

export default EmptyDivider;
