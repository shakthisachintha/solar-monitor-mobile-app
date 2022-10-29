import { StyleSheet, Text, TextStyle } from 'react-native'
import React, { useContext } from 'react'
import { LocaleContext } from '../../i18n/LocaleContext';
import { Messages } from '../../i18n/messages';

interface IAppTextProps {
    children?: String | String[],
    value?: keyof typeof Messages,
    style?: TextStyle
}

const AppText: React.FC<IAppTextProps> = ({ children, style, value }) => {
    const messageService = useContext(LocaleContext);
    const textValue = value ?  messageService(value) : children;
    return (
        <Text style={{...styles.appText, ...style,}}>{textValue}</Text>
    )
}

export default AppText

const styles = StyleSheet.create({
    appText: {
        fontSize: 18,
        color: "#000000"
        // fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
    }
})