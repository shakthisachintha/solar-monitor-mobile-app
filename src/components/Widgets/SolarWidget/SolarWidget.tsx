import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from "lottie-react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { AppText, TextGrid } from '../../'
import { Animations } from '../../../assets';
import { styles as widgetStyles } from '../BatteryWidget/BatteryWidget';
import { StyleParams, ThemeColors } from '../../../styles/global.style';
import { IAppState } from '../../../types/store.types';
import { connect } from 'react-redux';
import { Units } from '../../../types';

/*
When charging from solar & utility
solar_input = solar_home_usage + solar_battery_charge
home_usage = grid_home_usage + solar_home_usage

solar_home_usage  = total_home_usage - grid_home_usage
                  = inverter.power - (grid_total_usage - grid_battery_charge_power) 
                  = inverter.power - (grid.voltage * grid.inputCurrent - grid.batteryChargeCurrent * battery.voltage)
*/

interface ISolarWidgetProps {
  solarHomeUsage?: number,
  solarChargePower?: number,
  solarVoltage?: number,
  solarCurrent?: number,
  solarInputPower?: number,
  panelCount?: number,
  panelPeakPower?: number,
}

const SolarWidget: React.FC<ISolarWidgetProps> = ({
  solarHomeUsage = 0,
  solarChargePower = 0,
  solarVoltage = 0,
  solarCurrent = 0,
  solarInputPower = 0,
  panelCount = 0,
  panelPeakPower = 0 }) => {

  const solarUsage = (solarInputPower / (panelPeakPower * panelCount)) * 100
  const Capacity = (fillValue: number): JSX.Element => {
    const cap = (panelPeakPower * panelCount * fillValue / 100) / 1000
    return (
      <View>
        <AppText unit={Units.POWER}>{cap.toString()}</AppText>
      </View>
    )
  }

  return (
    <View style={styles.widgetColumn}>
      <View style={styles.widgetContainer}>
        <View style={{ flex: 10 }}>
          <AppText style={{ ...widgetStyles.widgetTitleText, textAlign: 'right' }} value='TEXT_SOLAR' />
          <View style={widgetStyles.titleUnderline} />
          <TextGrid>
            {[
              { key: 'TEXT_CAPACITY', value: (panelCount * panelPeakPower / 1000), unit: Units.KPOWER },
              { key: 'TEXT_VOLTAGE', value: solarVoltage, unit: Units.VOLTAGE },
              { key: 'TEXT_CURRENT', value: solarCurrent, unit: Units.CURRENT }
            ]}
          </TextGrid>
        </View>
        <View style={{
          flex: 6, paddingLeft: 10,
          alignItems: "center"
        }}
        >
          <AnimatedCircularProgress
            size={120}
            arcSweepAngle={270}
            backgroundWidth={5}
            lineCap={'round'}
            children={Capacity}
            width={18}
            fill={solarUsage}
            rotation={225}
            tintColor={ThemeColors.ORANGE}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor={ThemeColors.GRAY} />
        </View>
      </View>
      {renderBottomBar(solarHomeUsage, solarChargePower)}
    </View>
  )
}

const renderBottomBar = (homeUsagePower: number, batteryChargePower: number) => {
  return (
    <View style={{ borderTopWidth: 1, flexDirection: 'row', alignItems: "center", justifyContent: "space-around" }}>

      <View style={{ alignItems: "center", marginStart: StyleParams.spacer.Small }}>
        <Icon style={{ color: ThemeColors.DARK, fontSize: 50 }} name='home-lightning-bolt-outline' />
        <AppText unit={Units.POWER}>{homeUsagePower.toString()}</AppText>
      </View>
      <View style={{ transform: [{ scaleX: -1 }] }}>
        {homeUsagePower > 2 && <LottieView style={{ width: 100 }} source={Animations.lineAnimation} autoPlay loop />}
        {homeUsagePower <= 2 && <View style={{ width: 100, marginVertical: 2.5 * StyleParams.spacer.Large }}></View>}
      </View>

      <Icon style={{ color: ThemeColors.ORANGE, fontSize: 50 }} name='white-balance-sunny' />

      <View>
        {batteryChargePower > 2 && <LottieView style={{ width: 100 }} source={Animations.lineAnimation} autoPlay loop />}
        {batteryChargePower <= 2 && <View style={{ width: 100, marginVertical: 2.5 * StyleParams.spacer.Large }}></View>}
      </View>
      <View style={{ alignItems: "center", marginEnd: StyleParams.spacer.Small }}>
        <Icon style={{ color: ThemeColors.DARK, fontSize: 50 }} name='battery-80' />
        <AppText unit={Units.POWER}>{batteryChargePower}</AppText>
      </View>

    </View>)
};

const mapStateToProps = (state: IAppState) => {
  const { inverter, grid, battery, solar } = state
  return {
    solarHomeUsage: solar.power - solar.batteryChargeCurrent * battery.voltage,
    solarChargePower: battery.voltage * solar.batteryChargeCurrent,
    solarVoltage: solar.voltage,
    solarCurrent: solar.current,
    solarInputPower: solar.power,
    panelCount: solar.panelCount,
    panelPeakPower: solar.panelPeakPower
  }
}

export default connect(mapStateToProps, null)(SolarWidget)

export const styles = StyleSheet.create({
  widgetColumn: {
    marginHorizontal: StyleParams.spacer.Small,
    marginVertical: StyleParams.spacer.Small,
    backgroundColor: ThemeColors.WHITE,
    elevation: 6,
    borderRadius: StyleParams.borderRadius.Large,
  },
  widgetContainer: {
    padding: StyleParams.spacer.Medium,
    paddingRight: 0,
    justifyContent: 'space-between',
    flexDirection: "row-reverse",
    alignItems: 'center'
  }
})