import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    Text,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import { styles } from './styles';
import { Styles } from '../../styles';
import { useProducts } from '../../store/useProducts';

export default function Observation({ setBlur }) {

    const showObservationModal = useProducts((state) => state.showObservationModal);
    const [activeKeyboard, setActiveKeyboard] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setActiveKeyboard(true);
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setActiveKeyboard(false);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <TouchableOpacity
            style={[styles.container, {
                pointerEvents: activeKeyboard ? 'none' : 'auto',
            }]}
            onPress={() => {
                showObservationModal();
            }}
        >
            <MaterialCommunityIcons name="note-edit" size={24} color={Styles.cor.gray} />
            <Text style={styles.text}>
                adicionar observação?
            </Text>
        </TouchableOpacity>
    );
}