import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
  return (
    <View style={styles.mainView}>
      <Text>Inverter Monitor React Native</Text>
    </View>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  mainView: {
    alignItems:"center",
    // flex:1,
    flexDirection:"row",
    justifyContent: "center"
  }
})