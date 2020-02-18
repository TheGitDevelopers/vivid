import { StyleSheet } from 'react-native';

const commonStyle = {
  position: 'absolute',
  width: 24,
  height: 3,
  backgroundColor: '#242424',
  borderRadius: 3,
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  firstLine: {
    ...commonStyle,
    top: 2,
  },
  midLine: {
    ...commonStyle,
    width: 18,
    right: 0,
    top: 10,
  },
  endLine: {
    ...commonStyle,
    top: 18,
  },
});

export default styles;
