import React, { useState } from 'react';
import { View, TouchableOpacity, Animated, Easing } from 'react-native';
import MenuIcon from '../../animated-components/menu-icon/menuIcon';

const MenuButton = () => {
  const [pulseAnime] = useState(new Animated.Value(0));
  const [isHidden, setIsHidden] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const pulsePress = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsHidden(!isHidden);
      Animated.timing(pulseAnime, {
        toValue: 1,
        duration: 250,
        easing: Easing.bezier(0.23, 1, 0.32, 1),
        useNativeDriver: true,
      }).start((finished) => {
        if (finished) {
          pulseAnime.setValue(0);
          // each menu icon animation has 150ms, so 150*4 - 250 = 350;
          setTimeout(() => setIsAnimating(false), 350);
        }
      });
    }
  };

  return (
    <View
      style={{
        position: 'relative',
        justifyContent: 'center',
        marginRight: 20,
      }}
    >
      <Animated.View
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          backgroundColor: '#D6D6D6',
          position: 'absolute',
          alignSelf: 'center',
          opacity: pulseAnime,
          transform: [
            {
              scaleX: pulseAnime.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
            {
              scaleY: pulseAnime.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ],
        }}
      />
      <TouchableOpacity onPress={() => pulsePress()}>
        <MenuIcon isHidden={isHidden} />
      </TouchableOpacity>
    </View>
  );
};

export default MenuButton;
