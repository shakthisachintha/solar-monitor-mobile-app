import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { LocaleContext } from '../../../i18n/LocaleContext'
import { AppText } from '../../'
import TextGrid from '../../TextGrid/TextGrid'
import { FontFamilies, StyleParams, ThemeColors } from '../../../styles/global.style'
import { IAppState } from '../../../types/store.types'
import { connect } from 'react-redux'
import { Units } from '../../../types'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

interface IBatteryWidgetProps {
    voltage?: number,
    current?: number,
    chargePower?: number,
    soc?: number
}

const Capacity = (fillValue: number): JSX.Element => {
    const cap = fillValue
    return (
      <View>
        <AppText style={{fontSize: StyleParams.fontSizes.H5, ...FontFamilies.medium}} unit={Units.PERCENTAGE}>{cap.toString()}</AppText>
      </View>
    )
  }

const BatteryWidget: React.FC<IBatteryWidgetProps> = ({voltage=0, current=0, chargePower=0, soc=0}) => {
    const messageService = useContext(LocaleContext);

    return (<View style={styles.widgetContainer}>
        <View style={{ flex: 10 }}>
            <AppText style={styles.widgetTitleText}>{messageService("TEXT_BATTERY")}</AppText>
            <View style={styles.titleUnderline} />
            <TextGrid>
                {[
                    { key: 'TEXT_VOLTAGE', value: voltage, unit: Units.VOLTAGE },
                    { key: 'TEXT_CURRENT', value: current, unit: Units.CURRENT },
                    { key: 'TEXT_CHARGE_POWER', value: chargePower, unit: Units.POWER }
                ]}
            </TextGrid>
        </View>
        <View style={{ flex: 5, marginLeft: StyleParams.spacer.Small, alignItems: "center" }}>
            <AnimatedCircularProgress
              size={100}
              backgroundWidth={StyleParams.spacer.Medium}
              lineCap={'round'}
              children={Capacity}
              width={StyleParams.spacer.Medium}
              fill={soc}
              rotation={0}
              tintColor={ThemeColors.GREEN}
              backgroundColor={ThemeColors.GRAY} />
          </View>
    </View>)
}

const mapStateToProps = (state: IAppState) => {
    return {
        ...state.battery
    }
}

export default connect(mapStateToProps, null)(BatteryWidget);

export const styles = StyleSheet.create({
    widgetContainer: {
        justifyContent: 'space-between',
        padding: StyleParams.spacer.Medium,
        paddingRight: 0,
        marginHorizontal: StyleParams.spacer.Small,
        marginVertical: StyleParams.spacer.Small,
        backgroundColor: ThemeColors.WHITE,
        elevation: 6,
        borderRadius: StyleParams.borderRadius.Large,
        flexDirection: "row",
        alignItems: 'center'
    },
    widgetTitleText: {
        fontSize: StyleParams.fontSizes.H3
    },
    titleUnderline: {
        borderBottomColor: ThemeColors.GRAY,
        borderBottomWidth: StyleParams.borderWidth.Small,
        marginTop: .5 * StyleParams.spacer.Small,
        marginBottom: StyleParams.spacer.Small
    }
})