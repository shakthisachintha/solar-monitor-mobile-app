import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from "lottie-react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { AppText, TextGrid } from '../../'
import { Animations } from '../../../assets';
import { styles as widgetStyles } from '../BatteryWidget/BatteryWidget';
import { StyleParams, ThemeColors } from '../../../styles/global.style';

const Capacity = (fillValue: number): JSX.Element => {
  const cap = (2400 * fillValue / 100) / 1000
  return (
    <View>
      <AppText>{cap.toString()} Kw</AppText>
    </View>
  )
}

const SolarWidget = () => {
  return (
    <View style={styles.widgetColumn}>
      <View style={styles.widgetContainer}>
        <View style={{ flex: 10 }}>
          <AppText style={{...widgetStyles.widgetTitleText, textAlign: 'right'}} value='TEXT_SOLAR' />
          <View style={widgetStyles.titleUnderline} />
          <TextGrid>
            {[
              { key: 'TEXT_CAPACITY', value: "2.4Kw" },
              { key: 'TEXT_VOLTAGE', value: "240V" },
              { key: 'TEXT_CURRENT', value: "10A" }
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
            fill={25}
            rotation={225}
            tintColor={ThemeColors.ORANGE}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor={ThemeColors.GRAY} />
        </View>
      </View>
      {renderBottomBar(400, 200)}
    </View>

  )
}

const renderBottomBar = (homeload: number, battryLoad: number) => {
  return (
  <View style={{ borderTopWidth: 1, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
    <View style={{ alignItems: "center", marginStart: StyleParams.spacer.Small }}>
      <Icon style={{ color: ThemeColors.DARK, fontSize: 50 }} name='home-lightning-bolt-outline' />
      <AppText>{homeload.toString()}W</AppText>
    </View>
    <View style={{ transform: [{ scaleX: -1 }] }}>
      <LottieView style={{ width: 100 }} source={Animations.lineAnimation} autoPlay loop />
    </View>
    <Icon style={{ color: ThemeColors.ORANGE, fontSize: 50 }} name='white-balance-sunny' />
    <View>
      <LottieView style={{ width: 100 }} source={Animations.lineAnimation} autoPlay loop />
    </View>
    <View style={{ alignItems: "center", marginEnd: StyleParams.spacer.Small }}>
      <Icon style={{ color: ThemeColors.DARK, fontSize: 50 }} name='battery-80' />
      <AppText>{homeload.toString()}W</AppText>
    </View>
  </View>)
};

export default SolarWidget

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