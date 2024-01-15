import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Styles.cor.green,
        alignItems: 'center',
        columnGap: Styles.spacing.m,
        justifyContent: 'center',
        alignItems: 'center',
        height: Styles.size.screenHeight * 0.05 + Styles.padding.p,
        borderTopLeftRadius: Styles.borderRadius.gg,
        borderTopRightRadius: Styles.borderRadius.gg,
        position: 'absolute',
        bottom: 0,
        zIndex: 999,
        width: '100%',
    },
    text: {
        color: Styles.cor.white,
        fontSize: Styles.fontSize.p - 6,
        fontWeight: 'bold',
    }
});