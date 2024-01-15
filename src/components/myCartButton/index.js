import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { useTheFirstLetterCapitalized } from '../../hooks/useTheFirstLetterCapitalized';
import { useConvertCurrency } from '../../hooks/useConvertCurrency';
import { Styles } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { useProducts } from '../../store/useProducts';

export default function MyCartButton() {

    const { navigate } = useNavigation();
    const total = useProducts((state) => state.total);

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                navigate('ShoppingCard');
            }}
        >
            <MaterialCommunityIcons name="silverware-fork-knife" size={Styles.fontSize.p} color={Styles.cor.white} />
            <Text style={styles.text}>
                {`${useTheFirstLetterCapitalized('ver meu pedido')} (${useConvertCurrency(total)})`}
            </Text>
        </TouchableOpacity>
    );
}