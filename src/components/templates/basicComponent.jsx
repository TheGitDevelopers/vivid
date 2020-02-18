import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const BasicComponent = ({ property, notRequiredProp, style }) => {
  const [state, setstate] = useState('');

  useEffect(() => {
    if (!notRequiredProp) {
      setstate('property');
    }
  }, [state]);

  return (
    <View style={style}>
      <Text>{property}</Text>
      <Text>{notRequiredProp || state}</Text>
    </View>
  );
};

BasicComponent.propTypes = {
  property: PropTypes.number.isRequired,
  notRequiredProp: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

BasicComponent.defaultProps = {
  notRequiredProp: '',
  style: null,
};

export default BasicComponent;
