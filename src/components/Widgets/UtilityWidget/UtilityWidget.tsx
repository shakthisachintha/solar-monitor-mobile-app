import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from "lottie-react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import {AppText} from '../../'
import { Animations } from '../../../assets';

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
                    <AppText style={{ fontSize: 30, textAlign: 'right' }}>UTILITY POWER</AppText>
                    <View style={{ borderBottomWidth: 1, marginTop: 5, marginBottom: 10 }} />
                    <AppText>Capacity : 2.4Kw</AppText>
                    <AppText>Voltage  : 240.6V</AppText>
                    <AppText>Current  : 10A</AppText>
                </View>
                <View style={{
                    flex: 6, paddingLeft: 10,
                    alignItems: "center"
                }}
                >
                    <LottieView style={{ width: 100 }} source={Animations.utilityAnimation} autoPlay loop />
                </View>
            </View>
        </View>

    )
}

export default UtilityWidget

const styles = StyleSheet.create({
    widgetColumn: {
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 0.9,
        borderRadius: 10,
    },
    widgetContainer: {
        padding: 10,
        paddingRight: 0,
        justifyContent: 'space-between',
        flexDirection: "row-reverse",
        alignItems: 'center'
    }
})