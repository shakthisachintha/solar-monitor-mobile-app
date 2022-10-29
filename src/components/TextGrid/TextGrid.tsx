import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import { Messages } from '../../i18n/messages'

interface ITextGridProps {
    separator?: string,
    children: { key: keyof typeof Messages, value: string }[]
}

const renderKeys = (values: { key: keyof typeof Messages, value: string }[]): JSX.Element[] => {
    return values.map(({ key, value }) => {
        return (<AppText key={`${key.toString()}`} value={key} />)
    })
}

const renderSeparator = (values: { key: keyof typeof Messages, value: string }[], seperator: string): JSX.Element[] => {
    return values.map(({key, value}) => {
        return (<AppText key={`${key.toString()}-separator`}> {seperator} </AppText>)
    })
}

const renderValues = (values:{ key: keyof typeof Messages, value: string }[]): JSX.Element[] => {
    return values.map(({ key, value }) => {
        return (<AppText key={`${value.toString()}`}>{value}</AppText>)
    })
}


const TextGrid: React.FC<ITextGridProps> = ({ separator = ":", children }) => {
    return (<View style={{ flexDirection: "row" }}>
        <View>
            {renderKeys(children)}
        </View>
        <View>
            {renderSeparator(children, separator)}
        </View>
        <View>
            {renderValues(children)}
        </View>
    </View>)
}

export default TextGrid

const styles = StyleSheet.create({})