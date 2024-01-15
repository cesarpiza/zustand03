import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { useTheFirstLetterCapitalized } from '../../hooks/useTheFirstLetterCapitalized';

export default function Header() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>salgadinhos da ana</Text>
        </View>
    );
}