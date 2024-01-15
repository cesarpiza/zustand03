import React, { useEffect } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { useTheFirstLetterCapitalized } from '../../hooks/useTheFirstLetterCapitalized';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withDelay, withSequence, withTiming } from 'react-native-reanimated';
import { Styles } from '../../styles';
import { useProducts } from '../../store/useProducts';

export default function MyCartButtonAnimated() {

    const setAnimtedToast = useProducts((state) => state.setAnimtedToast);
    const toastValue = useProducts((state) => state.toastValue);
    const animatedValue = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(animatedValue.value,
                        [0, 1],
                        [Styles.size.screenHeight * 0.05 + Styles.padding.p, 0],
                    )
                }
            ]
        }
    })

    useEffect(() => {
        if (toastValue) {
            animatedValue.value = withSequence(
                withTiming(1, {
                    duration: 100,
                }),
                withDelay(1300,
                    withTiming(0, {
                        duration: 100,
                    }),
                )
            )
        } else {
            animatedValue.value = withTiming(0, {
                duration: 100,
            })
        }
    }, [toastValue]);

    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <Text style={styles.text}>
                {`${useTheFirstLetterCapitalized('produto adicionado ao carrinho!')}`}
            </Text>
        </Animated.View>
    );
}