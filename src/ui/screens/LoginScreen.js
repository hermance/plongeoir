import React, { Component } from "react"
import { Text, View, Button } from "react-native"
import { Navigation } from "react-native-navigation"
import { connect } from "react-redux"

class LoginScreen extends Component {
  static navigatorStyle = { navBarHidden: true, tabBarHidden: true }

  launchConnectedApp = () => {
      //todo launch action to save in store the user data, and if setted, call directly this function
      //to avoid reconnect every time
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
    const { i18n } = this.props
    return (
      <View style={{ marginTop: 20 }}>
        <Text>{i18n.t("login.title")}</Text>
        <Button
          onPress={this.launchConnectedApp}
          title={i18n.t("login.button")}
        />
      </View>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    i18n: state.i18n
  }
}
const mapDispatchToProps = () => (dispatch: any) => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
