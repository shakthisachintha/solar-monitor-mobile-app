import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {AppText} from '../';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <AppText style={{fontWeight: "900", fontSize:28}}> Solar Home {'\n'} Monitor</AppText>
      <Icon name='menu' size={40}/>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
    container: {
        padding: 15,
        justifyContent: "space-between",
        flexDirection: "row"
    }
})