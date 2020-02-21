import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const EmptyDivider = ({ style }) => <View style={[{ marginVertical: 8 }, style]} />;

EmptyDivider.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string),
    PropTypes.objectOf(PropTypes.number),
  ]),
};

EmptyDivider.defaultProps = {
  style: null,
};

export default EmptyDivider;
