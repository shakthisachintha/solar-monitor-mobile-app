import { StyleSheet, TextStyle } from "react-native";

export const ThemeColors = {
    DARK: '#222831',
    GRAY: '#393E46',
    ORANGE: '#D65A31',
    LIGHT: '#EEEEEE',
    GREEN: '#91C483',
    WHITE: "#fefefe"
}

export const StyleParams = {
    fontSizes: {
        H1: 36,
        H2: 34,
        H3: 30,
        H4: 28,
        H5: 24,
        Regular: 18,
        Small: 16
    },
    spacer: {
        // Used for paddings and margins
        Small: 10,
        Medium: 15,
        Large: 20,
    },
    borderWidth: {
        Small: 1,
        Medium: 2,
        Large: 3,
        Larger: 5
    },
    borderRadius: {
        Small: 2,
        Medium: 5,
        Large: 10,
        Larger: 15,
    }
}

export const FontFamilies: Record<string, TextStyle> = {
    regular: {
        fontFamily: 'Poppins-Regular'
    },
    medium: {
        fontFamily: 'Poppins-SemiBold'
    },
    bold: {
        fontFamily: 'Poppins-Bold'
    },
    bolder: {
        fontFamily: 'Poppins-ExtraBold'
    },
    light: {
        fontFamily: 'Poppins-Light'
    },
    thin: {
        fontFamily: 'Poppins-Thin'
    }
}

export const lightTheme = StyleSheet.create({

});

export const darkTheme = StyleSheet.create({

});