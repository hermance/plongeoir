import React, { Component } from "react"
import { Text, View, Button } from "react-native"
import { Navigation } from "react-native-navigation"
import { connect } from "react-redux"

class LoginScreen extends Component {
  static navigatorStyle = { navBarHidden: true, tabBarHidden: true }

  launchConnectedApp = () => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: "One",
          screen: "SettingsScreen", // this is a registered name for a screen
          icon: require("./../../../assets/img/ballon.png"),
          selectedIcon: require("./../../../assets/img/ballon.png"),
          title: "Screen One"
        },
        {
          label: "Two",
          screen: "HomeScreen",
          icon: require("./../../../assets/img/sweet.png"),
          selectedIcon: require("./../../../assets/img/sweet.png"),
          title: "Screen Two"
        }
      ]
    })
  }

  render() {
    //todo if login, go directly on tabbase app => need redux
    return (
      <View>
        <Text>Hello world!</Text>
        <Button onPress={this.launchConnectedApp} title={"Click me"} />
      </View>
    )
  }
}

const mapStateToProps = (state: any) => {return {}}//TODO
const mapDispatchToProps = () => (dispatch: any) => {return {}} //TODO
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen)
