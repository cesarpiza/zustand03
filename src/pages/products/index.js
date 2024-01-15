import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { useProducts } from '../../store/useProducts';
import Product from '../../components/product';
import { Styles, spaceBetweenItems } from '../../styles';
import { useFocusEffect } from '@react-navigation/native';
import MyCartButton from '../../components/myCartButton';
import { AntDesign } from '@expo/vector-icons';
import Animated, { useSharedValue, useDerivedValue, useAnimatedScrollHandler, runOnJS, FadeInDown, FadeOutDown, SlideInDown, SlideOutDown, Easing, useAnimatedStyle, interpolate, Extrapolate, withTiming } from 'react-native-reanimated';
import MyCartButtonAnimated from '../../components/myCartButtonAnimated';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export default function Products() {

    const data = useProducts(state => state.products)
    const resetQuantity = useProducts(state => state.resetQuantity);
    const resetObservation = useProducts(state => state.resetObservation);
    const cancelObservation = useProducts((state) => state.cancelObservation);
    const getTotal = useProducts((state) => state.getTotal);
    const total = useProducts((state) => state.total);
    const scrollY = useSharedValue(0);
    const animetedValue = useSharedValue(0);
    const flatListRef = useRef(null);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        },
    });

    useFocusEffect(
        useCallback(() => {
            getTotal();
            cancelObservation();
            resetQuantity();
            resetObservation();
        }, [])
    );

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(animetedValue.value,
                [0, 1],
                [0, 0.8],
                Extrapolate.CLAMP,
            ),
            transform: [
                {
                    translateY: interpolate(animetedValue.value,
                        [0, 1],
                        [Styles.size.screenWidth * 0.12, total !== 0 ? -((Styles.size.screenHeight * 0.05) + (Styles.padding.p) + (Styles.padding.gg / 2)) : -Styles.size.screenHeight * 0.05 + Styles.padding.p,],
                        Extrapolate.CLAMP,
                    )
                }
            ]
        }
    });

    const derivedScrollY = useDerivedValue(() => {
        if (scrollY.value === 0) {
            animetedValue.value = withTiming(0, {
                duration: 500,

            })
        } else {
            animetedValue.value = withTiming(1, {
                duration: 500,

            })
        }

        return scrollY.value;
    });

    return (
        <View style={styles.container}>
            <Animated.FlatList
                ref={flatListRef}
                onScroll={scrollHandler}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: spaceBetweenItems / 2,
                    paddingHorizontal: spaceBetweenItems,
                    paddingBottom: total !== 0 ? Styles.size.screenHeight * 0.05 + Styles.padding.p : spaceBetweenItems,
                }}
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => {
                    return <Product {...item} />
                }}
            />
            {total !== 0 && <MyCartButton />}
            <Animated.View
                style={[animatedStyle, {
                    width: Styles.size.screenWidth * 0.12,
                    height: Styles.size.screenWidth * 0.12,
                    borderRadius: 999,
                    position: 'absolute',
                    bottom: 0,
                    right: Styles.padding.gg,
                    backgroundColor: Styles.cor.gray,
                    justifyContent: 'center',
                    alignItems: 'center',
                }]}
            >
                <TouchableOpacity
                    onPress={() => {
                        flatListRef.current.scrollToIndex({
                            index: 0,
                            animated: true,
                        });
                    }}
                >
                    <AntDesign name="arrowup" size={Styles.fontSize.p} color={Styles.cor.white} />
                </TouchableOpacity>
            </Animated.View>
            <MyCartButtonAnimated />
        </View>
    );
}