import React, { useEffect } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { useTheFirstLetterCapitalized } from '../../hooks/useTheFirstLetterCapitalized';
import { useConvertCurrency } from '../../hooks/useConvertCurrency';
import { useProducts } from '../../store/useProducts';
import { Styles } from '../../styles';

export default function FinalizeOrder() {

    const total = useProducts((state) => state.total);
    const productsInCard = useProducts((state) => state.productsInCard);
    const getTotal = useProducts((state) => state.getTotal);

    useEffect(() => {
        getTotal();
    }, [productsInCard]);

    return (
        <View style={styles.container}>
            <Text style={styles.total}>
                {total !== 0 ? `total: ${useConvertCurrency(total)}` : 'carrinho vazio.'}
            </Text>
            <TouchableOpacity
                style={styles.finalizeContainer}
                onPress={() => {
                    Alert.alert('Message!', 'Purchase completed...');
                }}
            >
                <Text style={styles.finalizeOrder}>
                    {useTheFirstLetterCapitalized('finalizar pedido')}
                </Text>
                <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={Styles.fontSize.p} color={Styles.cor.white} />
            </TouchableOpacity>
        </View >
    );
}