import { Pressable, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import AppText from '../AppText/AppText';

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
    // if (selectedItemValue) {
    //     const modified = buttonArray.map(x => {
    //         if (x.value === selectedItemValue)
    //             x.selected = true;
    //         return x;
    //     });
    //     setButtonArray(modified);
    // }
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
        marginTop: 20, marginBottom: 10, flexDirection: 'row', justifyContent: "space-between", paddingRight: 10
    },
    radioButtonSelected: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'pink',
        width: 70,
        padding: 10,
        height: 50,
        elevation: 6
    },
    radioButton: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'pink',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        width: 70,
        padding: 10,
        height: 50,
    }
})