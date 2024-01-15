import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';

export const styles = StyleSheet.create({
    mainContainer: {
       
    },
    quantity: {
        textTransform: 'capitalize',
        textAlign: 'center',
        marginBottom: Styles.spacing.m / 2,
        fontSize: Styles.fontSize.pp,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Styles.spacing.p + 2,
    },
    input: {
        fontSize: Styles.fontSize.pp,
        textAlign: 'center',
        width: Styles.size.screenWidth * 0.12,
        height: Styles.size.screenWidth * 0.09,
        backgroundColor: Styles.cor.beige,
        borderRadius: Styles.borderRadius.p,
    },
});