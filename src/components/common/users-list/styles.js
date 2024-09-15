import { StyleSheet } from 'react-native';
import { SECONDARY_THEME_COLOR } from '../../../constants/theme/colors';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: SECONDARY_THEME_COLOR,
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  itemImage: {
    width: 35,
    height: 35,
    resizeMode: 'cover',
    borderRadius: 50,
    marginRight: 10,
  },
});

export default styles;
