import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppText from '../../AppText/AppText'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextGrid from '../../TextGrid/TextGrid';
import ButtonBar from './ButtonBar';
import { styles as widgetStyles } from '../BatteryWidget/BatteryWidget'
import { StyleParams, ThemeColors } from '../../../styles/global.style';
import { IAppState } from '../../../types/store.types';
import { connect } from 'react-redux';
import { Units } from '../../../types';

interface IInverterWidgetProps{
  voltage?: number;
  current?: number;
  frequency?: number;
  power?: number;
}

const InverterWidget: React.FC<IInverterWidgetProps> = ({voltage=0, current=0, frequency=0, power=0}) => {

  const inverterPower = (power / (3300)) * 100
  const Capacity = (fillValue: number): JSX.Element => {
    let cap =  (3300 * fillValue / 100) / 1000
    return (
      <View>
        {power < 1000 && <AppText unit={Units.POWER}>{Math.round(cap*1000).toString()}</AppText>}
        {power >= 1000 && <AppText unit={Units.KPOWER}>{Math.round(cap).toString()}</AppText>}
      </View>
    )
  }


  return (
    <>
      <View style={styles.widgetContainer}>
        <View style={styles.innerWidget}>
          <View style={{ flex: 9 }}>
            <AppText value='TEXT_INVERTER' style={widgetStyles.widgetTitleText} />
            <View style={widgetStyles.titleUnderline} />
            <TextGrid>
              {[
                { key: 'TEXT_VOLTAGE', value: voltage, unit: Units.VOLTAGE },
                { key: 'TEXT_CURRENT', value: current, unit: Units.CURRENT },
                { key: 'TEXT_FREQUENCY', value: frequency, unit: Units.FREQUENCY }
              ]}
            </TextGrid>
          </View>
          <View style={{ flex: 5, marginLeft: StyleParams.spacer.Small, alignItems: "center" }}>
            <AnimatedCircularProgress
              size={120}
              backgroundWidth={2 * StyleParams.spacer.Small}
              lineCap={'butt'}
              children={Capacity}
              width={8}
              fill={inverterPower}
              dashedTint={{
                width: .2 * StyleParams.spacer.Small,
                gap: .5 * StyleParams.spacer.Small
              }}
              rotation={270}
              tintColor={ThemeColors.GREEN}
              backgroundColor={ThemeColors.GRAY} />
          </View>
        </View>
        <ButtonBar />
      </View>
    </>
  )
}

const mapStateToProps = (state: IAppState) => {
  return {
    ...state.inverter
  }
}

export default connect(mapStateToProps, null)(InverterWidget)

const styles = StyleSheet.create({
  widgetContainer: {
    ...widgetStyles.widgetContainer,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  innerWidget: {
    justifyContent: 'space-between',
    flexDirection: "row",
    alignItems: 'center'
  }
})