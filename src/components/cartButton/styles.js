import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Styles.cor.green,
        height: Styles.size.screenHeight * 0.05,
        justifyContent: 'center',
        borderRadius: Styles.borderRadius.p,
        marginHorizontal: Styles.padding.p,
        marginBottom: Styles.padding.p,
    },
    text: {
        color: Styles.cor.white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: Styles.fontSize.pp,
    }
});