import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../../AppText/AppText'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextGrid from '../../TextGrid/TextGrid';

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
    <View style={styles.widgetContainer}>
      <View style={styles.innerWidget}>
        <View style={{ flex: 9 }}>
          <AppText value='TEXT_INVERTER' style={{ fontSize: 30 }} />
          <View style={{ borderBottomWidth: 1, marginTop: 5, marginBottom: 10 }} />
          <TextGrid>
            {[
              { key: 'TEXT_VOLTAGE', value: "224.5V" },
              { key: 'TEXT_CURRENT', value: "10.5A" },
              { key: 'TEXT_FREQUENCY', value: "50Hz" }
            ]}
          </TextGrid>
        </View>
        <View style={{ flex: 5, marginLeft: 10, alignItems: "center" }}>
          <AnimatedCircularProgress
            size={120}
            backgroundWidth={20}
            lineCap={'butt'}
            children={Capacity}
            width={8}
            fill={99}
            // dashedBackground={{ width: 7, gap: 1 }}
            dashedTint={{ width: 3, gap: 5 }}
            rotation={270}
            tintColor="#ff00ff"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="black" />
        </View>
      </View>
      <View style={{ marginTop: 20, marginBottom: 10, flexDirection: 'row', justifyContent: "space-between", paddingRight: 10 }}>
        <Pressable android_ripple={{ foreground: true, color: 'pink' }} onPress={() => console.log("Hello")} style={styles.button}><AppText>SBU</AppText></Pressable>
        <Pressable android_ripple={{ foreground: true, color: 'pink' }} onPress={() => console.log("Hello")} style={styles.button}><AppText>SNU</AppText></Pressable>
        <Pressable android_ripple={{ foreground: true, color: 'pink' }} onPress={() => console.log("Hello")} style={styles.button}><AppText>5A</AppText></Pressable>
        <Pressable android_ripple={{ foreground: true, color: 'pink' }} onPress={() => console.log("Hello")} style={styles.button}><AppText>40A</AppText></Pressable>
      </View>
    </View>

  )
}

export default InverterWidget

const styles = StyleSheet.create({
  widgetContainer: {
    padding: 10,
    paddingRight: 0,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  innerWidget: {
    justifyContent: 'space-between',
    flexDirection: "row",
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'pink',
    width: 80,
    padding: 10,
    height: 50,
    elevation: 6
  }
})