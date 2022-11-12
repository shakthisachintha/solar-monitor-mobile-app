import { Modal, StyleSheet, ViewStyle, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

interface IAppModalProps {
  animationType?: 'slide' | 'fade' | 'none',
  transparent?: boolean,
  visible?: boolean,
  size: number,
  position?: 'top' | 'middle' | 'bottom'
  onRequestClose?: () => void,
  onOutTouch: () => void
  modalContentStyle?: ViewStyle,
  children?: any
}

const AppModal: React.FC<IAppModalProps> = ({ animationType, transparent, visible, size = 40, position = 'middle', onRequestClose, children, onOutTouch, modalContentStyle }) => {

  let topHeight, bottomHeight = "0%";
  let middleHeight = size.toString() + "%"
  switch (position) {
    case "top":
      topHeight = "0%";
      bottomHeight = (100 - size).toString() + "%"
      break;
    case "middle":
      topHeight = bottomHeight = ((100 - size) / 2).toString() + "%"
      break;
    case "bottom":
      bottomHeight = "0%"
      topHeight = (100 - size).toString() + "%"
      break;

    default:
      throw new Error("Invalid argument supplied for position");
  }

  return (
    <Modal animationType={animationType} transparent={transparent} visible={visible} onRequestClose={onRequestClose}>
      <View>
        <View>
          <TouchableWithoutFeedback onPress={() => onOutTouch()}>
            <View style={{ ...styles.modalSpacer, height: topHeight }}></View>
          </TouchableWithoutFeedback>

          <View style={{ height: middleHeight, ...modalContentStyle }}>
            {children}
          </View>

          <TouchableWithoutFeedback onPress={() => onOutTouch()}>
            <View style={{ ...styles.modalSpacer, height: bottomHeight }}></View>
          </TouchableWithoutFeedback>

        </View>
      </View>
    </Modal>
  )
}

export default AppModal

const styles = StyleSheet.create({
  modalSpacer: {
    backgroundColor: 'black',
    opacity: 0.9,
  },
})