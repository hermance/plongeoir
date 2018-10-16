import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import styles from "./styles"

type Props = {|
  name: string,
  color: string,
  textColor?: ?string,
  onPress: () => void
|}

class BasicButton extends React.PureComponent<Props, void> {
  render() {
    const { textColor } = this.props
    const style = textColor
      ? {
          color: textColor,
          fontSize: 16
        }
      : styles.classicButtonText
    return (
      <TouchableOpacity
        style={[styles.classicButton, { backgroundColor: this.props.color }]}
        onPress={() => this.props.onPress()}
      >
        <Text style={style}> {this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}

export default BasicButton
