import { StyleSheet, Text, TextStyle } from 'react-native'
import React, { useContext } from 'react'
import { LocaleContext } from '../../i18n/LocaleContext';
import { Messages } from '../../i18n/messages';
import { Units } from '../../types';
import { UnitTexts } from '../../constants/units.const';
import { FontFamilies, StyleParams, ThemeColors } from '../../styles/global.style';

interface IAppTextProps {
    children?: String | String[] | number,
    value?: keyof typeof Messages,
    style?: TextStyle,
    unit?: Units
}

const AppText: React.FC<IAppTextProps> = ({ children, style, value, unit }) => {
    const messageService = useContext(LocaleContext);
    let textValue = value ?  messageService(value) : children;
    if (unit) {
       textValue = textValue + " " + UnitTexts[unit]
    }
    return (
        <Text style={{...styles.appText, ...style,}}>{textValue}</Text>
    )
}

export default AppText

const styles = StyleSheet.create({
    appText: {
        fontSize: StyleParams.fontSizes.Regular,
        color: ThemeColors.DARK,
        ...FontFamilies.regular
    }
})