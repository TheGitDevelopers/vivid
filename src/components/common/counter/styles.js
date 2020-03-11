import { StyleSheet } from 'react-native';
import {
  SECONDARY_THEME_COLOR,
  MAIN_TEXT_COLOR,
  ERROR_COLOR,
} from '../../../constants/theme/colors';
import {
  NORMAL_TEXT_SIZE,
  VALIDATOR_TEXT_SIZE,
  NORMAL_TEXT_FONT_FAMILY,
} from '../../../constants/theme/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SECONDARY_THEME_COLOR,
    borderRadius: 6,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  input: {
    fontSize: NORMAL_TEXT_SIZE,
    fontFamily: NORMAL_TEXT_FONT_FAMILY,
    flex: 1,
    padding: 14,
    color: MAIN_TEXT_COLOR,
  },
  touchableIcon: {
    width: 34,
    padding: 7,
    textAlign: 'center',
  },
  error: {
    color: ERROR_COLOR,
    width: '100%',
    paddingHorizontal: 2,
    paddingTop: 6,
    textAlign: 'right',
    fontSize: VALIDATOR_TEXT_SIZE,
  },
});

export default styles;
