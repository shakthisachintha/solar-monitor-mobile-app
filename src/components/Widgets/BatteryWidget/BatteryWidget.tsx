import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { LocaleContext } from '../../../i18n/LocaleContext'
import { AppText } from '../../'
import TextGrid from '../../TextGrid/TextGrid'
import { StyleParams, ThemeColors } from '../../../styles/global.style'

const BatteryWidget = () => {
    const messageService = useContext(LocaleContext);

    return (<View style={styles.widgetContainer}>
        <View style={{ flex: 10 }}>
            <AppText style={styles.widgetTitleText}>{messageService("TEXT_BATTERY")}</AppText>
            <View style={styles.titleUnderline} />
            <TextGrid>
                {[
                    { key: 'TEXT_OUTPUT_CURRENT', value: "10A" },
                    { key: 'TEXT_VOLTAGE', value: "24.5V" },
                    { key: 'TEXT_CHARGE_CURRENT', value: "10.5A" }
                ]}
            </TextGrid>
        </View>
        <View style={{ flex: 4 }}>
            <Icon style={{ color: "green", fontSize: 120 }} name='battery-80' />
        </View>
    </View>)
}

export default BatteryWidget

export const styles = StyleSheet.create({
    widgetContainer: {
        justifyContent: 'space-between',
        padding: StyleParams.spacer.Medium,
        paddingRight: 0,
        marginHorizontal: StyleParams.spacer.Small,
        marginVertical: StyleParams.spacer.Small,
        backgroundColor: ThemeColors.WHITE,
        elevation: 6,
        borderRadius: StyleParams.borderRadius.Large,
        flexDirection: "row",
        alignItems: 'center'
    },
    widgetTitleText: {
        fontSize: StyleParams.fontSizes.H3
    },
    titleUnderline: {
        borderBottomColor: ThemeColors.GRAY,
        borderBottomWidth: StyleParams.borderWidth.Small,
        marginTop: .5 * StyleParams.spacer.Small,
        marginBottom: StyleParams.spacer.Small
    }
})