import { StyleSheet } from 'react-native';
import { SECONDARY_THEME_COLOR, MAIN_TEXT_COLOR } from '../../../constants/theme/colors';
import { NORMAL_TEXT_SIZE } from '../../../constants/theme/typography';


const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SECONDARY_THEME_COLOR,
    borderRadius: 6,
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  input: {
    fontSize: NORMAL_TEXT_SIZE,
    width: '90%',
    padding: 14,
    color: MAIN_TEXT_COLOR
  }
});

export default styles;
