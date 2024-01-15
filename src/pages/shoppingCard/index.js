import React, { useEffect } from 'react';
import {
    SafeAreaView, Text, TouchableOpacity, View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { useProducts } from '../../store/useProducts';
import { Styles } from '../../styles';
import { useConvertCurrency } from '../../hooks/useConvertCurrency';
import AddMoreItems from '../../components/addMoreItems';
import FinalizeOrder from '../../components/finalizeOrder';
import { QuantityModal } from '../../components/quantityModal';

export default function ShoppingCard() {

    const productsInCard = useProducts((state) => state.productsInCard);
    const removeItemFromCard = useProducts((state) => state.removeItemFromCard);
    const getCurrentQuantity = useProducts((state) => state.getCurrentQuantity);
    const total = useProducts((state) => state.total);

    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={styles.title}
            >
                salgadinhos da ana
            </Text>
            {total !== 0 ?
                productsInCard.map((product, index) => {
                    return (
                        <View
                            style={styles.itemContainer}
                            key={String(index)}
                        >
                            <View style={styles.itemContainers}>
                                <TouchableOpacity
                                    style={styles.quantityContainer}
                                    onPress={() => {
                                        getCurrentQuantity(index);
                                    }}
                                >
                                    <Text
                                        style={styles.quantity}
                                    >
                                        {product.quantity}
                                    </Text>
                                </TouchableOpacity>
                                <Text
                                    numberOfLines={1}
                                    style={styles.name}
                                >
                                    {product.name}
                                </Text>
                            </View>
                            <View style={styles.itemContainers2}>
                                <Text
                                    style={styles.price}
                                >
                                    {useConvertCurrency(product.price)}
                                </Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        removeItemFromCard(index);
                                    }}
                                >
                                    <AntDesign name="closecircle" size={Styles.fontSize.p - 6} color={Styles.cor.red} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })
                :
                <Text style={styles.emptyCart}>carrinho vazio :)</Text>
            }
            <AddMoreItems />
            <FinalizeOrder />
            <QuantityModal />
        </SafeAreaView>
    );
}