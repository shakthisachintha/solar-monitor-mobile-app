import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AppText } from '../';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FontFamilies, StyleParams } from '../../styles/global.style';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.headerText}> Solar Home {'\n'} Monitor</AppText>
      <Icon name='menu' size={40} />
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
  container: {
    padding: StyleParams.spacer.Medium,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  headerText: {
    ...FontFamilies.medium,
    fontSize: StyleParams.fontSizes.H1
  }
})