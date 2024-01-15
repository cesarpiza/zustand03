import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        height: Styles.size.headerHeight2,
        backgroundColor: Styles.cor.red,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: Styles.padding.m,
        columnGap: Styles.padding.m,
        position: 'absolute',
        zIndex: 999,
        width: '100%',
    },
    title: {
        color: Styles.cor.white,
        textAlign: 'center',
        textTransform: 'capitalize',
        fontSize: Styles.fontSize.p,
    }
});