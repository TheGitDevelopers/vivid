import { StyleSheet } from 'react-native';

import { MAIN_TEXT_COLOR, MAIN_THEME_COLOR } from '../../../constants/theme/colors';

const styles = StyleSheet.create({
  slide: {
    flexBasis: '100%',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  slideTitle: {
    color: MAIN_THEME_COLOR,
    fontSize: 22,
    marginBottom: 10,
  },
  slideText: {
    color: MAIN_TEXT_COLOR,
    fontSize: 18,
    textAlign: 'center',
  },
  indicatorsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  indicator: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 50,
  },
});

export default styles;
