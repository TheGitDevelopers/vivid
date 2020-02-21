import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { MAIN_BACKGROUND_COLOR } from '../../../../constants/theme/colors';
import { height } from '../../../../assets/data/screenData';

const styles = StyleSheet.create({
  container: {
    height,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
});

const ContentContainer = ({ children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <ScrollView nestedScrollEnabled contentContainerStyle={styles.container}>
      {children}
    </ScrollView>
  </TouchableWithoutFeedback>
);

ContentContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default ContentContainer;
