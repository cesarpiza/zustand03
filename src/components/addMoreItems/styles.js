import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: Styles.spacing.m,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: Styles.cor.red,
        paddingVertical: Styles.padding.p - 10,
        paddingHorizontal: Styles.padding.m,
        borderRadius: Styles.borderRadius.p - 2,
        position: 'absolute',
        bottom: Styles.size.screenHeight * 0.05 + Styles.padding.p + Styles.spacing.m,
    },
    text: {
        fontSize: Styles.fontSize.p - 6,
        color: Styles.cor.red,
    }
});