import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppText from '../../AppText/AppText'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextGrid from '../../TextGrid/TextGrid';
import ButtonBar from './ButtonBar';
import { styles as widgetStyles } from '../BatteryWidget/BatteryWidget'
import { StyleParams, ThemeColors } from '../../../styles/global.style';
const InverterWidget = () => {

  const Capacity = (fillValue: number): JSX.Element => {
    const cap = (2400 * fillValue / 100) / 1000
    return (
      <View>
        <AppText>{cap.toString()} Kw</AppText>
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
                { key: 'TEXT_VOLTAGE', value: "224.5V" },
                { key: 'TEXT_CURRENT', value: "10.5A" },
                { key: 'TEXT_FREQUENCY', value: "50Hz" }
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
              fill={24}
              dashedTint={{
                width: .2 * StyleParams.spacer.Small,
                gap: .5 * StyleParams.spacer.Small
              }}
              rotation={270}
              tintColor={ThemeColors.GREEN}
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor={ThemeColors.GRAY} />
          </View>
        </View>
        <ButtonBar />
      </View>
    </>
  )
}

export default InverterWidget

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