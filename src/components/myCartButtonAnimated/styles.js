import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 999,
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: Styles.cor.gray,
        alignItems: 'center',
        columnGap: Styles.spacing.m,
        justifyContent: 'center',
        alignItems: 'center',
        height: Styles.size.screenHeight * 0.05 + Styles.padding.p,
    },
    text: {
        color: Styles.cor.white,
        fontSize: Styles.fontSize.p - 6,
        fontWeight: 'bold',
    }
});