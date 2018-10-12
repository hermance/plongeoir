import React, { Component } from "react"
import { Text, View, Button, TextInput } from "react-native"
import { Navigation } from "react-native-navigation"
import { connect } from "react-redux"
import type TypeI18n from "./../../store/i18n/I18NReducer"
//todo faire des package.json pour avoir du @store etc

type Props = {|
  +i18n: TypeI18n
|}

type State = {|
  password: string,
  email: string
|}

class LoginScreen extends React.PureComponent<Props, State> {
  static navigatorStyle = { navBarHidden: true, tabBarHidden: true }

  state = {
    email: "",
    password: ""
  }

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
        <TextInput
          placeholder={i18n.t("login.email")}
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          placeholder={i18n.t("login.password")}
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
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
