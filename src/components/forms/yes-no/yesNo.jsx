import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { MAIN_THEME_COLOR, MAIN_TEXT_COLOR } from '../../../constants/theme/colors';
import { NORMAL_TEXT_SIZE, HEADER_TEXT_SIZE } from '../../../constants/theme/typography';
import EmptyDivider from '../../common/dividers/emptyDivider';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  question: {
    color: MAIN_TEXT_COLOR,
    fontSize: NORMAL_TEXT_SIZE,
  },
  text: {
    color: MAIN_TEXT_COLOR,
    marginHorizontal: 10,
    fontSize: HEADER_TEXT_SIZE,
  },
});

const YesNo = ({ question, yes, no, defaultValue }) => {
  const [val, setVal] = useState(defaultValue);
  return (
    <>
      <Text style={styles.question}>{question}</Text>
      <EmptyDivider style={{ marginVertical: 2 }} />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setVal(false)}>
          <Text style={[styles.text, val === false ? { color: MAIN_THEME_COLOR } : null]}>
            {no}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setVal(true)}>
          <Text style={[styles.text, val === true ? { color: MAIN_THEME_COLOR } : null]}>
            {yes}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

YesNo.propTypes = {
  question: PropTypes.string.isRequired,
  yes: PropTypes.string,
  no: PropTypes.string,
  defaultValue: PropTypes.bool,
};

YesNo.defaultProps = {
  yes: 'tak',
  no: 'nie',
  defaultValue: true,
};

export default YesNo;
