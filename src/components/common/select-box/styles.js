import { StyleSheet } from 'react-native';
import { SECONDARY_THEME_COLOR, MAIN_TEXT_COLOR } from '../../../constants/theme/colors';
import { NORMAL_TEXT_SIZE, NORMAL_TEXT_FONT_FAMILY } from '../../../constants/theme/typography';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SECONDARY_THEME_COLOR,
    borderRadius: 6,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 30,
  },
  input: {
    fontSize: NORMAL_TEXT_SIZE,
    fontFamily: NORMAL_TEXT_FONT_FAMILY,
    width: '85%',
    padding: 14,
    color: MAIN_TEXT_COLOR,
  },
  item: {
    width: '100%',
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: 'row',
  },
  itemText: {
    fontSize: NORMAL_TEXT_SIZE,
    fontFamily: NORMAL_TEXT_FONT_FAMILY,
    color: MAIN_TEXT_COLOR,
    marginLeft: 10,
  },
});

export default styles;
