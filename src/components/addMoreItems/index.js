import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useTheFirstLetterCapitalized } from '../../hooks/useTheFirstLetterCapitalized';
import { Styles } from '../../styles';
import { useNavigation } from '@react-navigation/native';

export default function AddMoreItems() {

    const { goBack } = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                goBack();
            }}
        >
            <Text style={styles.text}>
                {useTheFirstLetterCapitalized('adicionar mais itens')}
            </Text>
            <Fontisto name="shopping-bag" size={Styles.fontSize.p - 6} color={Styles.cor.red} />
        </TouchableOpacity>
    );
}