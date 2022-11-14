import { Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import AppModal from '../../AppModal/AppModal'
import AppText from '../../AppText/AppText'
import { IAppState } from '../../../types/store.types'
import { ChargerPriority, OutputPriority, Units } from '../../../types'
import { FontFamilies, StyleParams, ThemeColors } from '../../../styles/global.style'
import AppButton from '../../AppButton/AppButton'
import { RadioButtons } from '../../RadioButtons/RadioButtons'

interface IButtonBarProps {
    chargerPriority?: ChargerPriority;
    outputPriority?: OutputPriority;
    maxBatteryChargeCurrent?: number;
    maxGridChargeCurrent?: number;
}

const ButtonBar: React.FC<IButtonBarProps> = ({ chargerPriority = ChargerPriority.CSO, outputPriority = OutputPriority.SBU, maxBatteryChargeCurrent = 0, maxGridChargeCurrent = 0 }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalContent, setModalContent] = useState<JSX.Element>()

    const renderModalContent = (onSubmit: (x: any) => void, renderFunction: (onSubmit: (x: any) => void) => JSX.Element): JSX.Element => {
        return (<>
            <View >
                <View style={{ backgroundColor: 'white', padding: StyleParams.spacer.Large, margin: StyleParams.spacer.Large, borderRadius: 10 }}>
                    {renderFunction(onSubmit)}
                </View>
            </View>
        </>)
    }

    const renderModalFooter = (onSubmit: () => void, onCancel: () => void): JSX.Element => {
        return (<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 1, paddingEnd: StyleParams.spacer.Large * 4 }}>
                <AppButton containerStyle={{ backgroundColor: ThemeColors.ORANGE }} title='Save' loading={false} disabled={false} onPress={() => onSubmit()}></AppButton>
            </View>
            <View style={{ flex: 1, paddingStart: StyleParams.spacer.Large * 4 }}>
                <AppButton containerStyle={{ backgroundColor: ThemeColors.DARK }} title='Cancel' loading={false} disabled={false} onPress={() => onCancel()}></AppButton>
            </View>
        </View>);
    }

    const renderOutputPriorityChange = (onSubmit: (x: OutputPriority) => void): JSX.Element => {
        let outputPriorityFormValue: OutputPriority = outputPriority
        return (
            <>
                <View>
                    <AppText style={styles.modalTitle}>Set Output Priority</AppText>
                </View>
                <View>
                    <RadioButtons selectedItemValue={outputPriority} onChange={(x) => { outputPriorityFormValue = x }} radioButtons={[
                        { title: "UTI", value: OutputPriority.UTI },
                        { title: "SOL", value: OutputPriority.SOL },
                        { title: "SBU", value: OutputPriority.SBU },
                    ]} />
                </View>
                {renderModalFooter(() => onSubmit(outputPriorityFormValue), () => setModalVisible(false))}
            </>)
    }

    const renderChargerPriorityChange = (onSubmit: (x: ChargerPriority) => void): JSX.Element => {
        let chargerPriorityFormValue = chargerPriority;
        return (
            <>
                <View>
                    <AppText style={styles.modalTitle}>Set Charger Priority</AppText>
                </View>
                <View>
                    <RadioButtons selectedItemValue={chargerPriority} onChange={(x) => { chargerPriorityFormValue = x }} radioButtons={[
                        { title: "CSO", value: ChargerPriority.CSO },
                        { title: "SNU", value: ChargerPriority.SNU },
                        { title: "CUB", value: ChargerPriority.CUB },
                        { title: "OSO", value: ChargerPriority.OSO },
                    ]} />
                </View>
                {renderModalFooter(() => onSubmit(chargerPriorityFormValue), () => setModalVisible(false))}
            </>
        )
    }

    const renderMaxBatteryChargeCurrentChange = (onSubmit: (x: number) => void): JSX.Element => {
        let maxBatteryChargeCurrentFormValue = maxBatteryChargeCurrent;
        return (
            <>
                <View>
                    <AppText style={styles.modalTitle}>Set Max Charge Current</AppText>
                </View>
                <View>
                    <RadioButtons selectedItemValue={maxBatteryChargeCurrent} onChange={(x) => { maxBatteryChargeCurrentFormValue = x }} radioButtons={[
                        { title: "30A", value: 30, },
                        { title: "35A", value: 35 },
                        { title: "40A", value: 40 },
                        { title: "45A", value: 45 },
                        { title: "50A", value: 50 },
                    ]} />
                </View>
                {renderModalFooter(() => onSubmit(maxBatteryChargeCurrentFormValue), () => setModalVisible(false))}
            </>
        )
    }

    const renderUtilityChargeCurrentChange = (onSubmit: (x: number) => void): JSX.Element => {
        let utilityChargeCurrentFormValue = maxGridChargeCurrent
        return (
            <>
                <View>
                    <AppText style={styles.modalTitle}>Set Grid Charge Current</AppText>
                </View>
                <View>
                    <RadioButtons selectedItemValue={maxGridChargeCurrent} onChange={(x) => { utilityChargeCurrentFormValue = x }} radioButtons={[
                        { title: "5A", value: 5 },
                        { title: "10A", value: 10 },
                        { title: "15A", value: 15 },
                        { title: "20A", value: 20 },
                        { title: "25A", value: 25 },
                    ]} />
                </View>
                {renderModalFooter(() => onSubmit(utilityChargeCurrentFormValue), () => setModalVisible(false))}
            </>)
    }

    const handleOutputPrioiritySubmit = (value: OutputPriority) => {
        // @Todo Map Dispatch to props to actions
        console.log("Output Prioirty", OutputPriority[value]);
    }

    const handleChargerPrioritySubmit = (value: ChargerPriority) => {
        // @Todo Map Dispatch to props to actions
        console.log("Charger Prioirty", ChargerPriority[value]);
    }

    const handleUtilityChargeCurrentSubmit = (value: number) => {
        // @Todo Map Dispatch to props to actions
        console.log("Utility Charge Current", value);
    }

    const handleMaximumChargeCurrentSubmit = (value: number) => {
        // @Todo Map Dispatch to props to actions
        console.log("Max Charge Current", value);
    }

    const modalContentArray = [
        renderModalContent(handleOutputPrioiritySubmit, renderOutputPriorityChange),
        renderModalContent(handleChargerPrioritySubmit, renderChargerPriorityChange),
        renderModalContent(handleUtilityChargeCurrentSubmit, renderUtilityChargeCurrentChange),
        renderModalContent(handleMaximumChargeCurrentSubmit, renderMaxBatteryChargeCurrentChange)
    ]

    const toggleModalVisibility = (contentId: number) => {
        setModalContent(modalContentArray[contentId])
        setModalVisible(true);
    }

    return (
        <>
            <AppModal modalContentStyle={{ backgroundColor: 'black', opacity: 0.9 }} onRequestClose={() => { setModalVisible(false) }} onOutTouch={() => { setModalVisible(false) }} size={40} position={'middle'} animationType={'slide'} visible={modalVisible} transparent={true} >
                {modalContent}
            </AppModal>
            <View style={styles.container}>
                <Pressable android_ripple={styles.rippleConfig} onPress={() => toggleModalVisibility(0)} style={styles.button}><AppText style={styles.buttonText}>{OutputPriority[outputPriority]}</AppText></Pressable>
                <Pressable android_ripple={styles.rippleConfig} onPress={() => toggleModalVisibility(1)} style={styles.button}><AppText style={styles.buttonText}>{ChargerPriority[chargerPriority]}</AppText></Pressable>
                <Pressable android_ripple={styles.rippleConfig} onPress={() => toggleModalVisibility(2)} style={styles.button}><AppText style={styles.buttonText} unit={Units.CURRENT}>{maxGridChargeCurrent}</AppText></Pressable>
                <Pressable android_ripple={styles.rippleConfig} onPress={() => toggleModalVisibility(3)} style={styles.button}><AppText style={styles.buttonText} unit={Units.CURRENT}>{maxBatteryChargeCurrent}</AppText></Pressable>
            </View>
        </>
    )
}

const mapStateToProps = (state: IAppState) => {
    return {
        ...state.config
    }
}

export default connect(mapStateToProps, null)(ButtonBar)

export const styles = StyleSheet.create({
    container: {
        marginTop: StyleParams.spacer.Large,
        marginBottom: StyleParams.spacer.Small,
        paddingRight: StyleParams.spacer.Small,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: StyleParams.borderRadius.Medium,
        backgroundColor: ThemeColors.GRAY,
        padding: StyleParams.spacer.Small,
        width: 80,
        height: 50,
        elevation: 6
    },
    rippleConfig: {
        foreground: true,
        color: ThemeColors.GRAY
    },
    buttonText: {
        color: ThemeColors.LIGHT
    },
    modalTitle: {
        ...FontFamilies.semibold,
        fontSize: StyleParams.fontSizes.H4
    }
})