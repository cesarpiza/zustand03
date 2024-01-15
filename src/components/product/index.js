import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { useTheFirstLetterCapitalized } from '../../hooks/useTheFirstLetterCapitalized';
import { useConvertCurrency } from '../../hooks/useConvertCurrency';

export default function Product(props) {

    const { navigate } = useNavigation();

    const {
        id,
        name,
        price,
        description,
    } = props;

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                navigate('ProductDetails', { id });
            }}
        >
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>
                {description}
            </Text>
            <Text style={styles.price}>
                {useConvertCurrency(price)}
            </Text>
        </TouchableOpacity>
    );
}