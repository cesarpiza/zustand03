import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        textTransform: 'capitalize',
        color: Styles.cor.gray,
        fontSize: Styles.fontSize.pp,
    }
});