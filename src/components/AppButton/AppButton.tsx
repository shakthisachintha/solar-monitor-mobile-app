import React from 'react'
import { TouchableOpacity, StyleSheet, Text, ActivityIndicator, View, ColorValue, TextStyle, ViewStyle } from 'react-native'
import { FontFamilies, StyleParams, ThemeColors } from '../../styles/global.style'

interface IAppButtonProps {
    title: string,
    onPress: () => void,
    disabled: boolean,
    loaderColor?: ColorValue,
    loading: boolean,
    containerStyle?: ViewStyle,
    btnTextStyle?: TextStyle
}

const AppButton: React.FC<IAppButtonProps> = ({ title, onPress, disabled = false, loaderColor = null, loading = false, containerStyle, btnTextStyle }) => {
    const bgColor = !loading || disabled ? "black" : "#292929"
    return (
        <TouchableOpacity activeOpacity={0.85} disabled={loading || disabled} style={[{ ...styles.button, backgroundColor: bgColor }, containerStyle]} onPress={onPress}>
            <View style={styles.colCenter}>
                {!loading && <Text style={[styles.btnText, btnTextStyle]}>{title}</Text>}
                {loading && <ActivityIndicator style={{ marginHorizontal: StyleParams.spacer.Large }} size="small" color={loaderColor ? loaderColor : ThemeColors.ORANGE} />}
            </View>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        borderRadius: StyleParams.borderRadius.Large,
        justifyContent: 'space-evenly',
        alignItems: "center",
        padding: StyleParams.spacer.Medium,
        marginVertical: StyleParams.spacer.Small,
    },
    colCenter: {
        flex: 1,
        alignItems: "center",
        height: StyleParams.spacer.Large * 1.1,
        justifyContent: 'center'
    },
    btnText: {
        color: ThemeColors.WHITE,
        ...FontFamilies.regular,
        fontSize: StyleParams.fontSizes.Regular
    }
})