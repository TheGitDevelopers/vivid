import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MAIN_TEXT_COLOR, MAIN_THEME_COLOR } from '../../../constants/theme/colors';
import styles from './styles';

const Carousel = ({ itemsPerIntervals, data, style }) => {
  const scrollViewRef = React.createRef();
  const [width, setWidth] = useState(0);
  const [currInterval, setCurrInterval] = useState(1);

  const totalItems = data.length;
  const intervals = Math.ceil(totalItems / itemsPerIntervals);

  const getCurrentInterval = (offset) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset < width * i - 0.5 * width) {
        return i;
      }
      if (i === intervals) {
        return i;
      }
    }
  };

  const indicators = new Array(totalItems).fill(undefined);
  return (
    <View style={[style, { width: '100%' }]}>
      <ScrollView
        nestedScrollEnabled
        ref={scrollViewRef}
        horizontal={true}
        contentContainerStyle={{ width: `${100 * intervals}%` }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled
        onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
        onScroll={(data) => {
          setCurrInterval(getCurrentInterval(data.nativeEvent.contentOffset.x));
        }}
      >
        {data.map(({ title, text, id }) => (
          <View style={styles.slide} key={id}>
            <Text style={styles.slideTitle}>{title}</Text>
            <Text style={styles.slideText}>{text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ marginVertical: 32 }}></View>
      <View style={styles.indicatorsContainer}>
        {indicators.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{ paddingHorizontal: 8 }}
            onPress={() => scrollViewRef.current.scrollTo({ x: width * index })}
          >
            <View
              style={[
                styles.indicator,
                {
                  borderColor: index + 1 === currInterval ? MAIN_THEME_COLOR : MAIN_TEXT_COLOR,
                },
              ]}
            ></View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

Carousel.defaultProps = {
  itemsPerIntervals: 1,
  data: null,
  style: null,
};

Carousel.propTypes = {
  itemsPerIntervals: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string, PropTypes.string)),
  style: PropTypes.objectOf(PropTypes.string),
};

export default Carousel;
