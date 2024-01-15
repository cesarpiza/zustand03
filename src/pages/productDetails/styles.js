import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        height: Styles.size.screenHeight,
    },
    headerAndQuantObserContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    headerContainer: {
        paddingTop: Styles.size.headerHeight2 + Styles.padding.p,
        padding: Styles.padding.p,
    },
    name: {
        color: Styles.cor.red,
        fontWeight: 'bold',
        fontSize: Styles.fontSize.p - 6,
    },
    description: {
        fontSize: Styles.fontSize.pp,
    },
    price: {
        color: Styles.cor.green,
        fontSize: Styles.fontSize.pp,
        fontWeight: 'bold',
    },
    quantAndObserContainer: {
        paddingVertical: Styles.padding.m,
        borderTopWidth: 1,
        borderColor: Styles.cor.beige,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: Styles.padding.gg * 1.5,
    },
});