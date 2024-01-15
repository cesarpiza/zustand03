import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Styles.cor.green,
        position: 'absolute',
        bottom: 0,
        width: Styles.size.screenWidth,
        paddingHorizontal: Styles.padding.p,
        height: Styles.size.screenHeight * 0.05 + Styles.padding.p,
        alignItems: 'center',
    },
    total: {
        color: Styles.cor.white,
        textTransform: 'capitalize',
        fontSize: Styles.fontSize.p - 6,
        fontWeight: 'bold',
    },
    finalizeContainer: {
        borderWidth: 1,
        borderColor: Styles.cor.white,
        paddingVertical: Styles.padding.p - 10,
        paddingHorizontal: Styles.padding.m,
        borderRadius: Styles.borderRadius.p - 2,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: Styles.spacing.m,

    },
    finalizeOrder: {
        color: Styles.cor.white,
        fontSize: Styles.fontSize.p - 6
    }
});