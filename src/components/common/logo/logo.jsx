import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

const logoSrc = require('../../../assets/images/logo.png');

const Logo = ({ logoSize, style }) => (
  <Image style={[{ width: logoSize, resizeMode: 'contain' }, style]} source={logoSrc} />
);

Logo.propTypes = {
  logoSize: PropTypes.number,
  style: PropTypes.objectOf(PropTypes.string),
};

Logo.defaultProps = {
  logoSize: 120,
  style: null,
};

export default Logo;
