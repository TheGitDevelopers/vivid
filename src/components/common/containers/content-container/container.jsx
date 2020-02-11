import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import { MAIN_BACKGROUND_COLOR } from '../../../../constants/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const ContentContainer = ({ children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

ContentContainer.propTypes = ({
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
});


export default ContentContainer;
