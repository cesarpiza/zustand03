import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';

export const styles = StyleSheet.create({
    mainContainer: {
        width: Styles.size.screenWidth,
        height: Styles.size.screenHeight,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0,0.55)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: Styles.cor.white,
        width: Styles.size.screenWidth * 0.81,
        borderRadius: Styles.borderRadius.p,
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: Styles.fontSize.pp + 3,
        textAlign: 'center',
        marginTop: Styles.padding.p,
    },
    text: {
        fontSize: Styles.fontSize.pp + 1,
        textAlign: 'center',
        marginTop: Styles.padding.p - 3,
    },
    textInput: {
        borderWidth: 1,
        borderColor: Styles.cor.beige,
        marginHorizontal: Styles.spacing.g,
        borderRadius: Styles.borderRadius.p,
        fontSize: Styles.fontSize.pp + 1,
        padding: Styles.padding.p - 3,
        marginTop: Styles.padding.g,
    },
    buttonsContainer: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: Styles.cor.beige,
        marginTop: Styles.padding.m,
    },
    button: {
        flex: 1,
        paddingVertical: Styles.padding.p,
    },
    buttonText: {
        textTransform: 'capitalize',
        color: Styles.cor.red,
        textAlign: 'center',
        fontSize: Styles.fontSize.pp + 3,
    },
});