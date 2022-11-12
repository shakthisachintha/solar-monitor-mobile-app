import React from 'react'
import { StyleSheet, View } from 'react-native'
import LottieView from "lottie-react-native";

import { AppText, TextGrid } from '../../'
import { Animations } from '../../../assets';
import { styles as WidgetsStyles } from '../SolarWidget/SolarWidget';
import { styles as WidgetStyles2 } from '../BatteryWidget/BatteryWidget';
import { StyleParams } from '../../../styles/global.style';
import { Units } from '../../../types';

const Capacity = (fillValue: number): JSX.Element => {
    const cap = (2400 * fillValue / 100) / 1000
    return (
        <View>
            <AppText>{cap.toString()} Kw</AppText>
        </View>
    )
}

const UtilityWidget = () => {
    return (
        <View style={styles.widgetColumn}>
            <View style={styles.widgetContainer}>
                <View style={{ flex: 10 }}>
                    <AppText style={{ ...WidgetStyles2.widgetTitleText, textAlign: 'right' }}>Utility Power</AppText>
                    <View style={WidgetStyles2.titleUnderline} />
                    <TextGrid>
                        {[
                            { key: 'TEXT_VOLTAGE', value: "240.5", unit: Units.VOLTAGE },
                            { key: 'TEXT_CURRENT', value: "2.5", unit: Units.CURRENT },
                            { key: 'TEXT_CHARGE_POWER', value: "10", unit: Units.POWER }
                        ]}
                    </TextGrid>
                    <AppText>Possible power cut</AppText>
                </View>
                <View style={{
                    flex: 6,
                    paddingLeft: 0.5 * StyleParams.spacer.Small,
                    alignItems: "center"
                }}>
                    <LottieView style={{ width: 120 }} source={Animations.noPowerAnimation} autoPlay loop />
                </View>
            </View>
        </View>

    )
}

export default UtilityWidget

const styles = StyleSheet.create({
    widgetColumn: {
        ...WidgetsStyles.widgetColumn
    },
    widgetContainer: {
        ...WidgetsStyles.widgetContainer
    }
})