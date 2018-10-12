import React, { Component } from "react"
import { Text, View, Button, TextInput } from "react-native"
import { Navigation } from "react-native-navigation"
import { connect } from "react-redux"
import appActions from "./../../store/app.action-creator"
import type TypeI18n from "./../../store/i18n/I18NReducer"
//todo faire des package.json pour avoir du @store etc

type Props = {|
  +i18n: TypeI18n,
  login: (email: string, password: string) => Promise<*>,
  user: any //Todo faire la gestion des types
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

  connect = () => {
    const { email, password } = this.state
    const { login } = this.props
    login(email, password).then(res => {
      if (res) {
        this.launchtabBasedApp()
      } else {
        alert("login failded") //TODO gestion d'erreur
      }
    })
  }

  launchtabBasedApp = () => {
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
    //TODO si on a un user dans le store, appeler launchtabBasedApp, sinon render
    const { i18n, user } = this.props
    if (user !== null && !user) {
      return (
        <View style={{ marginTop: 20 }}>
          <Text>{i18n.t("login.title")}</Text>
          <TextInput
            placeholder={i18n.t("login.email")}
            value={this.state.email}
            autoCapitalize="none"
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            placeholder={i18n.t("login.password")}
            value={this.state.password}
            autoCapitalize="none"
            onChangeText={text => this.setState({ password: text })}
          />
          <Button onPress={this.connect} title={i18n.t("login.button")} />
        </View>
      )
    } else {
      this.launchtabBasedApp()
      return null
    }
  }
}

const mapStateToProps = (state: any) => {
  return {
    i18n: state.i18n,
    user: state.app.user
  }
}
const mapDispatchToProps = () => (dispatch: any) => {
  return {
    login: (email: string, password: string) =>
      dispatch(appActions.login(email, password))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
