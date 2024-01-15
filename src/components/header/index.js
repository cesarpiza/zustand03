import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { Styles } from '../../styles';

export default function Header({ name }) {

    const { goBack } = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    goBack();
                }}
            >
                <AntDesign name="arrowleft" size={Styles.fontSize.p} color={Styles.cor.white} />
            </TouchableOpacity>
            <Text style={styles.title}>{name}</Text>
        </View>
    );
}