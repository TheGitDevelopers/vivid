import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
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
  },
});

const isFullScreen = (fullScreen) => ({ paddingVertical: fullScreen ? 0 : 50 });

const ContentContainer = ({ children, fullScreen }) => (
  <View style={[styles.cc, isFullScreen(fullScreen)]}>
    <ScrollView nestedScrollEnabled contentContainerStyle={styles.container}>
      {children}
    </ScrollView>
  </View>
);

ContentContainer.defaultProps = {
  fullScreen: false,
};

ContentContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  fullScreen: PropTypes.bool,
};

export default ContentContainer;
