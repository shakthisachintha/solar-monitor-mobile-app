import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { LocaleContext } from '../../../i18n/LocaleContext'
import { AppText } from '../../'
import TextGrid from '../../TextGrid/TextGrid'

const BatteryWidget = () => {
    const messageService = useContext(LocaleContext);

    return (<View style={styles.widgetContainer}>
        <View style={{ flex: 10 }}>
            <AppText style={{ fontSize: 30 }}>{messageService("TEXT_BATTERY")}</AppText>
            <View style={{ borderBottomWidth: 1, marginTop: 5, marginBottom: 10 }} />
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

const styles = StyleSheet.create({
    widgetContainer: {
        justifyContent: 'space-between',
        padding: 10,
        paddingRight: 0,
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: 'center'
    }
})