import React, { useState } from 'react';
import {
    Modal,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { styles } from './styles';
import { Styles } from '../../styles';
import { useTheFirstLetterCapitalized } from '../../hooks/useTheFirstLetterCapitalized';
import Quantity from '../quantityModalInput';
import { useProducts } from '../../store/useProducts';

export function QuantityModal() {

    const quantityModal = useProducts((state) => state.quantityModal)
    const hideQuantityModal = useProducts((state) => state.hideQuantityModal)
    const confirmQuantity = useProducts((state) => state.confirmQuantity)
    const currentIndex = useProducts((state) => state.currentIndex)
    const currentQuantity = useProducts((state) => state.currentQuantity)

    return (
        <Modal
            transparent={true}
            visible={quantityModal}
        >
            <TouchableWithoutFeedback
                onPress={() => {
                    hideQuantityModal();
                }}
            >
                <View
                    style={styles.container}
                >
                    <TouchableWithoutFeedback>
                        <View style={styles.box}>
                            <Text
                                style={styles.title}
                            >
                                {useTheFirstLetterCapitalized('selecione a quantidade')}
                            </Text>
                            <Quantity />
                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity
                                    style={[styles.button, {
                                        borderRightWidth: 1,
                                        borderColor: Styles.cor.beige,
                                    }]}
                                    onPress={() => {
                                        hideQuantityModal();
                                    }}
                                >
                                    <Text
                                        style={styles.buttonText}
                                    >
                                        cancelar
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        confirmQuantity();
                                    }}
                                >
                                    <Text
                                        style={[styles.buttonText, {
                                            fontWeight: 'bold',
                                        }]}
                                    >
                                        confirmar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal >
    );
}