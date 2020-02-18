import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const PureComponent = ({ style }) => <View style={style} />;

PureComponent.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
};

PureComponent.defaultProps = {
  style: null,
};

export default PureComponent;
