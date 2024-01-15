import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        height: Styles.size.screenHeight,
        backgroundColor: '#ffffff',
    },
    title: {
        color: Styles.cor.red,
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: Styles.fontSize.p,
        marginBottom: Styles.padding.p,
        paddingTop: Styles.size.headerHeight2 + Styles.padding.p,
        padding: Styles.padding.p,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: Styles.spacing.p,
        paddingHorizontal: Styles.padding.p,
    },
    itemContainers: {
        width: Styles.size.screenWidth * 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: Styles.spacing.m,
    },
    itemContainers2: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: Styles.spacing.m,
    },
    quantityContainer: {
        width: Styles.size.screenWidth * 0.09,
        height: Styles.size.screenWidth * 0.08,
        backgroundColor: Styles.cor.beige,
        fontSize: Styles.fontSize.p - 6,
        borderRadius: Styles.borderRadius.p,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantity: {
        fontSize: Styles.fontSize.p - 6,
    },
    name: {
        color: Styles.cor.red,
        fontWeight: 'bold',
        fontSize: Styles.fontSize.p - 6,
    },
    price: {
        fontSize: Styles.fontSize.p - 6,
        color: Styles.cor.green,
        fontWeight: 'bold',
    },
    button: {},
    emptyCart: {
        color: Styles.cor.red,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: Styles.fontSize.gg,
        textAlign: 'center',
        marginTop: Styles.spacing.gg + 20,
    }
});