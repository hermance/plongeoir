import React, { Component } from "react"
import { Text, View } from "react-native"

export default class SettingsScreen extends Component {
  static navigatorStyle = { tabBarHidden: false, navBarHidden: true }

  render() {
    return (
      <View style={{ marginTop: 60 }}>
        <Text>Settings</Text>
      </View>
    )
  }
}
