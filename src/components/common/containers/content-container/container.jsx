import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import { MAIN_BACKGROUND_COLOR } from '../../../../constants/theme/colors';

const styles = StyleSheet.create({
  cc: {
    flex: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
  },
  container: {
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 50,
  },
});

const ContentContainer = ({ children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.cc}>
      <ScrollView nestedScrollEnabled contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
    </View>
  </TouchableWithoutFeedback>
);

ContentContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default ContentContainer;
