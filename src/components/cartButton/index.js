import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useTheFirstLetterCapitalized } from '../../hooks/useTheFirstLetterCapitalized';
import { useConvertCurrency } from '../../hooks/useConvertCurrency';
import { useProducts } from '../../store/useProducts';
import { useNavigation } from '@react-navigation/native';

export default function CardButton() {

    const { goBack } = useNavigation();
    const addProductInCard = useProducts((state) => state.addProductInCard)
    const productDetails = useProducts((state) => state.productDetails)

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                addProductInCard();
                goBack();
            }}
        >
            <Text style={styles.text}>
                {`${useTheFirstLetterCapitalized('adicionar ao carrinho')} (${useConvertCurrency(productDetails.price)})`}
            </Text>
        </TouchableOpacity>
    );
}