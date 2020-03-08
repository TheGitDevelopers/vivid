
import { Animated, Easing } from 'react-native';


const spinVal = new Animated.Value(0);

Animated.loop(Animated.timing(
    spinVal,
    {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true
    }
)).start();

const spin = spinVal.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
});

export default spin;