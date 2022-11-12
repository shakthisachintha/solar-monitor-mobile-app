import { Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import AppModal from '../../AppModal/AppModal'
import AppText from '../../AppText/AppText'
import { connect } from 'react-redux'
import { IAppState } from '../../../types/store.types'
import { ChargerPriority, OutputPriority, Units } from '../../../types'

interface IButtonBarProps {
    chargerPriority?: ChargerPriority;
    outputPriority?: OutputPriority;
    maxBatteryChargeCurrent?: number;
    maxGridChargeCurrent?: number;
}

const renderModalContent = (title: string): JSX.Element => {
    return (<>
        <View >
            <View style={{backgroundColor: 'white',padding:10, margin:10, borderRadius: 10}}>
                <View>
                    <AppText>{title}</AppText>
                </View>
                <View>
                    <AppText>Modal Content</AppText>
                </View>
            </View>
        </View>
    </>)
}


const ButtonBar: React.FC<IButtonBarProps> = ({ chargerPriority = ChargerPriority.CSO, outputPriority = OutputPriority.SBU, maxBatteryChargeCurrent = 0, maxGridChargeCurrent = 0 }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalContent, setModalContent] = useState<JSX.Element>()

    const modalContentArray = [
        renderModalContent('Set output priority'),
        renderModalContent('Set charger priority'),
        renderModalContent('Set maximum utility charge current'),
        renderModalContent('Set maximum charge current')
    ]
    const toggleModalVisibility = (contentId: number) => {
        setModalContent(modalContentArray[contentId])
        setModalVisible(true);
    }

    return (
        <>
            <AppModal modalContentStyle={{backgroundColor: 'black', opacity: 0.9}} onRequestClose={() => { setModalVisible(false) }} onOutTouch={() => { setModalVisible(false) }} size={30} position={'middle'} animationType={'slide'} visible={modalVisible} transparent={true} >
                {modalContent}
            </AppModal>
            <View style={styles.container}>
                <Pressable android_ripple={{ foreground: true, color: 'pink' }} onPress={() => toggleModalVisibility(0)} style={styles.button}><AppText>{OutputPriority[outputPriority]}</AppText></Pressable>
                <Pressable android_ripple={{ foreground: true, color: 'pink' }} onPress={() => toggleModalVisibility(1)} style={styles.button}><AppText>{ChargerPriority[chargerPriority]}</AppText></Pressable>
                <Pressable android_ripple={{ foreground: true, color: 'pink' }} onPress={() => toggleModalVisibility(2)} style={styles.button}><AppText unit={Units.CURRENT}>{maxGridChargeCurrent}</AppText></Pressable>
                <Pressable android_ripple={{ foreground: true, color: 'pink' }} onPress={() => toggleModalVisibility(3)} style={styles.button}><AppText unit={Units.CURRENT}>{maxBatteryChargeCurrent}</AppText></Pressable>
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

const styles = StyleSheet.create({
    container: {
        marginTop: 20, marginBottom: 10, flexDirection: 'row', justifyContent: "space-between", paddingRight: 10
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'pink',
        width: 80,
        padding: 10,
        height: 50,
        elevation: 6
    }
})