import { StyleSheet } from 'react-native';
import { Styles, spaceBetweenItems } from '../../styles';

export const styles = StyleSheet.create({
    button: {
        height: Styles.size.productHeight,
        marginVertical: spaceBetweenItems / 2,
        paddingHorizontal: Styles.padding.p,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: Styles.cor.beige,
    },
    name: {
        fontSize: Styles.fontSize.p - 6,
        fontWeight: 'bold',
    },
    description: {
        fontSize: Styles.fontSize.pp,
    },
    price: {
        fontSize: Styles.fontSize.pp,
        color: Styles.cor.green,
        fontWeight: 'bold',
    }
});