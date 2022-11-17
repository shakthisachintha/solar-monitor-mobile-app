import { Pressable, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppText from '../AppText/AppText';
import { StyleParams, ThemeColors } from '../../styles/global.style';

interface IRadioButtonProps {
    onChange: (x: any) => void;
    radioButtons: RadioButton[];
    selectedItemValue?: number | string | any
}

type RadioButton = {
    title: string;
    value: number | string | any;
    selected?: boolean;
};

export const RadioButtons: React.FC<IRadioButtonProps> = ({ onChange, radioButtons, selectedItemValue }) => {
    const [buttonArray, setButtonArray] = useState<RadioButton[]>(radioButtons);

    useEffect(() => {
        const modified = buttonArray.map(x => {
            if (x.selected)
                x.selected = false;
            if (x.value === selectedItemValue)
                x.selected = true;
            return x;
        });
        setButtonArray(modified);
    }, [selectedItemValue])


    const changeSelectedClass = (value: any) => {
        const modified = buttonArray.map(x => {
            if (x.selected)
                x.selected = false;
            if (x.value === value)
                x.selected = true;
            return x;
        });
        onChange(value);
        setButtonArray(modified);
    };

    const buttons = buttonArray.map(({ value, title, selected }) => {
        return (<Pressable
            key={value}
            style={selected && styles.radioButtonSelected || styles.radioButton}
            onPress={() => changeSelectedClass(value)}>
            <AppText>{title}</AppText>
        </Pressable>);
    });

    return (
        <>
            <View style={styles.container}>
                {buttons}
            </View>
        </>
    );
};

export const styles = StyleSheet.create({
    container: {
        marginTop: StyleParams.spacer.Large,
        marginBottom: StyleParams.spacer.Small,
        paddingRight: StyleParams.spacer.Small,
        flexDirection: 'row',
        // marginEnd: StyleParams.spacer.Small
        // justifyContent: "space-between", 
    },
    radioButtonSelected: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: ThemeColors.ORANGE,
        backgroundColor: ThemeColors.ORANGE,
        borderRadius: StyleParams.borderRadius.Medium,
        padding: StyleParams.spacer.Small,
        marginEnd: StyleParams.spacer.Small,
        width: 70,
        height: 50,
        elevation: 6
    },
    radioButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: ThemeColors.DARK,
        borderRadius: StyleParams.borderRadius.Medium,
        borderWidth: StyleParams.borderWidth.Small,
        padding: StyleParams.spacer.Small,
        marginEnd: StyleParams.spacer.Small,
        width: 70,
        height: 50,
    }
})