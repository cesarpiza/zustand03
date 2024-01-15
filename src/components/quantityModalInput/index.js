import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { Styles } from '../../styles';
import { useProducts } from '../../store/useProducts';

const Quantity = () => {

    const currentQuantity = useProducts((state) => state.currentQuantity);
    const addQuantityModal = useProducts((state) => state.addQuantityModal);
    const decrementQuantityModal = useProducts((state) => state.decrementQuantityModal);
    const incrementQuantityModal = useProducts((state) => state.incrementQuantityModal);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        decrementQuantityModal();
                    }}
                >
                    <FontAwesome name="minus-circle" size={Styles.size.screenWidth * 0.07} color={Styles.cor.red} />
                </TouchableOpacity>
                <TextInput
                    keyboardType='numeric'
                    style={styles.input}
                    value={String(currentQuantity)}
                    onChangeText={text => addQuantityModal(text)}
                />
                <TouchableOpacity
                    onPress={() => {
                        incrementQuantityModal();
                    }}
                >
                    <FontAwesome name="plus-circle" size={Styles.size.screenWidth * 0.07} color={Styles.cor.red} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Quantity;