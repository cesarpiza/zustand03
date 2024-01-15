import React, { forwardRef, useEffect, useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { useProducts } from '../../store/useProducts';
import { Styles } from '../../styles';

const Quantity = forwardRef((props, ref) => {

    const quantity = useProducts((state) => state.quantity);
    const addQuantity = useProducts((state) => state.addQuantity);
    const decrementQuantity = useProducts((state) => state.decrementQuantity);
    const incrementQuantity = useProducts((state) => state.incrementQuantity);

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.quantity}>
                quantidade
            </Text>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={decrementQuantity}
                >
                    <FontAwesome name="minus-circle" size={Styles.size.screenWidth * 0.07} color={Styles.cor.red} />
                </TouchableOpacity>
                <TextInput
                    ref={ref}
                    keyboardType='numeric'
                    style={styles.input}
                    value={String(quantity)}
                    onChangeText={text => addQuantity(text)}
                />
                <TouchableOpacity
                    onPress={incrementQuantity}
                >
                    <FontAwesome name="plus-circle" size={Styles.size.screenWidth * 0.07} color={Styles.cor.red} />
                </TouchableOpacity>
            </View>
        </View>
    );
});

export default Quantity;