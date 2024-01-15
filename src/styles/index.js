const { Dimensions } = require("react-native");

const { width, height } = Dimensions.get('window');

export const Styles = {
    size: {
        screenWidth: width,
        screenHeight: height,
        headerHeight: height * 0.2,
        headerHeight2: height * 0.08,
        productHeight: 0,
    },
    padding: {
        gg: 40,
        g: 30,
        m: 22,
        p: 15,
    },
    spacing: {
        gg: 30,
        g: 20,
        m: 10,
        p: 5,
        pp: 2.5,
    },
    borderRadius: {
        gg: 999,
        g: 30,
        m: 15,
        p: 8,
    },
    fontSize: {
        gg: width * 0.09,
        g: width * 0.08,
        m: width * 0.07,
        p: width * 0.055,
        pp: width * 0.035,
    },
    cor: {
        beige: '#D1CFC5',
        black: '#000000',
        white: '#FFFFFF',
        gray: '#7D7D7D',
        red: '#FD3B00',
        green: '#009047',
    }
}

const itemNumberOnScreen = 6
export const spaceBetweenItems = 0

Styles.size.productHeight = (height - Styles.size.headerHeight) / itemNumberOnScreen - spaceBetweenItems - spaceBetweenItems / itemNumberOnScreen;