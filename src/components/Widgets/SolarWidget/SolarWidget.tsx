import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from "lottie-react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { AppText, TextGrid } from '../../'
import { Animations } from '../../../assets';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

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
          <AppText style={{ fontSize: 30, textAlign: 'right' }} value='TEXT_SOLAR' />
          <View style={{ borderBottomWidth: 1, marginTop: 5, marginBottom: 10 }} />
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
            // style={{ bac" }}
            arcSweepAngle={270}
            backgroundWidth={5}
            lineCap={'round'}
            children={Capacity}
            width={18}
            fill={50}
            rotation={225}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#3d5875" />
        </View>
      </View>
      {renderBottomBar(400, 200)}
    </View>

  )
}

const renderBottomBar = (homeload: number, battryLoad: number) => {



  return (<View style={{ borderTopWidth: 1, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
    <View style={{ alignItems: "center", marginStart: 10 }}>
      <Icon style={{ color: "green", fontSize: 50 }} name='home-lightning-bolt-outline' />
      <AppText>{homeload.toString()}W</AppText>
    </View>
    <View style={{ transform: [{ scaleX: -1 }] }}>
      <LottieView style={{ width: 100 }} source={Animations.lineAnimation} autoPlay loop />
    </View>
    <Icon style={{ color: "orange", fontSize: 50 }} name='white-balance-sunny' />
    <View>
      <LottieView style={{ width: 100 }} source={Animations.lineAnimation} autoPlay loop />
    </View>
    <View style={{ alignItems: "center", marginEnd: 10 }}>
      <Icon style={{ color: "green", fontSize: 50 }} name='battery-80' />
      <AppText>{homeload.toString()}W</AppText>
    </View>
  </View>)
};

export default SolarWidget

const styles = StyleSheet.create({
  widgetColumn: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 0.9,
    borderRadius: 10,
  },
  widgetContainer: {
    padding: 10,
    paddingRight: 0,
    justifyContent: 'space-between',
    flexDirection: "row-reverse",
    alignItems: 'center'
  }
})