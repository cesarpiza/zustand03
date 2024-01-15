import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        height: Styles.size.headerHeight,
        backgroundColor: Styles.cor.red,
        justifyContent: 'center',
    },
    title: {
        color: Styles.cor.white,
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: Styles.fontSize.m,
    }
});