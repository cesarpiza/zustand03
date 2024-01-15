import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
} from 'react-native';
import { styles } from './styles';
import { useProducts } from '../../store/useProducts';
import Quantity from '../../components/quantity';
import Observation from '../../components/observation';
import CartButton from '../../components/cartButton';
import { useConvertCurrency } from '../../hooks/useConvertCurrency';
import { ObservationModal } from '../../components/observationModal';
import Header from '../../components/header';

export default function ProductDetails({ route }) {

    const { id } = route.params;
    const getProductDetails = useProducts((state) => state.getProductDetails);
    const productDetails = useProducts((state) => state.productDetails);
    const textInputRef = useRef(null);
    const observationModal = useProducts((state) => state.observationModal);
    const [freeKeybord, setFreeKeybord] = useState(false);

    useEffect(() => {
        if (!observationModal) {
            setTimeout(() => {
                setFreeKeybord(true);
            }, 500);
        } else {
            setFreeKeybord(false);
        }
    }, [observationModal]);

    const {
        name,
        price,
        description,
    } = productDetails;

    useEffect(() => {
        getProductDetails(id);
    }, []);

    const setBlur = useCallback(() => {
        textInputRef.current?.blur();
    }, []);

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                textInputRef.current?.blur();
            }}
        >
            <View style={styles.container}>
                <View style={styles.headerAndQuantObserContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.name}>{name}</Text>
                        <Text
                            style={styles.description}
                        >
                            {description}
                        </Text>
                        <Text style={styles.price}>
                            {useConvertCurrency(price)}
                        </Text>
                    </View>
                    <KeyboardAvoidingView
                        behavior='padding'
                        enabled={freeKeybord}
                    >
                        <View style={styles.quantAndObserContainer}>
                            <TouchableWithoutFeedback>
                                <Quantity ref={textInputRef} />
                            </TouchableWithoutFeedback>
                            <Observation setBlur={setBlur} />
                        </View>
                        <CartButton />
                    </KeyboardAvoidingView>
                </View>
                <ObservationModal />
            </View>
        </TouchableWithoutFeedback >
    );
}